import { SectionHeader } from "./SectionHeader";

const contributors = [
  { handle: "@kwanjiru", country: "🇰🇪", commits: 1284, projects: 4, rank: 1 },
  { handle: "@ade_lagos", country: "🇳🇬", commits: 1102, projects: 3, rank: 2 },
  { handle: "@thandiwe", country: "🇿🇦", commits: 968, projects: 5, rank: 3 },
  { handle: "@yonas_addis", country: "🇪🇹", commits: 842, projects: 2, rank: 4 },
  { handle: "@maya_berlin", country: "🇩🇪", commits: 781, projects: 3, rank: 5 },
  { handle: "@kofi_acc", country: "🇬🇭", commits: 720, projects: 4, rank: 6 },
  { handle: "@sara_kigali", country: "🇷🇼", commits: 698, projects: 2, rank: 7 },
  { handle: "@luca_milano", country: "🇮🇹", commits: 612, projects: 3, rank: 8 },
];

export function Contributors() {
  return (
    <section id="contributors" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="§ 07"
          eyebrow="Contributor System"
          title={<>The leaderboard of <span className="text-gold-grad">builders.</span></>}
          description="Open contributions from across Africa and the world. Rank up by shipping, mentoring, and serving."
        />

        <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          {/* table */}
          <div className="overflow-hidden rounded-sm border border-border glass">
            <div className="grid grid-cols-[60px_1fr_60px_100px_120px] gap-4 border-b border-border bg-white/[0.02] px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span>Rank</span><span>Contributor</span><span></span><span>Projects</span><span>Commits</span>
            </div>
            {contributors.map((c) => (
              <div key={c.handle} className="group grid grid-cols-[60px_1fr_60px_100px_120px] items-center gap-4 border-b border-border px-5 py-4 transition hover:bg-gold/5">
                <div className={`font-display text-lg font-bold ${c.rank <= 3 ? "text-gold-grad" : "text-muted-foreground"}`}>
                  #{c.rank.toString().padStart(2, "0")}
                </div>
                <div className="font-mono text-sm text-foreground">{c.handle}</div>
                <div className="text-xl">{c.country}</div>
                <div className="font-mono text-sm text-muted-foreground">{c.projects}</div>
                <div className="font-mono text-sm text-gold">{c.commits.toLocaleString()}</div>
              </div>
            ))}
          </div>

          {/* heatmap */}
          <div className="rounded-sm border border-border glass p-6">
            <div className="eyebrow">Contribution Heatmap · 12wk</div>
            <div className="mt-4 grid grid-cols-12 gap-1">
              {Array.from({ length: 12 * 7 }).map((_, i) => {
                const h = Math.random();
                return (
                  <div
                    key={i}
                    className="aspect-square rounded-[2px]"
                    style={{
                      background: h < 0.2 ? "oklch(1 0 0 / 0.05)" : `oklch(0.82 0.14 86 / ${h})`,
                    }}
                  />
                );
              })}
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-[10px] uppercase text-muted-foreground">
              <span>less</span>
              <div className="flex gap-1">
                {[0.1, 0.3, 0.5, 0.7, 0.95].map((h) => (
                  <div key={h} className="h-2 w-2 rounded-[1px]" style={{ background: `oklch(0.82 0.14 86 / ${h})` }} />
                ))}
              </div>
              <span>more</span>
            </div>

            <div className="mt-6 space-y-3">
              {[
                ["✦", "Open issues", "184"],
                ["⚑", "PRs this week", "42"],
                ["◎", "Mentorship sessions", "67"],
              ].map(([icon, k, v]) => (
                <div key={k} className="flex items-center justify-between border-t border-border pt-3 first:border-0 first:pt-0">
                  <span className="font-mono text-xs text-muted-foreground"><span className="text-gold">{icon}</span> {k}</span>
                  <span className="font-display text-xl font-bold">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
