import { Search, TrendingUp, Link2, MapPin, BarChart3, Globe } from "lucide-react";

const services = [
  { icon: Search, title: "SEO Audit & Strategy", desc: "Full technical + content audit with an actionable roadmap tailored to your business." },
  { icon: TrendingUp, title: "On-Page Optimization", desc: "Meta tags, headers, schema markup, and internal linking done right." },
  { icon: Link2, title: "Link Building", desc: "Authority-building through white-hat outreach and quality placements." },
  { icon: MapPin, title: "Local SEO & GBP", desc: "Dominate Google Maps and local packs in your service areas." },
  { icon: BarChart3, title: "Analytics & Reporting", desc: "GA4, GSC dashboards, and clear monthly performance reports." },
  { icon: Globe, title: "Technical SEO", desc: "Site speed, Core Web Vitals, crawlability — the foundations that matter." },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="reveal text-center max-w-2xl mx-auto">
          <div className="text-sm uppercase tracking-[0.3em] text-primary-glow font-mono">Services</div>
          <h2 className="mt-4 text-4xl md:text-5xl">What I Do For You</h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="reveal group glass rounded-2xl p-7 hover:border-primary/40 hover:shadow-glow transition-all">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow mb-5">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
