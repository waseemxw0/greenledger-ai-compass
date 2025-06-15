
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function CtaAboveFold() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center mb-8">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-3 bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">
        ESG Reporting Made Effortless
      </h1>
      <p className="text-base sm:text-lg text-muted-foreground text-center mb-5 max-w-xl">
        Automate compliance, showcase sustainability, and delight your stakeholders—all in one platform.
      </p>
      <Button
        size="lg"
        className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg px-8 py-4 rounded-full font-bold text-lg transition-all w-full sm:w-auto"
        onClick={() => navigate("/signup")}
      >
        Get Started
        <ChevronRight className="ml-2" />
      </Button>
      <span className="mt-2 text-xs text-muted-foreground">No credit card required</span>
    </div>
  );
}
