import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TermsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function TermsModal({ open, onOpenChange }: TermsModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-primary/20 sm:max-w-lg max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-xl gradient-text">
            Regulamin
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-4 text-sm text-muted-foreground">
            <h3 className="font-semibold text-foreground">1. Postanowienia ogólne</h3>
            <p>
              Niniejszy regulamin określa zasady korzystania z listy oczekujących na kurs 
              "Jak tworzyć grafiki i video produktowe za pomocą AI".
            </p>

            <h3 className="font-semibold text-foreground">2. Zapisanie się na listę</h3>
            <p>
              Zapisując się na listę oczekujących, użytkownik wyraża zgodę na otrzymywanie 
              informacji o kursie, w tym o dacie premiery, cenach i specjalnych ofertach.
            </p>

            <h3 className="font-semibold text-foreground">3. Prawa i obowiązki</h3>
            <p>
              Użytkownik ma prawo w każdej chwili wypisać się z listy oczekujących poprzez 
              kliknięcie linku rezygnacji znajdującego się w każdej wiadomości email.
            </p>

            <h3 className="font-semibold text-foreground">4. Odpowiedzialność</h3>
            <p>
              Organizator kursu nie ponosi odpowiedzialności za błędne podanie adresu email 
              przez użytkownika.
            </p>

            <h3 className="font-semibold text-foreground">5. Zmiany regulaminu</h3>
            <p>
              Organizator zastrzega sobie prawo do zmiany niniejszego regulaminu. 
              O zmianach użytkownicy zostaną poinformowani drogą mailową.
            </p>

            <h3 className="font-semibold text-foreground">6. Kontakt</h3>
            <p>
              W przypadku pytań dotyczących regulaminu, prosimy o kontakt na adres email 
              podany w stopce strony.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
