import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, Activity, Brain, Zap, Network, Check } from "lucide-react";
import { HeroOrb } from "@/components/site/HeroOrb";
import { OrchestrationDiagram } from "@/components/site/OrchestrationDiagram";
import { NetworkGraph } from "@/components/site/NetworkGraph";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KeeMakr — The AI Operator for the AI-Native Organization" },
      { name: "description", content: "KeeMakr is the proactive AI Operator that senses, decides, acts, and coordinates across your entire business. A world-class CMO + COO, packaged in one." },
      { property: "og:title", content: "KeeMakr — The AI Operator" },
      { property: "og:description", content: "The next operating system won't have a screen. Orchestrate your stack with KeeMakr." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function useRevealAll() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const pillars = [
  {
    icon: Activity,
    title: "Senses",
    body: "Pulls from every system to form a live, unified model of the business.",
    span: "md:col-span-2 md:row-span-2",
    accent: "cyan",
  },
  {
    icon: Brain,
    title: "Decides",
    body: "Spots anomalies and opportunities, proposing moves backed by math.",
    span: "md:col-span-2",
    accent: "violet",
  },
  {
    icon: Zap,
    title: "Acts",
    body: "Drafts, adjusts, and executes with owner-set approval thresholds.",
    span: "md:col-span-2",
    accent: "cyan",
  },
  {
    icon: Network,
    title: "Coordinates",
    body: "Communicates across a verified B2B agent-to-agent network.",
    span: "md:col-span-4",
    accent: "violet",
  },
];

const useCases = [
  {
    key: "services",
    name: "Services SMBs",
    sub: "Coaching · Agencies · Legal",
    points: ["Pipeline triage & proposal drafting", "Utilization & margin watch", "Client comms across channels"],
  },
  {
    key: "media",
    name: "Content & Media",
    sub: "Production · Education",
    points: ["Slate planning across formats", "Audience signal → editorial moves", "Cross-platform release ops"],
  },
  {
    key: "physical",
    name: "Multi-location Physical",
    sub: "Medical · Wellness",
    points: ["Booking + capacity orchestration", "Per-location P&L anomalies", "Staffing recommendations"],
  },
  {
    key: "commerce",
    name: "Digital Commerce",
    sub: "DTC · Marketplaces",
    points: ["Inventory & supplier negotiation", "CAC/LTV closed-loop spend", "Logistics partner Kee handshakes"],
  },
];

function Index() {
  useRevealAll();
  const [tab, setTab] = useState(useCases[0].key);
  const active = useCases.find((u) => u.key === tab)!;

  return (
    <div className="relative min-h-screen text-foreground overflow-x-hidden">
      {/* nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-md bg-gradient-to-br from-primary to-accent shadow-[0_0_20px_-4px_var(--cyan)]" />
            <span className="font-semibold tracking-tight">KeeMakr</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#engine" className="hover:text-foreground transition">Engine</a>
            <a href="#orchestrate" className="hover:text-foreground transition">Orchestration</a>
            <a href="#network" className="hover:text-foreground transition">A2A Network</a>
            <a href="#serve" className="hover:text-foreground transition">Who we serve</a>
          </nav>
          <a
            href="#waitlist"
            className="glass rounded-full px-4 py-2 text-sm font-medium hover:border-primary/50 transition"
          >
            Early access
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-32">
        <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
        <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
              The AI Operator · Now in private preview
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.02]">
              The next operating system{" "}
              <span className="gradient-text">won't have a screen.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              KeeMakr is the proactive AI Operator that senses, decides, acts, and coordinates across your entire business. We don't replace your stack — we orchestrate it.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#waitlist"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow-cyan)] hover:scale-[1.02] active:scale-[0.98] transition"
              >
                Join the Waitlist
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
              </a>
              <a href="#engine" className="text-sm text-muted-foreground hover:text-foreground transition">
                See how it works →
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span>CMO</span><span className="opacity-40">+</span><span>COO</span>
              <span className="opacity-40">=</span><span className="text-foreground">One Operator</span>
            </div>
          </div>
          <div className="reveal">
            <HeroOrb />
          </div>
        </div>
      </section>

      {/* ENGINE / BENTO */}
      <section id="engine" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-primary">The Engine</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
              Four pillars. <span className="gradient-text">One continuous loop.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Most "AI tools" sit and wait for a prompt. KeeMakr runs your business in the background — every minute, across every system.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 md:auto-rows-[200px] gap-4">
            {pillars.map(({ icon: Icon, title, body, span, accent }) => (
              <div
                key={title}
                className={`group glass relative rounded-2xl p-7 overflow-hidden reveal ${span}`}
              >
                <div
                  className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition"
                  style={{
                    background:
                      accent === "cyan"
                        ? "var(--gradient-radial-cyan)"
                        : "var(--gradient-radial-violet)",
                  }}
                />
                <div className="relative flex flex-col h-full justify-between">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-secondary border border-border">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      Pillar
                    </span>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</div>
                    <p className="mt-2 text-sm text-muted-foreground max-w-md">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORCHESTRATION */}
      <section id="orchestrate" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Above the stack</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
              Orchestrate. <span className="gradient-text">Don't replace.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Sit above the systems you already pay for. Faster to deploy, lower switching cost, zero rip-and-replace politics. KeeMakr reads, decides, and writes — your SaaS becomes the muscle, KeeMakr becomes the brain.
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              {[
                "Deploys in days, not quarters",
                "Bring your CRM, ERP, helpdesk, and ad accounts",
                "Owner-defined autonomy thresholds",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-muted-foreground">
                  <Check className="h-4 w-4 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal">
            <OrchestrationDiagram />
          </div>
        </div>
      </section>

      {/* A2A NETWORK */}
      <section id="network" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2 reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-accent">The Moat</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
              The Agent-to-Agent <span className="gradient-text">economy is here.</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Partner Kees coordinate directly across companies. Verified, cryptographically audited links between your business, your suppliers, and your logistics partners — so the work happens machine-to-machine, with you in the loop only when it matters.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { k: "Sub-second", v: "Handshake" },
                { k: "Audit-grade", v: "Provenance" },
                { k: "Owner-set", v: "Thresholds" },
              ].map((s) => (
                <div key={s.k} className="glass rounded-xl p-4">
                  <div className="text-xs text-muted-foreground">{s.k}</div>
                  <div className="mt-1 text-sm font-semibold">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:order-1 reveal">
            <NetworkGraph />
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section id="serve" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl reveal">
            <div className="text-xs uppercase tracking-[0.25em] text-primary">Who we serve</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
              Different industries. <span className="gradient-text">Shared operating patterns.</span>
            </h2>
          </div>

          <div className="mt-12 glass rounded-2xl p-3 reveal">
            <div className="flex flex-wrap gap-2">
              {useCases.map((u) => (
                <button
                  key={u.key}
                  onClick={() => setTab(u.key)}
                  className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition ${
                    tab === u.key
                      ? "bg-secondary text-foreground shadow-[var(--shadow-glow-cyan)]"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {u.name}
                </button>
              ))}
            </div>

            <div className="mt-3 grid md:grid-cols-[1fr_1.2fr] gap-6 p-6 rounded-xl bg-background/40">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {active.sub}
                </div>
                <div className="mt-2 text-3xl font-semibold tracking-tight">{active.name}</div>
                <p className="mt-3 text-sm text-muted-foreground max-w-md">
                  KeeMakr installs as the always-on operator behind the team — coordinating across the systems you already use.
                </p>
              </div>
              <ul className="grid gap-3 content-start">
                {active.points.map((p) => (
                  <li
                    key={p}
                    className="glass rounded-lg px-4 py-3 text-sm flex items-center gap-3 hover:border-primary/40 transition"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / waitlist */}
      <section id="waitlist" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="glass relative rounded-3xl p-10 md:p-16 text-center overflow-hidden reveal">
            <div className="absolute inset-0 opacity-70" style={{ background: "var(--gradient-radial-violet)" }} />
            <div className="absolute inset-0 opacity-50" style={{ background: "var(--gradient-radial-cyan)" }} />
            <div className="relative">
              <h3 className="text-4xl md:text-5xl font-semibold tracking-[-0.02em]">
                Run an <span className="gradient-text">AI-native</span> business.
              </h3>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
                Outcomes-aligned pricing. We earn when you grow. Early cohorts are getting white-glove install.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = e.currentTarget as HTMLFormElement;
                  (f.elements.namedItem("email") as HTMLInputElement).value = "";
                  alert("You're on the list. We'll be in touch.");
                }}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="flex-1 rounded-full bg-input/60 border border-border px-5 py-3.5 text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
                />
                <button
                  type="submit"
                  className="rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow-cyan)] hover:scale-[1.02] active:scale-[0.98] transition"
                >
                  Request access
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px w-full" style={{ background: "var(--gradient-divider)" }} />
          <div className="mt-10 grid md:grid-cols-3 gap-8 items-start">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-accent" />
                <span className="font-semibold tracking-tight">KeeMakr</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground max-w-xs">
                The AI Operator for the AI-Native Organization.
              </p>
            </div>
            <div className="text-sm">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Pricing</div>
              <p className="mt-2 text-muted-foreground">
                Outcomes-aligned. <span className="text-foreground">We earn when you grow.</span>
              </p>
            </div>
            <div className="text-sm md:text-right">
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</div>
              <a href="mailto:kee@keemakr.ai" className="mt-2 inline-block hover:text-primary transition">
                kee@keemakr.ai
              </a>
              <div className="mt-4 flex md:justify-end gap-5 text-muted-foreground">
                <a href="#" className="hover:text-foreground transition">Privacy</a>
                <a href="#" className="hover:text-foreground transition">Terms</a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} KeeMakr. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
