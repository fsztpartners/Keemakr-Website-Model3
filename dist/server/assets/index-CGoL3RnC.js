import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { ArrowRight, Activity, Brain, Zap, Network, Check } from "lucide-react";
function HeroOrb() {
  const nodes = [
    { label: "CRM", angle: 0 },
    { label: "ERP", angle: 60 },
    { label: "Shopify", angle: 120 },
    { label: "Slack", angle: 180 },
    { label: "Stripe", angle: 240 },
    { label: "Gmail", angle: 300 }
  ];
  const R = 150;
  return /* @__PURE__ */ jsxs("div", { className: "relative mx-auto aspect-square w-full max-w-[520px]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 rounded-full blur-3xl opacity-70",
        style: { background: "var(--gradient-radial-cyan)" }
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-10 rounded-full blur-3xl opacity-60",
        style: { background: "var(--gradient-radial-violet)" }
      }
    ),
    /* @__PURE__ */ jsxs("svg", { viewBox: "-200 -200 400 400", className: "relative w-full h-full", children: [
      [80, 120, 160].map((r, i) => /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "0",
          cy: "0",
          r,
          fill: "none",
          stroke: "oklch(1 0 0 / 0.06)",
          strokeWidth: "1",
          strokeDasharray: i === 1 ? "2 6" : "0"
        },
        r
      )),
      nodes.map((n, i) => {
        const x = Math.cos(n.angle * Math.PI / 180) * R;
        const y = Math.sin(n.angle * Math.PI / 180) * R;
        return /* @__PURE__ */ jsx(
          "line",
          {
            x1: "0",
            y1: "0",
            x2: x,
            y2: y,
            stroke: "oklch(0.85 0.18 200 / 0.5)",
            strokeWidth: "1",
            strokeDasharray: "3 6",
            className: "animate-flow",
            style: { animationDelay: `${i * 0.3}s` }
          },
          i
        );
      }),
      nodes.map((n, i) => {
        const x = Math.cos(n.angle * Math.PI / 180) * R;
        const y = Math.sin(n.angle * Math.PI / 180) * R;
        return /* @__PURE__ */ jsxs("g", { className: "animate-float", style: { animationDelay: `${i * 0.4}s` }, children: [
          /* @__PURE__ */ jsx("circle", { cx: x, cy: y, r: "22", fill: "oklch(0.17 0.014 260)", stroke: "oklch(1 0 0 / 0.12)" }),
          /* @__PURE__ */ jsx("text", { x, y: y + 3, textAnchor: "middle", fontSize: "10", fill: "oklch(0.85 0.005 240)", fontWeight: "500", children: n.label })
        ] }, i);
      }),
      /* @__PURE__ */ jsx("circle", { cx: "0", cy: "0", r: "50", fill: "oklch(0.17 0.014 260)", stroke: "oklch(0.85 0.18 200 / 0.6)", strokeWidth: "1.5" }),
      /* @__PURE__ */ jsx("circle", { cx: "0", cy: "0", r: "38", fill: "none", stroke: "oklch(0.62 0.24 290 / 0.6)", strokeWidth: "0.8", strokeDasharray: "2 4" }),
      /* @__PURE__ */ jsx("text", { x: "0", y: "-2", textAnchor: "middle", fontSize: "9", fill: "oklch(0.65 0.02 250)", children: "OPERATOR" }),
      /* @__PURE__ */ jsx("text", { x: "0", y: "14", textAnchor: "middle", fontSize: "14", fontWeight: "700", fill: "oklch(0.97 0.005 240)", children: "KeeMakr" })
    ] })
  ] });
}
function OrchestrationDiagram() {
  const systems = ["Sales", "Marketing", "Ops", "HR", "Finance"];
  return /* @__PURE__ */ jsxs("div", { className: "relative w-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "glass relative rounded-2xl p-6 md:p-8 overflow-hidden", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 opacity-60",
          style: { background: "var(--gradient-radial-cyan)" }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Operator Layer" }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-xl md:text-2xl font-semibold gradient-text", children: "KeeMakr" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-1.5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "h-2 w-2 rounded-full bg-primary animate-pulse-glow",
            style: { animationDelay: `${i * 0.25}s` }
          },
          i
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("svg", { className: "w-full h-16", viewBox: "0 0 500 80", preserveAspectRatio: "none", children: systems.map((_, i) => {
      const x = 50 + i * 100;
      return /* @__PURE__ */ jsx("g", { children: /* @__PURE__ */ jsx(
        "line",
        {
          x1: "250",
          y1: "0",
          x2: x,
          y2: "80",
          stroke: "oklch(0.85 0.18 200 / 0.45)",
          strokeWidth: "1",
          strokeDasharray: "4 4"
        }
      ) }, i);
    }) }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-5 gap-3", children: systems.map((s) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "glass rounded-xl px-4 py-5 text-center text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors",
        children: s
      },
      s
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-3 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Your existing systems" })
  ] });
}
function NetworkGraph() {
  return /* @__PURE__ */ jsxs("div", { className: "glass relative rounded-2xl p-8 md:p-12 overflow-hidden min-h-[420px]", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 opacity-50",
        style: { background: "var(--gradient-radial-violet)" }
      }
    ),
    /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 600 380", className: "relative w-full h-full", children: [
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs("radialGradient", { id: "node", cx: "50%", cy: "50%", r: "50%", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.85 0.18 200)", stopOpacity: "1" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.85 0.18 200)", stopOpacity: "0" })
        ] }),
        /* @__PURE__ */ jsxs("radialGradient", { id: "nodev", cx: "50%", cy: "50%", r: "50%", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.62 0.24 290)", stopOpacity: "1" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.62 0.24 290)", stopOpacity: "0" })
        ] })
      ] }),
      [
        { x1: 300, y1: 190, x2: 110, y2: 90 },
        { x1: 300, y1: 190, x2: 490, y2: 90 },
        { x1: 300, y1: 190, x2: 110, y2: 310 },
        { x1: 300, y1: 190, x2: 490, y2: 310 }
      ].map((l, i) => /* @__PURE__ */ jsx(
        "line",
        {
          ...l,
          stroke: "oklch(0.85 0.18 200 / 0.6)",
          strokeWidth: "1.2",
          strokeDasharray: "6 8",
          className: "animate-flow",
          style: { animationDelay: `${i * 0.4}s` }
        },
        i
      )),
      [
        { x: 110, y: 90, label: "Supplier", sub: "Kee" },
        { x: 490, y: 90, label: "Logistics", sub: "Kee" },
        { x: 110, y: 310, label: "Partner", sub: "Kee" },
        { x: 490, y: 310, label: "Customer", sub: "Kee" }
      ].map((n, i) => /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("circle", { cx: n.x, cy: n.y, r: "46", fill: "url(#node)", opacity: "0.35" }),
        /* @__PURE__ */ jsx(
          "circle",
          {
            cx: n.x,
            cy: n.y,
            r: "26",
            fill: "oklch(0.20 0.015 260)",
            stroke: "oklch(0.85 0.18 200 / 0.7)",
            strokeWidth: "1"
          }
        ),
        /* @__PURE__ */ jsx("text", { x: n.x, y: n.y + 4, textAnchor: "middle", fontSize: "10", fill: "oklch(0.97 0.005 240)", fontWeight: "600", children: n.sub }),
        /* @__PURE__ */ jsx("text", { x: n.x, y: n.y + 56, textAnchor: "middle", fontSize: "11", fill: "oklch(0.65 0.02 250)", children: n.label })
      ] }, i)),
      /* @__PURE__ */ jsx("circle", { cx: "300", cy: "190", r: "70", fill: "url(#nodev)", opacity: "0.5" }),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "300",
          cy: "190",
          r: "44",
          fill: "oklch(0.17 0.014 260)",
          stroke: "oklch(0.62 0.24 290 / 0.9)",
          strokeWidth: "1.5"
        }
      ),
      /* @__PURE__ */ jsx("text", { x: "300", y: "184", textAnchor: "middle", fontSize: "10", fill: "oklch(0.65 0.02 250)", children: "YOUR CO" }),
      /* @__PURE__ */ jsx("text", { x: "300", y: "202", textAnchor: "middle", fontSize: "13", fontWeight: "700", fill: "oklch(0.97 0.005 240)", children: "Kee" }),
      [
        { x: 205, y: 140 },
        { x: 395, y: 140 },
        { x: 205, y: 240 },
        { x: 395, y: 240 }
      ].map((p, i) => /* @__PURE__ */ jsxs("g", { children: [
        /* @__PURE__ */ jsx("circle", { cx: p.x, cy: p.y, r: "8", fill: "oklch(0.17 0.014 260)", stroke: "oklch(0.85 0.18 200)", strokeWidth: "0.8" }),
        /* @__PURE__ */ jsx("text", { x: p.x, y: p.y + 3, textAnchor: "middle", fontSize: "8", fill: "oklch(0.85 0.18 200)", children: "✓" })
      ] }, i))
    ] }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Cryptographically verified A2A links" })
  ] });
}
function useRevealAll() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -60px 0px"
    });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
const pillars = [{
  icon: Activity,
  title: "Senses",
  body: "Pulls from every system to form a live, unified model of the business.",
  span: "md:col-span-2 md:row-span-2",
  accent: "cyan"
}, {
  icon: Brain,
  title: "Decides",
  body: "Spots anomalies and opportunities, proposing moves backed by math.",
  span: "md:col-span-2",
  accent: "violet"
}, {
  icon: Zap,
  title: "Acts",
  body: "Drafts, adjusts, and executes with owner-set approval thresholds.",
  span: "md:col-span-2",
  accent: "cyan"
}, {
  icon: Network,
  title: "Coordinates",
  body: "Communicates across a verified B2B agent-to-agent network.",
  span: "md:col-span-4",
  accent: "violet"
}];
const useCases = [{
  key: "services",
  name: "Services SMBs",
  sub: "Coaching · Agencies · Legal",
  points: ["Pipeline triage & proposal drafting", "Utilization & margin watch", "Client comms across channels"]
}, {
  key: "media",
  name: "Content & Media",
  sub: "Production · Education",
  points: ["Slate planning across formats", "Audience signal → editorial moves", "Cross-platform release ops"]
}, {
  key: "physical",
  name: "Multi-location Physical",
  sub: "Medical · Wellness",
  points: ["Booking + capacity orchestration", "Per-location P&L anomalies", "Staffing recommendations"]
}, {
  key: "commerce",
  name: "Digital Commerce",
  sub: "DTC · Marketplaces",
  points: ["Inventory & supplier negotiation", "CAC/LTV closed-loop spend", "Logistics partner Kee handshakes"]
}];
function Index() {
  useRevealAll();
  const [tab, setTab] = useState(useCases[0].key);
  const active = useCases.find((u) => u.key === tab);
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen text-foreground overflow-x-hidden", children: [
    /* @__PURE__ */ jsx("header", { className: "fixed top-0 inset-x-0 z-50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-4 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("a", { href: "#", className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx("span", { className: "h-7 w-7 rounded-md bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_-4px_var(--cyan)]" }),
        /* @__PURE__ */ jsx("span", { className: "font-semibold tracking-tight", children: "KeeMakr" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-8 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsx("a", { href: "#engine", className: "hover:text-foreground transition", children: "Engine" }),
        /* @__PURE__ */ jsx("a", { href: "#orchestrate", className: "hover:text-foreground transition", children: "Orchestration" }),
        /* @__PURE__ */ jsx("a", { href: "#network", className: "hover:text-foreground transition", children: "A2A Network" }),
        /* @__PURE__ */ jsx("a", { href: "#serve", className: "hover:text-foreground transition", children: "Who we serve" })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#waitlist", className: "glass rounded-full px-4 py-2 text-sm font-medium hover:border-primary/50 transition", children: "Early access" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative pt-36 pb-24 md:pt-44 md:pb-32", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" }),
            "The AI Operator · Now in private preview"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02]", children: [
            "The next operating system",
            " ",
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "won't have a screen." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed", children: "KeeMakr is the proactive AI Operator that senses, decides, acts, and coordinates across your entire business. We don't replace your stack — we orchestrate it." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
            /* @__PURE__ */ jsxs("a", { href: "#waitlist", className: "group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow-cyan)] hover:scale-[1.02] active:scale-[0.98] transition", children: [
              "Join the Waitlist",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-0.5 transition" })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "#engine", className: "text-sm text-muted-foreground hover:text-foreground transition", children: "See how it works →" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { children: "CMO" }),
            /* @__PURE__ */ jsx("span", { className: "opacity-40", children: "+" }),
            /* @__PURE__ */ jsx("span", { children: "COO" }),
            /* @__PURE__ */ jsx("span", { className: "opacity-40", children: "=" }),
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "One Operator" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "reveal", children: /* @__PURE__ */ jsx(HeroOrb, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { id: "engine", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl reveal", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "The Engine" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]", children: [
          "Four pillars. ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "One continuous loop." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: 'Most "AI tools" sit and wait for a prompt. KeeMakr runs your business in the background — every minute, across every system.' })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-14 grid grid-cols-1 md:grid-cols-4 md:auto-rows-[200px] gap-4", children: pillars.map(({
        icon: Icon,
        title,
        body,
        span,
        accent
      }) => /* @__PURE__ */ jsxs("div", { className: `group glass relative rounded-2xl p-7 overflow-hidden reveal ${span}`, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition", style: {
          background: accent === "cyan" ? "var(--gradient-radial-cyan)" : "var(--gradient-radial-violet)"
        } }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col h-full justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "inline-flex items-center justify-center h-10 w-10 rounded-xl bg-secondary border border-border", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-primary" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: "Pillar" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-semibold tracking-tight", children: title }),
            /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground max-w-md", children: body })
          ] })
        ] })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "orchestrate", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Above the stack" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]", children: [
          "Orchestrate. ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Don't replace." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground text-lg leading-relaxed", children: "Sit above the systems you already pay for. Faster to deploy, lower switching cost, zero rip-and-replace politics. KeeMakr reads, decides, and writes — your SaaS becomes the muscle, KeeMakr becomes the brain." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-8 space-y-3 text-sm", children: ["Deploys in days, not quarters", "Bring your CRM, ERP, helpdesk, and ad accounts", "Owner-defined autonomy thresholds"].map((t) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3 text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-primary" }),
          " ",
          t
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "reveal", children: /* @__PURE__ */ jsx(OrchestrationDiagram, {}) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "network", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:order-2 reveal", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-accent", children: "The Moat" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]", children: [
          "The Agent-to-Agent ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "economy is here." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-muted-foreground text-lg leading-relaxed", children: "Partner Kees coordinate directly across companies. Verified, cryptographically audited links between your business, your suppliers, and your logistics partners — so the work happens machine-to-machine, with you in the loop only when it matters." }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-3 gap-4", children: [{
          k: "Sub-second",
          v: "Handshake"
        }, {
          k: "Audit-grade",
          v: "Provenance"
        }, {
          k: "Owner-set",
          v: "Thresholds"
        }].map((s) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-xl p-4", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: s.k }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-sm font-semibold", children: s.v })
        ] }, s.k)) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:order-1 reveal", children: /* @__PURE__ */ jsx(NetworkGraph, {}) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "serve", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl reveal", children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-primary", children: "Who we serve" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]", children: [
          "Different industries. ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "Shared operating patterns." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 glass rounded-2xl p-3 reveal", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: useCases.map((u) => /* @__PURE__ */ jsx("button", { onClick: () => setTab(u.key), className: `relative px-4 py-2.5 rounded-xl text-sm font-medium transition ${tab === u.key ? "bg-secondary text-foreground shadow-[var(--shadow-glow-cyan)]" : "text-muted-foreground hover:text-foreground"}`, children: u.name }, u.key)) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 grid md:grid-cols-[1fr_1.2fr] gap-6 p-6 rounded-xl bg-background/40", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: active.sub }),
            /* @__PURE__ */ jsx("div", { className: "mt-2 text-3xl font-semibold tracking-tight", children: active.name }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-md", children: "KeeMakr installs as the always-on operator behind the team — coordinating across the systems you already use." })
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "grid gap-3 content-start", children: active.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "glass rounded-lg px-4 py-3 text-sm flex items-center gap-3 hover:border-primary/40 transition", children: [
            /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
            p
          ] }, p)) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "waitlist", className: "relative py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-6", children: /* @__PURE__ */ jsxs("div", { className: "glass relative rounded-3xl p-10 md:p-16 text-center overflow-hidden reveal", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-70", style: {
        background: "var(--gradient-radial-violet)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-50", style: {
        background: "var(--gradient-radial-cyan)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("h3", { className: "text-4xl md:text-5xl font-semibold tracking-[-0.02em]", children: [
          "Run an ",
          /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "AI-native" }),
          " business."
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground text-lg max-w-xl mx-auto", children: "Outcomes-aligned pricing. We earn when you grow. Early cohorts are getting white-glove install." }),
        /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          const f = e.currentTarget;
          f.elements.namedItem("email").value = "";
          alert("You're on the list. We'll be in touch.");
        }, className: "mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto", children: [
          /* @__PURE__ */ jsx("input", { name: "email", type: "email", required: true, placeholder: "you@company.com", className: "flex-1 rounded-full bg-input/60 border border-border px-5 py-3.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition" }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow-cyan)] hover:scale-[1.02] active:scale-[0.98] transition", children: "Request access" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("footer", { className: "relative pt-16 pb-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsx("div", { className: "h-px w-full", style: {
        background: "var(--gradient-divider)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid md:grid-cols-3 gap-8 items-start", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "h-6 w-6 rounded-md bg-gradient-to-br from-primary to-accent" }),
            /* @__PURE__ */ jsx("span", { className: "font-semibold tracking-tight", children: "KeeMakr" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-xs", children: "The AI Operator for the AI-Native Organization." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Pricing" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-2 text-muted-foreground", children: [
            "Outcomes-aligned. ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "We earn when you grow." })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm md:text-right", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: "Contact" }),
          /* @__PURE__ */ jsx("a", { href: "mailto:kee@keemakr.ai", className: "mt-2 inline-block hover:text-primary transition", children: "kee@keemakr.ai" }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex md:justify-end gap-5 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Privacy" }),
            /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-foreground transition", children: "Terms" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 text-xs text-muted-foreground text-center", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " KeeMakr. All rights reserved."
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
