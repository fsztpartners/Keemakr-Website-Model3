export function OrchestrationDiagram() {
  const systems = ["Sales", "Marketing", "Ops", "HR", "Finance"];
  return (
    <div className="relative w-full">
      {/* KeeMakr operator layer */}
      <div className="glass relative rounded-2xl p-6 md:p-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-60"
          style={{ background: "var(--gradient-radial-cyan)" }}
        />
        <div className="relative flex items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Operator Layer</div>
            <div className="mt-1 text-xl md:text-2xl font-semibold gradient-text">KeeMakr</div>
          </div>
          <div className="flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="h-2 w-2 rounded-full bg-primary animate-pulse-glow"
                style={{ animationDelay: `${i * 0.25}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* connectors */}
      <svg className="w-full h-16" viewBox="0 0 500 80" preserveAspectRatio="none">
        {systems.map((_, i) => {
          const x = 50 + i * 100;
          return (
            <g key={i}>
              <line
                x1="250" y1="0" x2={x} y2="80"
                stroke="oklch(0.85 0.18 200 / 0.45)"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </g>
          );
        })}
      </svg>

      {/* systems */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
        {systems.map((s) => (
          <div
            key={s}
            className="glass rounded-xl px-4 py-5 text-center text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
          >
            {s}
          </div>
        ))}
      </div>
      <div className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground">
        Your existing systems
      </div>
    </div>
  );
}
