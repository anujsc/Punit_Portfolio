const companies = ["Timoz Digital Era", "Anirup Technologies", "WhiteBunnie", "Measure Marketing", "SEOValley"];

export function Trust() {
  return (
    <section className="py-20 border-y border-border/50">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <div className="text-sm uppercase tracking-[0.3em] text-primary-glow font-mono reveal">Trusted By</div>
        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {companies.map((c) => (
            <div key={c} className="font-display text-lg md:text-xl text-muted-foreground hover:text-foreground transition-colors">{c}</div>
          ))}
        </div>
        <p className="reveal mt-10 text-muted-foreground max-w-2xl mx-auto">
          9+ years. 5 agencies. 50+ client projects. <span className="text-foreground">One consistent result — growth.</span>
        </p>
      </div>
    </section>
  );
}
