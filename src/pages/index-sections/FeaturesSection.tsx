
import { FileText, AlertTriangle, Check, Search } from "lucide-react";

const featureBullets = [
  {
    icon: <Search className="text-emerald-600 w-5 h-5 mr-2" />,
    label: "AI-driven compliance monitoring",
  },
  {
    icon: <FileText className="text-blue-500 w-5 h-5 mr-2" />,
    label: "Automated ESG audit report generation",
  },
  {
    icon: <AlertTriangle className="text-yellow-500 w-5 h-5 mr-2" />,
    label: "Real-time risk detection and alerts",
  },
];

const steps = [
  { title: "Connect Data", description: "Securely link your ESG and operational data sources." },
  { title: "AI Audit", description: "The AI reviews, highlights risks, and drafts the audit report." },
  { title: "Compliance Insights", description: "See findings instantly and download ready-made reports." },
];

export function FeaturesSection() {
  return (
    <section className="py-8 sm:py-12 bg-white/95 dark:bg-background border-b">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* Visual Mockup/Infographic */}
        <div className="flex-shrink-0 w-full md:w-1/2 max-w-xs mx-auto md:mx-0 md:mr-8">
          <div className="relative bg-gradient-to-br from-emerald-100 via-blue-100 to-fuchsia-100 rounded-xl shadow-soft p-4 flex flex-col items-center justify-center">
            <img 
              src="/placeholder.svg" 
              alt="Audit workflow infographic" 
              className="w-32 h-32 object-contain mb-2"
              loading="lazy"
            />
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-1 text-sm shadow ring-1 ring-emerald-100 font-semibold text-emerald-700 flex items-center">
              <FileText className="w-4 h-4 mr-1 text-emerald-500" /> Compliance Report
            </div>
          </div>
        </div>

        {/* Features bullet list + how it works */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">Features at a glance</h2>
          <ul className="mb-5 space-y-3">
            {featureBullets.map(bullet => (
              <li key={bullet.label} className="flex items-center text-base">
                {bullet.icon}
                <span>{bullet.label}</span>
              </li>
            ))}
          </ul>
          <div>
            <h3 className="font-semibold text-base mb-2">How the AI Audit Works</h3>
            <ol className="space-y-2 pl-4 list-decimal text-gray-700 dark:text-gray-300 text-sm">
              {steps.map((step, i) => (
                <li className="ml-1" key={step.title}>
                  <span className="font-semibold">{step.title}: </span>
                  {step.description}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
