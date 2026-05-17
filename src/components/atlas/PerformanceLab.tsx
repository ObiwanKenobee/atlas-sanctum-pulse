import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const ring = (val: number, label: string, color: string) => ({ val, label, color });
const rings = [
  ring(86, "Recovery", "var(--gold)"),
  ring(72, "Load", "var(--telemetry)"),
  ring(94, "Sleep", "var(--gold-glow)"),
  ring(68, "Hydration", "var(--telemetry-glow)"),
];

const sparkline = (n = 24) =>
  Array.from({ length: n }, (_, i) => 30 + Math.sin(i / 2) * 15 + Math.random() * 10);

export function PerformanceLab() {
  return (
    <section id="lab" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="§ 04"
          eyebrow="Athlete Performance Lab"
          title={<>Telemetry for the <span className="text-gold-grad">human machine.</span></>}
          description="A live, elite-grade dashboard. Recovery, workload, biomechanics, sleep, hydration, tactical shape — measured, modeled, returned to the athlete."
        />

        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-6">
          {/* athlete card */}
          <div className="md:col-span-4 md:row-span-3 rounded-sm border border-border glass p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="eyebrow">Athlete ID · NBO-014</div>
                <h3 className="mt-1 font-display text-2xl font-bold">K. Wanjiru</h3>
                <p className="text-sm text-muted-foreground">Basketball · SG · 21</p>
              </div>
              <div className="h-12 w-12 rounded-full bg-gold-grad shadow-gold" />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {rings.map((r) => (
                <div key={r.label} className="rounded-sm border border-border bg-white/[0.02] p-3">
                  <div className="relative mx-auto h-20 w-20">
                    <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
                      <circle cx="18" cy="18" r="15.9" fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="2.5" />
                      <motion.circle
                        cx="18" cy="18" r="15.9" fill="none"
                        stroke={r.color} strokeWidth="2.5" strokeLinecap="round"
                        initial={{ strokeDasharray: "0 100" }}
                        whileInView={{ strokeDasharray: `${r.val} 100` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center font-display text-lg font-bold">
                      {r.val}
                    </div>
                  </div>
                  <div className="mt-2 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{r.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* sprint chart */}
          <div className="md:col-span-5 md:row-span-3 rounded-sm border border-border glass p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="eyebrow">Sprint Velocity · 7d</div>
                <div className="mt-1 font-display text-3xl font-bold">9.84 <span className="text-base text-muted-foreground">m/s peak</span></div>
              </div>
              <div className="font-mono text-[10px] text-telemetry">▲ +2.1%</div>
            </div>
            <svg viewBox="0 0 240 80" className="mt-6 h-32 w-full">
              <defs>
                <linearGradient id="spark" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="oklch(0.82 0.14 86)" stopOpacity="0.5" />
                  <stop offset="1" stopColor="oklch(0.82 0.14 86)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {(() => {
                const data = sparkline(24);
                const pts = data.map((v, i) => `${(i / (data.length - 1)) * 240},${80 - v}`).join(" ");
                const area = `0,80 ${pts} 240,80`;
                return (
                  <>
                    <polygon points={area} fill="url(#spark)" />
                    <polyline points={pts} fill="none" stroke="oklch(0.82 0.14 86)" strokeWidth="1.5" />
                  </>
                );
              })()}
            </svg>
          </div>

          {/* injury risk */}
          <div className="md:col-span-3 md:row-span-3 rounded-sm border border-border glass p-6">
            <div className="eyebrow">Injury Risk</div>
            <div className="mt-3 font-display text-5xl font-bold text-gold-grad">LOW</div>
            <div className="mt-1 font-mono text-[10px] text-muted-foreground">Composite 12.4 / 100</div>
            <div className="mt-6 space-y-3">
              {[
                ["Hamstring", 18],
                ["Knee", 11],
                ["Shoulder", 7],
                ["Ankle", 14],
              ].map(([k, v]) => (
                <div key={k as string}>
                  <div className="flex justify-between font-mono text-[10px] uppercase text-muted-foreground">
                    <span>{k}</span><span>{v}%</span>
                  </div>
                  <div className="mt-1 h-1 overflow-hidden rounded bg-white/5">
                    <div className="h-full bg-gold" style={{ width: `${v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* heatmap */}
          <div className="md:col-span-7 md:row-span-3 rounded-sm border border-border glass p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="eyebrow">Tactical Heatmap · Last Match</div>
                <div className="mt-1 font-display text-2xl font-bold">Court Occupancy</div>
              </div>
              <div className="font-mono text-[10px] text-telemetry">REPLAY: Q3 · 11:42</div>
            </div>
            <div className="mt-4 grid grid-cols-16 gap-0.5">
              {Array.from({ length: 16 * 10 }).map((_, i) => {
                const heat = Math.random();
                return (
                  <div
                    key={i}
                    className="aspect-square rounded-[1px]"
                    style={{
                      background: `oklch(0.82 0.14 86 / ${heat * 0.85})`,
                      boxShadow: heat > 0.85 ? "0 0 6px oklch(0.82 0.14 86 / 0.6)" : undefined,
                    }}
                  />
                );
              })}
            </div>
            <div className="mt-3 flex justify-between font-mono text-[10px] uppercase text-muted-foreground">
              <span>Baseline</span><span>Paint</span><span>Wing</span><span>3pt Arc</span>
            </div>
          </div>

          {/* AI insight */}
          <div className="md:col-span-5 md:row-span-3 rounded-sm border border-gold/30 bg-gold/[0.04] p-6">
            <div className="eyebrow text-gold">◉ Atlas AI · Insight</div>
            <p className="mt-3 font-display text-xl leading-snug">
              "Increase deep-sleep window by 38 min. Sprint output forecast climbs 6.4% in 9 days."
            </p>
            <div className="mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="rounded-sm border border-border bg-white/5 px-2 py-1">Atlas Mentor v2</span>
              <span>Confidence 0.91</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
