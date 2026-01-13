import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function PrivacyModal({ open, onOpenChange }: PrivacyModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-primary/20 sm:max-w-lg max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-xl gradient-text">
            Polityka Prywatności
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <h3 className="font-semibold text-foreground">1. Administrator danych</h3>
            <p>
              Administratorem danych osobowych jest organizator kursu "Jak tworzyć grafiki 
              i video produktowe za pomocą AI".
            </p>

            <h3 className="font-semibold text-foreground">2. Zakres zbieranych danych</h3>
            <p>
              Zbieramy wyłącznie adres email podany przez użytkownika podczas zapisywania się 
              na listę oczekujących.
            </p>

            <h3 className="font-semibold text-foreground">3. Cel przetwarzania</h3>
            <p>
              Dane są przetwarzane w celu:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Informowania o starcie kursu i jego szczegółach</li>
              <li>Przesyłania materiałów promocyjnych związanych z kursem</li>
              <li>Kontaktu w sprawie specjalnych ofert dla osób z listy oczekujących</li>
            </ul>

            <h3 className="font-semibold text-foreground">4. Podstawa prawna</h3>
            <p>
              Podstawą prawną przetwarzania danych jest zgoda użytkownika wyrażona poprzez 
              zapisanie się na listę oczekujących (art. 6 ust. 1 lit. a RODO).
            </p>

            <h3 className="font-semibold text-foreground">5. Prawa użytkownika</h3>
            <p>
              Użytkownik ma prawo do:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Dostępu do swoich danych</li>
              <li>Sprostowania danych</li>
              <li>Usunięcia danych</li>
              <li>Ograniczenia przetwarzania</li>
              <li>Przenoszenia danych</li>
              <li>Cofnięcia zgody w dowolnym momencie</li>
            </ul>

            <h3 className="font-semibold text-foreground">6. Okres przechowywania</h3>
            <p>
              Dane są przechowywane do momentu wycofania zgody lub zakończenia działań 
              promocyjnych związanych z kursem.
            </p>

            <h3 className="font-semibold text-foreground">7. Bezpieczeństwo danych</h3>
            <p>
              Stosujemy odpowiednie środki techniczne i organizacyjne w celu ochrony 
              danych osobowych przed nieuprawnionym dostępem.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
