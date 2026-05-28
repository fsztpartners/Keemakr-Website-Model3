export function NetworkGraph() {
  return (
    <div className="glass relative rounded-2xl p-8 md:p-12 overflow-hidden min-h-[420px]">
      <div
        className="absolute inset-0 opacity-50"
        style={{ background: "var(--gradient-radial-violet)" }}
      />
      <svg viewBox="0 0 600 380" className="relative w-full h-full">
        <defs>
          <radialGradient id="node" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.85 0.18 200)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.85 0.18 200)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodev" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.62 0.24 290)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.62 0.24 290)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* edges with flowing dashes */}
        {[
          { x1: 300, y1: 190, x2: 110, y2: 90 },
          { x1: 300, y1: 190, x2: 490, y2: 90 },
          { x1: 300, y1: 190, x2: 110, y2: 310 },
          { x1: 300, y1: 190, x2: 490, y2: 310 },
        ].map((l, i) => (
          <line
            key={i}
            {...l}
            stroke="oklch(0.85 0.18 200 / 0.6)"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            className="animate-flow"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        ))}

        {/* Outer nodes */}
        {[
          { x: 110, y: 90, label: "Supplier", sub: "Kee" },
          { x: 490, y: 90, label: "Logistics", sub: "Kee" },
          { x: 110, y: 310, label: "Partner", sub: "Kee" },
          { x: 490, y: 310, label: "Customer", sub: "Kee" },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="46" fill="url(#node)" opacity="0.35" />
            <circle
              cx={n.x} cy={n.y} r="26"
              fill="oklch(0.20 0.015 260)"
              stroke="oklch(0.85 0.18 200 / 0.7)"
              strokeWidth="1"
            />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="10" fill="oklch(0.97 0.005 240)" fontWeight="600">
              {n.sub}
            </text>
            <text x={n.x} y={n.y + 56} textAnchor="middle" fontSize="11" fill="oklch(0.65 0.02 250)">
              {n.label}
            </text>
          </g>
        ))}

        {/* Center: Your Co */}
        <circle cx="300" cy="190" r="70" fill="url(#nodev)" opacity="0.5" />
        <circle
          cx="300" cy="190" r="44"
          fill="oklch(0.17 0.014 260)"
          stroke="oklch(0.62 0.24 290 / 0.9)"
          strokeWidth="1.5"
        />
        <text x="300" y="184" textAnchor="middle" fontSize="10" fill="oklch(0.65 0.02 250)">YOUR CO</text>
        <text x="300" y="202" textAnchor="middle" fontSize="13" fontWeight="700" fill="oklch(0.97 0.005 240)">
          Kee
        </text>

        {/* tiny lock badges */}
        {[
          { x: 205, y: 140 }, { x: 395, y: 140 },
          { x: 205, y: 240 }, { x: 395, y: 240 },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="8" fill="oklch(0.17 0.014 260)" stroke="oklch(0.85 0.18 200)" strokeWidth="0.8"/>
            <text x={p.x} y={p.y+3} textAnchor="middle" fontSize="8" fill="oklch(0.85 0.18 200)">✓</text>
          </g>
        ))}
      </svg>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
        Cryptographically verified A2A links
      </div>
    </div>
  );
}
