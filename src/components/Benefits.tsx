import { Check, Clock, Zap, Users } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Oszczędność czasu",
    description:
      "Twórz w minuty to, co kiedyś zajmowało godziny. AI przyspiesza cały proces produkcji wizualnej.",
  },
  {
    icon: Zap,
    title: "Zero doświadczenia",
    description:
      "Nie potrzebujesz umiejętności graficznych ani studia. AI robi za Ciebie ciężką robotę.",
  },
  {
    icon: Users,
    title: "Wsparcie społeczności",
    description:
      "Dołącz do ekskluzywnej grupy kursantów i wymieniaj się doświadczeniami z innymi twórcami.",
  },
  {
    icon: Check,
    title: "Materiały do pobrania",
    description:
      "Gotowe prompty, szablony i zasoby, które od razu wykorzystasz w swoich projektach.",
  },
];

export function Benefits() {
  return (
    <section className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container px-4 md:px-6 relative">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Dlaczego <span className="gradient-text">ten kurs?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Praktyczna wiedza, którą od razu zastosujesz w swoim biznesie lub pracy.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
