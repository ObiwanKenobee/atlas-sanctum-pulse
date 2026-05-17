const items = [
  "◉ NBO 01°17′S 36°49′E",
  "SPRINT PEAK 9.84 m/s",
  "RECOVERY 86%",
  "CONTRIB PUSH @kwanjiru → atlas-core/main",
  "OSS PROJECTS 27 ACTIVE",
  "BIOMECH MODEL v0.4 DEPLOYED",
  "MENTORSHIP SESSIONS +67 THIS WEEK",
  "COMMUNITY PITCH MAPPED · KIBERA-03",
  "ATLAS PULSE → 42.7ms LATENCY",
  "FAITH · HOPE · LOVE · COMPASSION",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border bg-card/40 py-3">
      <div className="flex w-max gap-12 animate-ticker">
        {row.map((t, i) => (
          <span key={i} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="text-gold">▸</span> {t}
          </span>
        ))}
      </div>
    </div>
  );
}
