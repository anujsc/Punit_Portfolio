import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to, duration]);

  return <span ref={ref} className="font-mono">{val}{suffix}</span>;
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto max-w-[1200px] px-6 w-full">
        <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs text-muted-foreground mb-8 reveal">
          <Sparkles className="h-3.5 w-3.5 text-primary-glow" />
          Available for Freelance
        </div>

        <h1 className="reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display leading-[1.05] max-w-5xl">
          Rank Higher.<br />
          Grow Faster.<br />
          <span className="text-gradient">Get Found.</span>
        </h1>

        <p className="reveal mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Senior SEO Specialist with 9+ years helping businesses dominate Google — from local service brands to SaaS platforms.
        </p>

        <div className="reveal mt-10 flex flex-wrap gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow hover:translate-y-[-2px] transition-transform">
            View My Work <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-6 py-3 font-medium hover:bg-card transition">
            <Mail className="h-4 w-4" /> Hire Me
          </a>
        </div>

        <div className="reveal mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: 9, s: "+", l: "Years Experience" },
            { v: 50, s: "+", l: "Projects Delivered" },
            { v: 100, s: "%", l: "Client Satisfaction" },
            { v: 5, s: "", l: "Industries Served" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-2xl p-5">
              <div className="text-3xl md:text-4xl text-gradient">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
