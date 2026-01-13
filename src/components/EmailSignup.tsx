import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { ArrowRight, Sparkles } from "lucide-react";
import { TermsModal } from "./TermsModal";
import { PrivacyModal } from "./PrivacyModal";

export function EmailSignup() {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !agreed) {
      if (!agreed) {
        toast({
          title: "Wymagana zgoda",
          description: "Musisz zaakceptować regulamin i politykę prywatności.",
          variant: "destructive",
        });
      }
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    toast({
      title: "Dziękujemy! 🎉",
      description: "Jesteś na liście oczekujących. Powiadomimy Cię o starcie kursu!",
    });

    setEmail("");
    setAgreed(false);
  };

  return (
    <>
      <TermsModal open={termsOpen} onOpenChange={setTermsOpen} />
      <PrivacyModal open={privacyOpen} onOpenChange={setPrivacyOpen} />
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

          {/* Checkbox for terms */}
          <div className="flex items-start gap-3 max-w-md mx-auto mt-4">
            <Checkbox
              id="terms"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked === true)}
              className="mt-0.5"
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground text-left leading-relaxed">
              Akceptuję{" "}
              <button
                type="button"
                onClick={() => setTermsOpen(true)}
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
              >
                regulamin
              </button>{" "}
              oraz{" "}
              <button
                type="button"
                onClick={() => setPrivacyOpen(true)}
                className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors"
              >
                politykę prywatności
              </button>
            </label>
          </div>

          {/* Trust text */}
          <p className="text-sm text-muted-foreground mt-4">
            Bez spamu. Możesz wypisać się w każdej chwili.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
