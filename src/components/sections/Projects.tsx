import { ExternalLink } from "lucide-react";

const projects = [
  { name: "Zomit.in", niche: "Mobile Repair · India", desc: "Doorstep mobile repair brand ranking locally across Bhopal, Indore, Hyderabad, Bangalore.", url: "https://zomit.in/" },
  { name: "StoreMyGoods.com", niche: "Self Storage · India", desc: "Tech-enabled storage service ranking for high-intent keywords across Indian cities.", url: "https://storemygoods.com/" },
  { name: "CollabManagement.ca", niche: "SaaS · Canada", desc: "Canadian SaaS brand — international SEO, technical optimization.", url: "https://www.collabmanagement.ca/" },
  { name: "Anirup.com", niche: "Agency · India", desc: "Agency website — authority building, on-page SEO, GBP.", url: "https://anirup.com/" },
  { name: "WhiteBunnie.com", niche: "Agency · India", desc: "Full SEO audit + implementation for a fast-growing agency brand.", url: "https://whitebunnie.com/" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal max-w-2xl">
          <div className="text-sm uppercase tracking-[0.3em] text-primary-glow font-mono">Portfolio</div>
          <h2 className="mt-4 text-4xl md:text-5xl">Projects I've Ranked</h2>
          <p className="mt-4 text-muted-foreground">A selection of brands I've helped climb to the top of Google.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
              className={`reveal group relative glass rounded-2xl p-7 overflow-hidden hover:shadow-glow hover:border-primary/50 transition-all hover:-translate-y-1 ${i === 4 ? "md:col-span-2" : ""}`}>
              <div className="absolute -top-20 -right-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary-glow">{p.niche}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary-glow transition" />
                </div>
                <h3 className="text-2xl font-display">{p.name}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1 text-sm text-primary-glow font-medium">
                  View Site <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
