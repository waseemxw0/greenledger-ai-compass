
import { FileText, BarChart, Brain, ListChecks, FileSpreadsheet } from "lucide-react";

const FEATURES = [
  {
    icon: <FileText className="text-emerald-500 w-6 h-6 mb-2" />,
    title: "Automated ESG Reports",
    desc: "Generate industry-grade ESG reports with zero hassle, saving hours each cycle.",
  },
  {
    icon: <BarChart className="text-blue-500 w-6 h-6 mb-2" />,
    title: "Real-Time Sustainability Dashboard",
    desc: "Monitor all your emissions and progress at a glance—instantly, across your business.",
  },
  {
    icon: <Brain className="text-fuchsia-500 w-6 h-6 mb-2" />,
    title: "AI-Powered Compliance & Audit",
    desc: "Smart guidance and compliance checks against new ESG standards (SEC, CSRD, more).",
  },
  {
    icon: <ListChecks className="text-yellow-500 w-6 h-6 mb-2" />,
    title: "Carbon Tracking & Reduction Roadmaps",
    desc: "Plan, execute, and visualize your emissions reductions with actionable steps.",
  },
  {
    icon: <FileSpreadsheet className="text-indigo-500 w-6 h-6 mb-2" />,
    title: "Regulatory Report Generation",
    desc: "One-click SEC, EU (CSRD), and global ESG regulatory reports—always up-to-date.",
  },
];

export function FeatureBreakdownSection() {
  return (
    <section className="py-8 sm:py-12 bg-white/90 dark:bg-background border-b">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">Everything Your ESG Team Needs</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="glass-card p-5 flex flex-col items-center rounded-lg shadow-soft text-center h-full animate-fade-in transition-all duration-300">
              {f.icon}
              <h3 className="font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
