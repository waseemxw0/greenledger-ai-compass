
import { ArrowDown, ArrowUp, FileText } from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      icon: <ArrowDown className="h-7 w-7 text-emerald mb-2" />,
      headline: "Input or Connect Data",
      text: "Add your company details or securely connect sources.",
    },
    {
      icon: <ArrowUp className="h-7 w-7 text-blue-600 mb-2" />,
      headline: "AI-Powered Analysis",
      text: "We analyze and score your ESG standing — instantly.",
    },
    {
      icon: <FileText className="h-7 w-7 text-emerald mb-2" />,
      headline: "Download or Share Report",
      text: "Download investor-ready reports or view in your live dashboard.",
    },
  ];
  return (
    <section className="py-12 mb-0 max-w-4xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col items-center text-center bg-emerald/5 dark:bg-emerald/10 border border-emerald/10 rounded-lg p-7">
            {step.icon}
            <div className="font-semibold mt-1 mb-1">{step.headline}</div>
            <div className="text-gray-500 dark:text-gray-400 text-base">{step.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
