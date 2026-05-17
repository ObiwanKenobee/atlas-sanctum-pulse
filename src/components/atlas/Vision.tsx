import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import basketball from "@/assets/sport-basketball.jpg";
import football from "@/assets/sport-football.jpg";
import rugby from "@/assets/sport-rugby.jpg";
import hockey from "@/assets/sport-hockey.jpg";

const sports = [
  {
    id: "basketball",
    name: "Basketball",
    img: basketball,
    principle: "Precision + Composure",
    philosophy: "Geometry under pressure. Every possession is a calculation; every shot, a thesis. We train decision-making at game speed.",
    metrics: [["eFG%", "58.2"], ["AST/TO", "2.7"], ["Pace", "98.4"]],
    leadership: ["Vocal command", "Shot selection IQ", "Spacing discipline"],
  },
  {
    id: "football",
    name: "Football",
    img: football,
    principle: "Intelligence + Flow",
    philosophy: "Football is a thinking sport disguised as a running one. We coach pattern recognition, positional play, and economy of touch.",
    metrics: [["xG/90", "1.42"], ["Press Success", "71%"], ["Distance km", "11.6"]],
    leadership: ["Tactical literacy", "Off-ball intelligence", "Tempo control"],
  },
  {
    id: "rugby",
    name: "Rugby",
    img: rugby,
    principle: "Brotherhood + Resilience",
    philosophy: "Rugby builds men through the contact, not around it. Pain is a teacher. The pack is a covenant.",
    metrics: [["Tackle %", "91.3"], ["Meters Gained", "1,204"], ["Breakdown Win", "84%"]],
    leadership: ["Front-foot courage", "Collective accountability", "Recovery between phases"],
  },
  {
    id: "hockey",
    name: "Hockey",
    img: hockey,
    principle: "Focus + Reaction",
    philosophy: "The smallest sport, the fastest mind. Hockey trains the millisecond — eye, hand, stick, decision.",
    metrics: [["Reaction ms", "184"], ["PC Conversion", "37%"], ["Circle Entries", "26"]],
    leadership: ["Sustained focus", "Spatial scanning", "Calm under speed"],
  },
];

export function Vision() {
  const [active, setActive] = useState(sports[0]);

  return (
    <section id="vision" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="§ 02"
          eyebrow="The Vision"
          title={<>Four sports. One operating <span className="text-gold-grad">philosophy.</span></>}
          description="Each discipline is a lens on human performance. Each lens teaches the same lesson: discipline compounds."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          {/* selector */}
          <div className="flex flex-col gap-2">
            {sports.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s)}
                className={`group flex items-center justify-between border-l-2 px-5 py-5 text-left transition ${
                  active.id === s.id
                    ? "border-gold bg-white/[0.03]"
                    : "border-border hover:border-gold/40 hover:bg-white/[0.02]"
                }`}
              >
                <div>
                  <div className="font-display text-2xl font-bold">{s.name}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.principle}
                  </div>
                </div>
                <span className={`font-mono text-xs transition ${active.id === s.id ? "text-gold" : "text-muted-foreground"}`}>
                  0{sports.indexOf(s) + 1} →
                </span>
              </button>
            ))}
          </div>

          {/* detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-sm border border-border glass"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={active.img}
                  alt={active.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <div className="eyebrow">{active.principle}</div>
                  <div className="font-display text-5xl font-bold text-gold-grad">{active.name}</div>
                </div>
              </div>

              <div className="grid gap-6 p-6 md:grid-cols-2">
                <p className="text-base leading-relaxed text-muted-foreground">{active.philosophy}</p>
                <div className="space-y-4">
                  <div>
                    <div className="eyebrow mb-2 text-telemetry">Live Metrics</div>
                    <div className="grid grid-cols-3 gap-2">
                      {active.metrics.map(([k, v]) => (
                        <div key={k} className="rounded-sm border border-border bg-white/[0.02] p-3">
                          <div className="font-display text-xl font-bold text-foreground">{v}</div>
                          <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{k}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="eyebrow mb-2 text-telemetry">Leadership Principles</div>
                    <ul className="space-y-1.5">
                      {active.leadership.map((l) => (
                        <li key={l} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="h-px w-4 bg-gold" /> {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
