export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="mb-16 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-gold">{index}</span>
        <div className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="max-w-4xl font-display text-4xl font-bold tracking-tight md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base text-muted-foreground md:text-lg">{description}</p>
      )}
    </div>
  );
}
