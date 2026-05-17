import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

type Node = {
  id: string;
  name: string;
  x: number;
  y: number;
  desc: string;
  stack: string[];
  contributors: number;
  commits: number;
};

const nodes: Node[] = [
  { id: "core", name: "Atlas Core", x: 50, y: 50, desc: "The kernel — identity, telemetry bus, event sourcing.", stack: ["Rust", "Postgres", "NATS"], contributors: 142, commits: 8420 },
  { id: "pulse", name: "Atlas Pulse", x: 22, y: 28, desc: "Real-time athlete biometric ingestion at the edge.", stack: ["Go", "Kafka", "InfluxDB"], contributors: 89, commits: 4120 },
  { id: "biomech", name: "OpenBiomechanics", x: 78, y: 22, desc: "MoCap + computer vision movement analysis library.", stack: ["Python", "PyTorch", "OpenCV"], contributors: 211, commits: 12300 },
  { id: "match", name: "Sanctum Match Intelligence", x: 82, y: 58, desc: "Tactical pattern recognition across team sports.", stack: ["TypeScript", "Bun", "DuckDB"], contributors: 67, commits: 2900 },
  { id: "map", name: "Nairobi Movement Map", x: 18, y: 70, desc: "Open civic dataset of pitches, courts, and routes.", stack: ["PostGIS", "MapLibre"], contributors: 54, commits: 1820 },
  { id: "recovery", name: "Sanctum Recovery", x: 50, y: 12, desc: "HRV-aware load management and sleep optimization.", stack: ["Swift", "Kotlin", "Edge fns"], contributors: 43, commits: 1640 },
  { id: "mentor", name: "Atlas Mentor AI", x: 12, y: 50, desc: "Mentorship matchmaking and 1:1 coaching agents.", stack: ["Python", "LangGraph"], contributors: 76, commits: 3010 },
  { id: "research", name: "Atlas Research Commons", x: 88, y: 82, desc: "Peer-reviewed sport-science publications, open.", stack: ["LaTeX", "Markdown"], contributors: 31, commits: 980 },
  { id: "academy", name: "Sanctum Academy", x: 32, y: 88, desc: "Curriculum, drills, and certification pathways.", stack: ["MDX", "React"], contributors: 58, commits: 2210 },
  { id: "media", name: "Atlas Media Engine", x: 70, y: 86, desc: "Editorial and cinematic storytelling pipeline.", stack: ["Astro", "FFmpeg"], contributors: 39, commits: 1430 },
];

const edges = [
  ["core", "pulse"], ["core", "biomech"], ["core", "match"], ["core", "map"],
  ["core", "recovery"], ["core", "mentor"], ["core", "research"], ["core", "academy"],
  ["core", "media"], ["pulse", "recovery"], ["biomech", "match"], ["mentor", "academy"],
  ["research", "biomech"], ["match", "media"], ["map", "academy"],
];

export function Ecosystem() {
  const [active, setActive] = useState(nodes[0]);
  const nodeById = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <section id="ecosystem" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="§ 03"
          eyebrow="Open Source Ecosystem"
          title={<>One repo. One republic. <span className="text-gold-grad">Ten projects.</span></>}
          description="Atlas Sanctum is an interlocking system of open-source modules. Each node ships its own roadmap; together they form an operating system for human development."
        />

        <div className="grid gap-8 lg:grid-cols-[3fr_2fr]">
          {/* graph */}
          <div className="relative aspect-square overflow-hidden rounded-sm border border-border glass">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
              <defs>
                <linearGradient id="edge" x1="0" x2="1">
                  <stop offset="0" stopColor="oklch(0.82 0.14 86)" stopOpacity="0.6" />
                  <stop offset="1" stopColor="oklch(0.7 0.16 235)" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              {edges.map(([a, b], i) => {
                const A = nodeById(a), B = nodeById(b);
                const highlighted = active.id === a || active.id === b;
                return (
                  <line key={i} x1={A.x} y1={A.y} x2={B.x} y2={B.y}
                    stroke="url(#edge)" strokeWidth={highlighted ? 0.35 : 0.15}
                    opacity={highlighted ? 1 : 0.5} />
                );
              })}
            </svg>
            {nodes.map((n) => (
              <button
                key={n.id}
                onClick={() => setActive(n)}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <div className="relative">
                  <motion.div
                    className={`h-3 w-3 rounded-full transition-all ${active.id === n.id ? "bg-gold shadow-gold scale-150" : "bg-telemetry"}`}
                    animate={{ scale: active.id === n.id ? [1.5, 1.8, 1.5] : 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className={`absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-widest transition ${
                    active.id === n.id ? "text-gold" : "text-muted-foreground"
                  }`}>
                    {n.name}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* panel */}
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-6 rounded-sm border border-border glass p-8"
          >
            <div>
              <div className="eyebrow">Project · Open Source</div>
              <h3 className="mt-2 font-display text-3xl font-bold text-gold-grad">{active.name}</h3>
              <p className="mt-3 text-muted-foreground">{active.desc}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Stat label="Contributors" value={active.contributors.toString()} />
              <Stat label="Commits (30d)" value={active.commits.toLocaleString()} />
            </div>

            <div>
              <div className="eyebrow mb-2 text-telemetry">Tech Stack</div>
              <div className="flex flex-wrap gap-2">
                {active.stack.map((s) => (
                  <span key={s} className="rounded-sm border border-border bg-white/5 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="eyebrow mb-2 text-telemetry">Roadmap H1</div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2"><span className="text-gold">▸</span> Public alpha + docs</li>
                <li className="flex gap-2"><span className="text-gold">▸</span> SDK in TypeScript + Python</li>
                <li className="flex gap-2"><span className="text-gold">▸</span> First production deployment in Nairobi</li>
              </ul>
            </div>

            <a href="#" className="mt-auto rounded-sm border border-gold/40 bg-gold/10 px-4 py-3 text-center font-mono text-xs uppercase tracking-widest text-gold transition hover:bg-gold hover:text-primary-foreground">
              View Repository →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-sm border border-border bg-white/[0.02] p-4">
      <div className="font-display text-2xl font-bold text-foreground">{value}</div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}
