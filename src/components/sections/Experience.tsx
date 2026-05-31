const jobs = [
  { role: "Sr. SEO Executive", co: "Timoz Digital Era Pvt. Ltd.", date: "Oct 2024 – Feb 2026", loc: "Bhopal, India", desc: "On-page optimization, technical audits, link building, GBP management, social media posting", initials: "TD" },
  { role: "Sr. SEO Expert", co: "Anirup Technologies LLP", date: "Mar 2024 – Sep 2024", loc: "Noida, India", desc: "Keyword strategy, competitor analysis, organic growth campaigns", initials: "AT" },
  { role: "Sr. SEO Expert", co: "WhiteBunnie Digital Marketing", date: "Aug 2022 – Dec 2023", loc: "Noida, India", desc: "Full-funnel SEO strategy, site speed, mobile optimization", initials: "WB" },
  { role: "SEO Expert", co: "Measure Marketing Results Inc.", date: "Nov 2020 – Aug 2022", loc: "International agency", desc: "Link building, organic traffic growth", initials: "MM" },
  { role: "SEO Expert", co: "SEOValley Solutions Pvt. Ltd.", date: "May 2016 – Nov 2020", loc: "India", desc: "Foundation SEO, link building, content strategy", initials: "SV" },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="text-center reveal">
          <div className="text-sm uppercase tracking-[0.3em] text-primary-glow font-mono">Timeline</div>
          <h2 className="mt-4 text-4xl md:text-5xl">Career Journey</h2>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-12">
            {jobs.map((j, i) => (
              <div key={j.co} className={`reveal relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <div className="glass rounded-2xl p-6 inline-block text-left w-full hover:shadow-glow transition-shadow">
                    <div className={`flex items-center gap-3 mb-3 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center font-mono text-sm text-primary-foreground shrink-0">{j.initials}</div>
                      <div>
                        <div className="font-display text-xl">{j.role}</div>
                        <div className="text-sm text-primary-glow">{j.co}</div>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground">{j.date} · {j.loc}</div>
                    <p className="mt-3 text-sm text-muted-foreground">{j.desc}</p>
                  </div>
                </div>
                <div className="hidden md:block" />
                <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 h-3 w-3 rounded-full bg-primary-glow ring-4 ring-background shadow-glow" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
