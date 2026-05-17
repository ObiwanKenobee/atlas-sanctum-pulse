import { SectionHeader } from "./SectionHeader";
import b from "@/assets/sport-basketball.jpg";
import f from "@/assets/sport-football.jpg";
import r from "@/assets/sport-rugby.jpg";
import h from "@/assets/sport-hockey.jpg";

const items = [
  { img: r, tag: "Documentary", title: "The Pack: A Nairobi Rugby Story", duration: "42 min" },
  { img: b, tag: "Profile", title: "K. Wanjiru — Geometry of a Jumper", duration: "12 min read" },
  { img: f, tag: "Tactical", title: "Pressing Triggers in 4-3-3 (Eastlands FC)", duration: "Breakdown" },
  { img: h, tag: "Research", title: "Reaction Latency in Astroturf Hockey", duration: "Journal" },
];

export function Media() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="§ 08"
          eyebrow="Media & Storytelling"
          title={<>The films. The journals. <span className="text-gold-grad">The record.</span></>}
          description="ESPN × Wired × GitHub × African futurism. Long-form, cinematic, and rigorously sourced."
        />

        <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2">
          {items.map((it, i) => (
            <a
              key={it.title}
              href="#"
              className={`group relative overflow-hidden rounded-sm border border-border ${
                i === 0 ? "md:col-span-7 md:row-span-2 aspect-[3/4] md:aspect-auto" : "md:col-span-5 aspect-[16/9]"
              }`}
            >
              <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="eyebrow">{it.tag} · {it.duration}</div>
                <h3 className="mt-2 font-display text-xl font-bold transition group-hover:text-gold md:text-2xl">{it.title}</h3>
              </div>
              <div className="absolute right-4 top-4 rounded-full border border-gold/40 bg-background/60 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-gold backdrop-blur">
                ▶ Watch
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
