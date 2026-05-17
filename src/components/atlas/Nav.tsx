export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-sm bg-gold-grad shadow-gold" />
          <span className="font-display text-sm font-bold tracking-[0.3em] text-foreground">
            ATLAS SANCTUM
          </span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {[
            ["Vision", "#vision"],
            ["Ecosystem", "#ecosystem"],
            ["Lab", "#lab"],
            ["Community", "#community"],
            ["Philosophy", "#philosophy"],
            ["Contributors", "#contributors"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="text-xs uppercase tracking-widest text-muted-foreground transition hover:text-gold">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="#join"
          className="rounded-sm border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-gold transition hover:bg-gold hover:text-primary-foreground"
        >
          Join
        </a>
      </div>
    </header>
  );
}
