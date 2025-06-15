
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full pt-12 pb-14 md:py-20 flex flex-col items-center justify-center text-center bg-gradient-to-b from-emerald/10 via-transparent to-transparent rounded-xl mb-6 relative overflow-hidden">
      <div className="mb-2 flex justify-center items-center gap-2">
        <span className="text-xs rounded px-3 py-1 bg-emerald/10 text-emerald font-medium uppercase tracking-wide">
          Powered by AI
        </span>
        <span className="text-xs rounded px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500">
          OpenAI • Make.com • Supabase
        </span>
      </div>
      <h1 className="text-3xl md:text-5xl font-extrabold max-w-3xl mb-4 bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent drop-shadow-lg">
        ESG Compliance, Sustainability Reporting & Automation in Minutes – Powered by AI
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-7 max-w-xl mx-auto">
        Generate investor-grade ESG reports, monitor your footprint, and stay compliant without the headache.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <Button
          className="bg-emerald hover:bg-emerald-dark shadow-glow px-7 py-4 text-base font-semibold rounded-xl"
          onClick={() => navigate("/reports")}
        >
          <FileText className="mr-2 h-5 w-5" />
          Get My ESG Report
        </Button>
        <Button
          variant="outline"
          className="font-semibold border-emerald text-emerald px-7 py-4"
          onClick={() => navigate("/book-demo")}
        >
          Book Free Demo
        </Button>
        <Button
          variant="ghost"
          className="font-semibold text-emerald px-7 py-4"
          onClick={() => navigate("/esg-readiness-survey")}
        >
          Start for Free
        </Button>
      </div>
      {/* Removed SchedulerModal components */}
    </section>
  );
}
