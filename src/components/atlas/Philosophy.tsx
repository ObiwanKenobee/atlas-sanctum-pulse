import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";

const principles = [
  "Discipline", "Brotherhood", "Innovation", "Service", "Resilience",
  "Integrity", "Faith", "Hope", "Love", "Compassion",
];

export function Philosophy() {
  return (
    <section id="philosophy" className="relative overflow-hidden px-6 py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          index="§ 06"
          eyebrow="The Sanctum Philosophy"
          title={<>Ten words. A <span className="text-gold-grad">covenant.</span></>}
        />

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border md:grid-cols-5">
          {principles.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className="group relative aspect-square overflow-hidden bg-card transition hover:bg-gold/10"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div className="font-mono text-[10px] text-gold">0{i < 9 ? i + 1 : i + 1}</div>
                <div className="mt-2 font-display text-2xl font-bold tracking-tight transition group-hover:text-gold md:text-3xl">{p}</div>
              </div>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mx-auto mt-24 max-w-4xl text-center"
        >
          <blockquote className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            "We are not building a sports brand. We are building the{" "}
            <span className="text-gold-grad">infrastructure of human dignity</span> — one
            pitch, one repo, one disciplined morning at a time."
          </blockquote>
          <figcaption className="mt-6 eyebrow">— The Atlas Manifesto, Article I</figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
