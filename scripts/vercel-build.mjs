import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { build as esbuild } from "esbuild";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const out = path.join(root, ".vercel", "output");
const fn = path.join(out, "functions", "index.func");

const viteResult = spawnSync("npx", ["vite", "build"], {
  cwd: root,
  stdio: "inherit",
});
if (viteResult.status !== 0) process.exit(viteResult.status ?? 1);

const clientDir = path.join(dist, "client");
const serverEntry = path.join(dist, "server", "server.js");
if (!existsSync(clientDir) || !existsSync(serverEntry)) {
  console.error("Expected dist/client and dist/server/server.js after vite build.");
  process.exit(1);
}

await rm(out, { recursive: true, force: true });
await mkdir(path.join(out, "static"), { recursive: true });
await mkdir(fn, { recursive: true });

await cp(clientDir, path.join(out, "static"), { recursive: true });

const wrapperPath = path.join(dist, "server", "_vercel-entry.mjs");
await writeFile(
  wrapperPath,
  `import { Readable } from "node:stream";
import server from "./server.js";

function buildRequest(req) {
  const host = req.headers["x-forwarded-host"] || req.headers.host || "localhost";
  const proto = req.headers["x-forwarded-proto"] || "https";
  const url = new URL(req.url || "/", proto + "://" + host).toString();
  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else if (value != null) {
      headers.set(key, value);
    }
  }
  const method = (req.method || "GET").toUpperCase();
  const init = { method, headers };
  if (method !== "GET" && method !== "HEAD") {
    init.body = Readable.toWeb(req);
    init.duplex = "half";
  }
  return new Request(url, init);
}

async function writeResponse(response, res) {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    if (key.toLowerCase() === "content-length") return;
    res.setHeader(key, value);
  });
  if (!response.body) {
    res.end();
    return;
  }
  const reader = response.body.getReader();
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(Buffer.from(value));
    }
  } finally {
    res.end();
  }
}

export default async function handler(req, res) {
  try {
    const request = buildRequest(req);
    const response = await server.fetch(request, {}, {});
    await writeResponse(response, res);
  } catch (err) {
    console.error(err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("content-type", "text/plain; charset=utf-8");
    }
    try { res.end("Internal Server Error"); } catch {}
  }
}
`,
);

await esbuild({
  entryPoints: [wrapperPath],
  bundle: true,
  platform: "node",
  target: "node20",
  format: "esm",
  outfile: path.join(fn, "index.mjs"),
  banner: {
    js: "import { createRequire as __vc_createRequire } from 'node:module'; const require = __vc_createRequire(import.meta.url);",
  },
  logLevel: "info",
});

await writeFile(
  path.join(fn, "package.json"),
  JSON.stringify({ type: "module" }, null, 2),
);

await writeFile(
  path.join(fn, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs22.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
      supportsResponseStreaming: true,
    },
    null,
    2,
  ),
);

await writeFile(
  path.join(out, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: "filesystem" },
        { src: "/.*", dest: "/index" },
      ],
    },
    null,
    2,
  ),
);

console.log("Built .vercel/output for Vercel Build Output API v3.");
