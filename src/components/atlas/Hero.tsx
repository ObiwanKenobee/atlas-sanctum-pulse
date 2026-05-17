import { motion } from "motion/react";
import heroImg from "@/assets/hero-athlete.jpg";

const metrics = [
  { label: "Athletes Impacted", value: "12,480", unit: "+" },
  { label: "OSS Contributors", value: "1,902", unit: "" },
  { label: "Communities", value: "84", unit: "" },
  { label: "Data Points", value: "9.4", unit: "M" },
  { label: "Active Projects", value: "27", unit: "" },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Athlete training at sunrise in Nairobi"
          width={1920}
          height={1080}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        {/* scan line */}
        <div className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent animate-scan" />
      </div>

      {/* HUD corner tags */}
      <div className="absolute top-24 left-6 font-mono text-[10px] uppercase tracking-widest text-gold/80">
        <div>◉ LIVE • NBO 01°17′S 36°49′E</div>
        <div className="mt-1 text-muted-foreground">SYS.ATLAS / v0.9.1-beta</div>
      </div>
      <div className="absolute top-24 right-6 text-right font-mono text-[10px] uppercase tracking-widest text-telemetry/80">
        <div>◉ TELEMETRY STREAM</div>
        <div className="mt-1 text-muted-foreground">42.7 ms · 99.98% UP</div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="eyebrow mb-6"
        >
          Built by students · Built in Africa · Built for humanity
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-display text-6xl font-bold tracking-tight md:text-[9rem] md:leading-[0.9]"
        >
          ATLAS
          <span className="block text-gold-grad">SANCTUM</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
        >
          Sports as a system. Athletes as leaders. Communities as legacy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#join" className="group relative overflow-hidden rounded-sm bg-gold-grad px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-gold transition hover:scale-[1.02]">
            Join the Movement →
          </a>
          <a href="#ecosystem" className="rounded-sm border border-border bg-white/5 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-foreground backdrop-blur transition hover:border-gold/50 hover:text-gold">
            Explore Open Source
          </a>
          <a href="#contributors" className="rounded-sm border border-telemetry/40 px-7 py-3.5 font-mono text-xs font-bold uppercase tracking-widest text-telemetry transition hover:bg-telemetry/10">
            Become a Contributor
          </a>
        </motion.div>

        {/* Metrics HUD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-20 grid w-full grid-cols-2 gap-px overflow-hidden rounded-sm border border-border glass md:grid-cols-5"
        >
          {metrics.map((m) => (
            <div key={m.label} className="group relative px-5 py-6 text-left">
              <div className="absolute left-0 top-0 h-px w-6 bg-gold" />
              <div className="font-display text-3xl font-bold text-foreground md:text-4xl">
                {m.value}<span className="text-gold">{m.unit}</span>
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {m.label}
              </div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded bg-white/5">
                <div className="h-full bg-gradient-to-r from-gold via-telemetry to-gold animate-pulse-slow" style={{ width: `${40 + Math.random() * 50}%` }} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
