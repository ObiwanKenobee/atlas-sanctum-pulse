import heroImg from "@/assets/hero-athlete.jpg";

export function Cta() {
  return (
    <section id="join" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="" loading="lazy" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 py-40 text-center">
        <div className="eyebrow mb-8">Final Transmission</div>
        <h2 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">
          DISCIPLINE TODAY.
          <span className="block text-gold-grad">EXCELLENCE TOMORROW.</span>
          LEGACY FOREVER.
        </h2>

        <p className="mt-8 max-w-xl text-muted-foreground md:text-lg">
          A sanctum is a place set apart. Help us build one — for the athlete, the coder, the city, the next generation.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#" className="rounded-sm bg-gold-grad px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-primary-foreground shadow-gold transition hover:scale-[1.02]">
            Join Atlas Sanctum
          </a>
          <a href="#" className="rounded-sm border border-border bg-white/5 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-foreground transition hover:border-gold/50 hover:text-gold">
            Explore GitHub
          </a>
          <a href="#" className="rounded-sm border border-telemetry/40 px-8 py-4 font-mono text-xs font-bold uppercase tracking-widest text-telemetry transition hover:bg-telemetry/10">
            Build With Us
          </a>
        </div>
      </div>

      <footer className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-sm bg-gold-grad" />
            <div className="font-display text-sm font-bold tracking-[0.3em]">ATLAS SANCTUM</div>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Built in Nairobi · Open Source · Humanity Focused
          </div>
          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <a href="#" className="hover:text-gold">GitHub</a>
            <a href="#" className="hover:text-gold">Docs</a>
            <a href="#" className="hover:text-gold">Manifesto</a>
            <a href="#" className="hover:text-gold">Contact</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
