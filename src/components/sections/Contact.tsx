import { Mail, Phone, Linkedin as LinkedinIcon, Instagram as InstagramIcon, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      website: formData.get("website") as string,
      message: formData.get("message") as string,
    };

    try {
      // Option 1: Using Web3Forms (free service, no backend needed)
      // Sign up at https://web3forms.com to get your access key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d915a941-1d65-452f-a8c6-fce5a8bd7add", // Replace with your actual key
          name: data.name,
          email: data.email,
          website: data.website,
          message: data.message,
          subject: `New Inquiry from ${data.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try email directly.");
      
      // Fallback to mailto
      setTimeout(() => {
        const body = `Name: ${data.name}%0AEmail: ${data.email}%0AWebsite: ${data.website}%0A%0A${data.message}`;
        window.location.href = `mailto:er.punityadav@gmail.com?subject=New Inquiry from ${data.name}&body=${body}`;
      }, 2000);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div className="reveal">
          <div className="text-sm uppercase tracking-[0.3em] text-primary-glow font-mono">Contact</div>
          <h2 className="mt-4 text-4xl md:text-5xl">Let's Grow Your Rankings</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
            Whether you're a startup wanting to get discovered or an established brand ready to dominate — I'm here to make it happen. Let's build your organic growth engine together.
          </p>

          <div className="mt-10 space-y-4">
            <a href="mailto:er.punityadav@gmail.com" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-lg glass flex items-center justify-center group-hover:bg-primary/20 transition"><Mail className="h-4 w-4 text-primary-glow" /></div>
              <span className="group-hover:text-primary-glow transition">er.punityadav@gmail.com</span>
            </a>
            <a href="tel:+918878928847" className="flex items-center gap-3 group">
              <div className="h-10 w-10 rounded-lg glass flex items-center justify-center group-hover:bg-primary/20 transition"><Phone className="h-4 w-4 text-primary-glow" /></div>
              <span className="group-hover:text-primary-glow transition">+91 88789 28847</span>
            </a>
          </div>

          <div className="mt-8 flex gap-3">
            <a href="https://www.linkedin.com/in/punityadavindia?utm_source=share_via&utm_content=profile&utm_medium=member_android" aria-label="LinkedIn" className="h-10 w-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition"><LinkedinIcon className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/freelancerpunit?igsh=bXlwNHQ4cTA4bTBu" aria-label="Instagram" className="h-10 w-10 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition"><InstagramIcon className="h-4 w-4" /></a>
          </div>
        </div>

        <form className="reveal glass rounded-2xl p-8 space-y-4" onSubmit={handleSubmit}>
          <Field name="name" label="Name" placeholder="Your name" />
          <Field name="email" label="Email" type="email" placeholder="you@company.com" />
          <Field name="website" label="Website" placeholder="https://yoursite.com" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground font-mono">Message</label>
            <textarea 
              name="message" 
              required 
              rows={5} 
              placeholder="Tell me about your project..."
              className="mt-2 w-full rounded-lg bg-background/60 border border-border px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" 
            />
          </div>

          {status === "success" && (
            <div className="flex items-center gap-2 text-sm text-green-500 bg-green-500/10 border border-green-500/20 rounded-lg px-4 py-3">
              <CheckCircle2 className="h-4 w-4" />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-2 text-sm text-red-500 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
              <AlertCircle className="h-4 w-4" />
              <span>{errorMessage || "Failed to send. Opening email client..."}</span>
            </div>
          )}

          <button 
            type="submit" 
            disabled={status === "submitting"}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 font-medium text-primary-foreground shadow-glow hover:opacity-90 transition w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? (
              <>
                <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, type = "text" }: { name: string; label: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground font-mono">{label}</label>
      <input 
        name={name} 
        type={type} 
        required={name !== "website"} 
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg bg-background/60 border border-border px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
      />
    </div>
  );
}
