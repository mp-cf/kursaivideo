import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onOpenWaitlist: () => void;
}

export function HeroSection({ onOpenWaitlist }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="AI Creative Background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Hero glow effect */}
      <div className="absolute inset-0 hero-glow z-0" />

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl floating-animation" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl floating-animation" style={{ animationDelay: "-3s" }} />

      <div className="container relative z-10 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card animate-fade-in">
            <Play className="h-4 w-4 text-accent" />
            <span className="text-sm text-muted-foreground">Kurs online • Wkrótce premiera</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Jak tworzyć{" "}
            <span className="gradient-text">grafiki i video</span>{" "}
            produktowe za pomocą{" "}
            <span className="gradient-text">AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Naucz się tworzyć profesjonalne materiały wizualne do sprzedaży produktów,
            wykorzystując najnowsze narzędzia sztucznej inteligencji.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={onOpenWaitlist}>
              Dołącz do listy oczekujących
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="glass" size="lg">
              <Play className="h-4 w-4" />
              Zobacz zwiastun
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "10+", label: "Modułów" },
              { value: "50+", label: "Lekcji wideo" },
              { value: "100%", label: "Praktyki" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
