import { SectionHeader } from "./SectionHeader";

const labs = [
  { code: "FL-01", title: "AI Coaching Systems", desc: "Multi-agent tactical advisors for grassroots coaches.", status: "Alpha" },
  { code: "FL-02", title: "Biomechanical Simulation", desc: "Differentiable physics for movement reconstruction.", status: "Research" },
  { code: "FL-03", title: "Smart Stadium Infra", desc: "Edge sensors, civic telemetry, fan-grid co-design.", status: "Concept" },
  { code: "FL-04", title: "Civic Sports Intelligence", desc: "Open dashboards for municipal sport policy.", status: "Pilot" },
  { code: "FL-05", title: "Urban Wellness Systems", desc: "Routing safe movement corridors through cities.", status: "Alpha" },
  { code: "FL-06", title: "Sports Science Commons", desc: "Reproducible, openly-licensed research stack.", status: "Live" },
];

export function FutureLabs() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="§ 09"
          eyebrow="Future Labs"
          title={<>Frontiers we are <span className="text-gold-grad">already mapping.</span></>}
        />

        <div className="grid gap-px overflow-hidden rounded-sm border border-border md:grid-cols-3">
          {labs.map((l) => (
            <div key={l.code} className="group relative bg-card p-8 transition hover:bg-gold/[0.04]">
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-gold">{l.code}</span>
                <span className="rounded-full border border-telemetry/40 bg-telemetry/10 px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-telemetry">
                  {l.status}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-bold transition group-hover:text-gold">{l.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{l.desc}</p>
              <div className="mt-8 font-mono text-[10px] uppercase tracking-widest text-muted-foreground transition group-hover:text-gold">
                Read brief →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
