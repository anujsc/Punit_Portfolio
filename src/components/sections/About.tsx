import { Search, Key, BarChart3, Wrench, MapPin, Trophy, Link2, Smartphone, Megaphone } from "lucide-react";

const skills = [
  { icon: Search, label: "Website Audit" },
  { icon: Key, label: "Keyword Research" },
  { icon: BarChart3, label: "Google Analytics" },
  { icon: Wrench, label: "Search Console" },
  { icon: MapPin, label: "Google Business" },
  { icon: Trophy, label: "Competitor Analysis" },
  { icon: Link2, label: "Link Building" },
  { icon: Smartphone, label: "Technical SEO" },
  { icon: Megaphone, label: "Social Media" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-2 gap-16 items-start">
        <div className="reveal">
          <div className="text-sm uppercase tracking-[0.3em] text-primary-glow font-mono">About</div>
          <h2 className="mt-4 text-4xl md:text-5xl">Who Am I?</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            I'm <span className="text-foreground font-medium">Punit Yadav</span>, an SEO specialist based in Indore, India.
            Over the past 9+ years, I've worked with digital agencies and brands across India and Canada — helping them grow
            organic traffic, improve search rankings, and build lasting online authority.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            I specialize in technical SEO, on-page optimization, link building, and Google Business Profile management.
          </p>
        </div>

        <div className="reveal grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skills.map((s) => (
            <div key={s.label} className="group glass rounded-xl p-4 hover:border-primary/40 transition-all hover:-translate-y-1">
              <s.icon className="h-5 w-5 text-primary-glow mb-3" />
              <div className="text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
