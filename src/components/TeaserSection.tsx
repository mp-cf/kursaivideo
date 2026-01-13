import { Play } from "lucide-react";
import teaserGraphics from "@/assets/teaser-graphics.jpg";
import teaserVideo from "@/assets/teaser-video.jpg";
import teaserTools from "@/assets/teaser-tools.jpg";

const teasers = [
  {
    image: teaserGraphics,
    title: "Grafiki produktowe",
    subtitle: "Moduł 1-3",
  },
  {
    image: teaserVideo,
    title: "Video produktowe",
    subtitle: "Moduł 4-7",
  },
  {
    image: teaserTools,
    title: "Narzędzia AI",
    subtitle: "Moduł 8-10",
  },
];

export function TeaserSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Zobacz <span className="gradient-text">co Cię czeka</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Zajrzyj za kulisy kursu i zobacz przykładowe efekty pracy z AI.
          </p>
        </div>

        {/* Teaser cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {teasers.map((teaser, index) => (
            <div
              key={teaser.title}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img
                src={teaser.image}
                alt={teaser.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <Play className="h-7 w-7 text-primary-foreground ml-1" />
                </div>
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-accent mb-1">{teaser.subtitle}</p>
                <h3 className="text-xl font-bold">{teaser.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
