import { SectionHeader } from "./SectionHeader";
import nairobi from "@/assets/nairobi-map.jpg";

const overlays = [
  { x: 28, y: 42, label: "Eastlands Court", type: "Court" },
  { x: 58, y: 38, label: "Kibera Pitch 3", type: "Pitch" },
  { x: 72, y: 60, label: "Westlands Gym", type: "Gym" },
  { x: 44, y: 70, label: "Mathare Hub", type: "Mentorship" },
  { x: 18, y: 22, label: "Kasarani Stadium", type: "Stadium" },
];

export function Community() {
  return (
    <section id="community" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="§ 05"
          eyebrow="Community Impact"
          title={<>The city is the <span className="text-gold-grad">curriculum.</span></>}
          description="Nairobi Movement Map — an open civic dataset of pitches, courts, gyms, mentorship hubs, and safe routes."
        />

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="relative aspect-video overflow-hidden rounded-sm border border-border">
            <img src={nairobi} alt="Nairobi" loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/10" />
            <div className="absolute inset-0 grid-bg opacity-50" />
            {overlays.map((o) => (
              <div key={o.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${o.x}%`, top: `${o.y}%` }}>
                <div className="relative flex items-center gap-2">
                  <div className="relative h-3 w-3">
                    <div className="absolute inset-0 rounded-full bg-gold animate-pulse-slow" />
                    <div className="absolute -inset-2 rounded-full border border-gold/40 animate-pulse-slow" />
                  </div>
                  <div className="rounded-sm border border-gold/40 bg-background/80 px-2 py-1 font-mono text-[9px] uppercase tracking-widest text-foreground backdrop-blur">
                    {o.label} · <span className="text-gold">{o.type}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-widest text-gold/80">
              ◉ LIVE · Nairobi Movement Map v0.4
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
            {[
              ["1,284", "Community events / mo"],
              ["38,420", "Youth participants"],
              ["614", "Active volunteers"],
              ["72%", "Accessibility coverage"],
            ].map(([v, l]) => (
              <div key={l} className="rounded-sm border border-border glass p-5">
                <div className="font-display text-3xl font-bold text-gold-grad">{v}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
