export function HeroOrb() {
  const nodes = [
    { label: "CRM", angle: 0 },
    { label: "ERP", angle: 60 },
    { label: "Shopify", angle: 120 },
    { label: "Slack", angle: 180 },
    { label: "Stripe", angle: 240 },
    { label: "Gmail", angle: 300 },
  ];
  const R = 150;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      {/* radial glow */}
      <div
        className="absolute inset-0 rounded-full blur-3xl opacity-70"
        style={{ background: "var(--gradient-radial-cyan)" }}
      />
      <div
        className="absolute inset-10 rounded-full blur-3xl opacity-60"
        style={{ background: "var(--gradient-radial-violet)" }}
      />

      <svg viewBox="-200 -200 400 400" className="relative w-full h-full">
        {/* orbit rings */}
        {[80, 120, 160].map((r, i) => (
          <circle
            key={r}
            cx="0" cy="0" r={r}
            fill="none"
            stroke="oklch(1 0 0 / 0.06)"
            strokeWidth="1"
            strokeDasharray={i === 1 ? "2 6" : "0"}
          />
        ))}

        {/* edges */}
        {nodes.map((n, i) => {
          const x = Math.cos((n.angle * Math.PI) / 180) * R;
          const y = Math.sin((n.angle * Math.PI) / 180) * R;
          return (
            <line
              key={i}
              x1="0" y1="0" x2={x} y2={y}
              stroke="oklch(0.85 0.18 200 / 0.5)"
              strokeWidth="1"
              strokeDasharray="3 6"
              className="animate-flow"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          );
        })}

        {/* outer nodes */}
        {nodes.map((n, i) => {
          const x = Math.cos((n.angle * Math.PI) / 180) * R;
          const y = Math.sin((n.angle * Math.PI) / 180) * R;
          return (
            <g key={i} className="animate-float" style={{ animationDelay: `${i * 0.4}s` }}>
              <circle cx={x} cy={y} r="22" fill="oklch(0.17 0.014 260)" stroke="oklch(1 0 0 / 0.12)" />
              <text x={x} y={y + 3} textAnchor="middle" fontSize="10" fill="oklch(0.85 0.005 240)" fontWeight="500">
                {n.label}
              </text>
            </g>
          );
        })}

        {/* center */}
        <circle cx="0" cy="0" r="50" fill="oklch(0.17 0.014 260)" stroke="oklch(0.85 0.18 200 / 0.6)" strokeWidth="1.5"/>
        <circle cx="0" cy="0" r="38" fill="none" stroke="oklch(0.62 0.24 290 / 0.6)" strokeWidth="0.8" strokeDasharray="2 4" />
        <text x="0" y="-2" textAnchor="middle" fontSize="9" fill="oklch(0.65 0.02 250)">OPERATOR</text>
        <text x="0" y="14" textAnchor="middle" fontSize="14" fontWeight="700" fill="oklch(0.97 0.005 240)">KeeMakr</text>
      </svg>
    </div>
  );
}
