import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { useNavigate } from "react-router-dom";
import { FileText, Linkedin, ArrowDown, ArrowUp, Check } from "lucide-react";
import { useEffect, useState } from "react";
import { SchedulerModal } from "@/components/SchedulerModal";

const CALENDLY_URL = "https://calendly.com/your-link";
const TYPEFORM_URL = "https://typeform.com/to/example";
const EMAIL_TEMPLATE = "mailto:info@greenledger.ai?subject=Request%20ESG%20Audit%20Template";

function HeroSection() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState<false | "calendly" | "typeform">(false);
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
          onClick={() => setModalOpen("calendly")}
        >
          Book Free Demo
        </Button>
        <Button
          variant="ghost"
          className="font-semibold text-emerald px-7 py-4"
          onClick={() => setModalOpen("typeform")}
        >
          Start for Free
        </Button>
      </div>
      {/* Embedding SchedulerModal for both modes */}
      <SchedulerModal
        open={modalOpen === "calendly"}
        onClose={() => setModalOpen(false)}
        type="calendly"
        url={CALENDLY_URL}
      />
      <SchedulerModal
        open={modalOpen === "typeform"}
        onClose={() => setModalOpen(false)}
        type="typeform"
        url={TYPEFORM_URL}
      />
    </section>
  );
}

function WhoItsForSection() {
  const forList = [
    "Startups seeking funding",
    "SMBs wanting sustainability branding",
    "Consultants offering ESG services",
    "Manufacturers needing compliance",
    "Real estate developers with reporting requirements",
  ];
  return (
    <section className="max-w-2xl mx-auto mb-10 text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-3">Who It’s For</h2>
      <div className="flex flex-wrap gap-3 items-center justify-center">
        {forList.map((item) =>
          <span key={item} className="bg-emerald/10 text-emerald rounded px-4 py-2 text-sm font-medium">{item}</span>
        )}
      </div>
    </section>
  );
}

function ValueResultsSection() {
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

function PricingSectionCustom() {
  // replace/extend existing PricingSection for landing
  const plans = [
    {
      name: "Starter",
      price: "$197",
      freq: "one-time",
      features: [
        "1 ESG report",
        "PDF delivery",
      ],
      cta: "Buy Starter",
      url: TYPEFORM_URL, // replace with checkout, Typeform/Stripe
      highlight: false,
    },
    {
      name: "Growth",
      price: "$97",
      freq: "/mo",
      features: [
        "Dashboard + monthly tracking",
        "Live sustainability KPIs",
      ],
      cta: "Upgrade to Growth",
      url: CALENDLY_URL, // replace with real checkout or demo flow
      highlight: true,
    },
    {
      name: "Pro",
      price: "$399",
      freq: "/mo",
      features: [
        "White-label & multi-client",
        "Priority support",
      ],
      cta: "Go Pro",
      url: CALENDLY_URL, // replace with real checkout or contact
      highlight: false,
    },
  ];
  return (
    <section className="py-14 mt-2 bg-gradient-to-t from-emerald/5 to-transparent rounded-xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-7 text-center">Choose Your Plan</h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center items-stretch">
        {plans.map((plan) => (
          <div key={plan.name} className={`flex-1 rounded-xl bg-white/90 dark:bg-[#1E293B]/80 shadow-md border border-gray-100 dark:border-gray-700 p-7 flex flex-col items-center ${plan.highlight ? 'ring-2 ring-emerald' : ''}`}>
            <div className="text-lg font-bold mb-2">{plan.name}</div>
            <div className="mb-2 text-4xl font-extrabold text-emerald">{plan.price}<span className="text-lg font-normal text-gray-400">{plan.freq}</span></div>
            <ul className="mb-6 space-y-2 text-left">
              {plan.features.map(feat => <li key={feat} className="flex items-center text-gray-800 dark:text-gray-100"><Check className="mr-2 text-emerald" />{feat}</li>)}
            </ul>
            <Button
              className={`w-full px-7 py-2 font-semibold ${plan.highlight ? "bg-emerald text-white shadow-glow" : "border-emerald text-emerald"} `}
              variant={plan.highlight ? "default" : "outline"}
              onClick={() => window.open(plan.url, "_blank", "noopener,noreferrer")}
            >{plan.cta}</Button>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeadCaptureSection() {
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

function HowItWorksSection() {
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

// Reuse TrustSection with stronger tags & social
function TrustSection() {
  return (
    <section className="mb-12 flex flex-col items-center">
      <div className="text-muted-foreground text-base md:text-lg mb-3">
        Used by startups, manufacturers, and consultants
      </div>
      <div className="flex gap-6 md:gap-10 mb-1">
        <div className="rounded bg-white/80 shadow p-2 flex items-center justify-center min-w-[60px] min-h-[40px]">
          <Linkedin className="h-8 w-8 text-blue-600" />
        </div>
        <div className="rounded bg-white/80 shadow p-2 flex items-center justify-center min-w-[60px] min-h-[40px]">
          <svg width="56" height="20"><rect width="56" height="20" rx="6" fill="#ECFDF5"/><text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#065F46">LOGO</text></svg>
        </div>
        <div className="rounded bg-white/80 shadow p-2 flex items-center justify-center min-w-[60px] min-h-[40px]">
          <svg width="56" height="20"><rect width="56" height="20" rx="6" fill="#ECFDF5"/><text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#065F46">LOGO</text></svg>
        </div>
      </div>
      <div className="flex mt-2 gap-2">
        <span className="rounded px-3 py-1 bg-emerald/10 text-emerald text-xs font-medium">ESG Expert Approved</span>
        <span className="text-xs text-gray-400">Contact: <a href="mailto:info@greenledger.ai" className="underline text-emerald">info@greenledger.ai</a></span>
      </div>
    </section>
  );
}

// Stronger footer
function Footer() {
  return (
    <footer className="mt-14 py-5 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center text-center">
      <div className="flex gap-3 items-center text-sm">
        <span>&copy; {new Date().getFullYear()} GreenLedger AI</span>
        <span>•</span>
        <a href="mailto:info@greenledger.ai" className="underline text-emerald">info@greenledger.ai</a>
      </div>
      <div className="flex gap-3 mt-2 md:mt-0">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald">
          <Linkedin className="inline h-5 w-5" /> LinkedIn
        </a>
      </div>
    </footer>
  );
}

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <WhoItsForSection />

      <ValueResultsSection />

      <HowItWorksSection />

      <TrustSection />

      <PricingSectionCustom />

      <LeadCaptureSection />

      <Footer />
    </Layout>
  );
};

export default Index;
