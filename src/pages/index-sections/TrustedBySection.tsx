
import { Star } from "lucide-react";

const PLACEHOLDER_LOGOS = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg"
];

const TESTIMONIALS = [
  {
    name: "Casey C.",
    role: "Sustainability Lead, Acme Inc.",
    quote: "This platform made ESG reporting simple—our team saves hours each month!",
  },
  {
    name: "Jordan A.",
    role: "ESG Advisor",
    quote: "Best-in-class dashboards and features. Clients love the transparency.",
  },
];

export function TrustedBySection() {
  return (
    <section className="py-10 bg-white/95 dark:bg-background border-b">
      <div className="max-w-5xl mx-auto px-4 flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center">
          <span className="uppercase tracking-wide text-xs font-semibold text-emerald-700 mb-1">Trusted by forward-thinking teams</span>
          <div className="flex gap-8 my-2">
            {PLACEHOLDER_LOGOS.map((logo, i) => (
              <img key={i} src={logo} alt="Trusted company" className="h-8 opacity-60" />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-emerald-50/40 dark:bg-muted p-5 rounded-lg shadow-sm border flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 mb-1">
                <Star className="text-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 w-4 h-4" />
                <Star className="text-yellow-400 w-4 h-4" />
              </div>
              <p className="text-sm">&quot;{t.quote}&quot;</p>
              <span className="text-xs text-muted-foreground font-semibold mt-1">{t.name}</span>
              <span className="text-xs text-muted-foreground">{t.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
