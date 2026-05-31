import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-[1200px] px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="Freelancer Punit" className="h-8 w-8 rounded-md" />
            <span className="font-display text-lg">Freelancer <span className="text-primary-glow">Punit</span></span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Ranking websites. Building businesses.</p>
        </div>
        <div className="flex md:justify-center gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#projects" className="hover:text-foreground transition">Projects</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </div>
        <div className="md:text-right text-xs text-muted-foreground font-mono">
          © 2025 Punit Yadav. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
