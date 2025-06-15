
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function LeadCaptureSection() {
  const navigate = useNavigate();
  return (
    <section className="max-w-xl mx-auto py-8 flex flex-col gap-7 items-center">
      <h2 className="text-xl md:text-2xl font-bold mb-1 text-center">Get in Touch — or See a Demo</h2>
      <div className="flex flex-wrap gap-3 justify-center">
        <Button
          variant="outline"
          className="font-semibold px-7 py-3"
          onClick={() => navigate("/book-demo")}
        >
          Book a 15-min walkthrough
        </Button>
        <Button
          variant="ghost"
          className="text-emerald px-7 py-3"
          onClick={() => navigate("/esg-readiness-survey")}
        >
          See how ESG-ready your company is
        </Button>
        <Button
          className="bg-emerald text-white px-7 py-3"
          onClick={() => navigate("/free-esg-template")}
        >
          Get a free ESG audit template
        </Button>
      </div>
    </section>
  );
}
