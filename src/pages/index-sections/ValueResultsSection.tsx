
import { Check, ArrowUp, ArrowDown, FileText } from "lucide-react";

export function ValueResultsSection() {
  const results = [
    { icon: <Check className="mr-2 text-emerald" />, text: "Audit-ready ESG reports" },
    { icon: <ArrowUp className="mr-2 text-blue-600" />, text: "Live dashboard with sustainability KPIs" },
    { icon: <ArrowDown className="mr-2 text-emerald" />, text: "Save 100+ hours of reporting time" },
    { icon: <FileText className="mr-2 text-emerald" />, text: "Attract investors & funding faster" },
    { icon: <Check className="mr-2 text-emerald" />, text: "Stay compliant with evolving ESG standards" },
  ];
  return (
    <section className="max-w-3xl mx-auto mb-12 text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-3">What You’ll Get with GreenLedger AI</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
        {results.map(({ icon, text }, i) => (
          <div key={i} className="flex items-center text-base md:text-lg bg-emerald/5 rounded-lg px-4 py-3 justify-start max-w-xs w-full">
            {icon}
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
