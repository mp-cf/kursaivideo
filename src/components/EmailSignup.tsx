import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Sparkles } from "lucide-react";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    toast({
      title: "Dziękujemy! 🎉",
      description: "Jesteś na liście oczekujących. Powiadomimy Cię o starcie kursu!",
    });

    setEmail("");
  };

  return (
    <section className="py-24 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-8">
            <Sparkles className="h-8 w-8 text-primary-foreground" />
          </div>

          {/* Header */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Bądź na <span className="gradient-text">liście VIP</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Zapisz się już teraz i otrzymaj specjalną zniżkę na premierę kursu
            oraz ekskluzywne materiały bonusowe.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Twój adres email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-14 bg-secondary/50 border-border focus:border-primary text-base"
            />
            <Button
              type="submit"
              variant="hero"
              size="xl"
              disabled={isLoading}
              className="shrink-0"
            >
              {isLoading ? "Zapisuję..." : "Zapisz się"}
              <ArrowRight className="h-5 w-5" />
            </Button>
          </form>

          {/* Trust text */}
          <p className="text-sm text-muted-foreground mt-4">
            Bez spamu. Możesz wypisać się w każdej chwili.
          </p>
        </div>
      </div>
    </section>
  );
}
