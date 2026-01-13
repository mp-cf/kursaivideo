import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function WaitlistModal({ open, onOpenChange }: WaitlistModalProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    toast({
      title: "Dziękujemy! 🎉",
      description: "Jesteś na liście oczekujących. Powiadomimy Cię o starcie kursu!",
    });

    setEmail("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-primary/20 sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl gradient-text flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Dołącz do listy oczekujących
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Bądź pierwszy/a na liście i otrzymaj specjalną zniżkę na premierę kursu!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <Input
            type="email"
            placeholder="Twój adres email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 bg-secondary/50 border-border focus:border-primary"
          />
          <Button
            type="submit"
            variant="hero"
            size="lg"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Zapisywanie..." : "Zapisz się na listę"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
