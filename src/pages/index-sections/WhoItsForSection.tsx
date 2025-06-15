
import { Building2, Boxes, Briefcase } from "lucide-react";

const TARGETS = [
  {
    icon: <Building2 className="w-7 h-7 text-emerald-600" />,
    heading: "Mid-Sized Businesses",
    text: "Scale ESG efforts without the headache of manual reporting.",
  },
  {
    icon: <Boxes className="w-7 h-7 text-blue-600" />,
    heading: "Manufacturers & Retail",
    text: "Showcase supply chain sustainability and meet partner demands.",
  },
  {
    icon: <Briefcase className="w-7 h-7 text-fuchsia-600" />,
    heading: "ESG Consultants & CFOs",
    text: "Deliver best-in-class ESG outcomes for clients or leadership.",
  },
];

export function WhoItsForSection() {
  return (
    <section className="py-10 sm:py-16 bg-emerald-50/30 dark:bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Who It’s For</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-stretch">
          {TARGETS.map((c) => (
            <div
              key={c.heading}
              className="flex-1 glass-card rounded-lg p-6 text-center flex flex-col items-center shadow-soft card-hover"
            >
              {c.icon}
              <h3 className="mt-4 font-semibold text-lg">{c.heading}</h3>
              <p className="text-sm text-muted-foreground mt-2">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
