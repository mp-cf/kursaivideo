import { Image, Video, Wand2 } from "lucide-react";

const topics = [
  {
    icon: Image,
    title: "Grafiki produktowe",
    description:
      "Twórz profesjonalne zdjęcia produktów, packshoty i wizualizacje bez studia fotograficznego.",
    features: ["Generowanie tła", "Retusz AI", "Lifestyle shots"],
  },
  {
    icon: Video,
    title: "Video produktowe",
    description:
      "Produkuj angażujące klipy video, animacje i materiały reklamowe w kilka minut.",
    features: ["Animacje 3D", "Krótkie spoty", "UGC content"],
  },
  {
    icon: Wand2,
    title: "Narzędzia AI",
    description:
      "Poznaj najlepsze narzędzia AI do tworzenia contentu - od Midjourney po Runway.",
    features: ["Midjourney", "DALL-E", "Runway ML"],
  },
];

export function CourseContent() {
  return (
    <section className="py-24 relative">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Czego się <span className="gradient-text">nauczysz?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Kompleksowy kurs, który przeprowadzi Cię przez cały proces tworzenia
            materiałów wizualnych z wykorzystaniem AI.
          </p>
        </div>

        {/* Topics grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {topics.map((topic, index) => (
            <div
              key={topic.title}
              className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <topic.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3">{topic.title}</h3>
              <p className="text-muted-foreground mb-6">{topic.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {topic.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
