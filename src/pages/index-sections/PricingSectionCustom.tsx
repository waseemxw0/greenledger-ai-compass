
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/your-link";
const TYPEFORM_URL = "https://typeform.com/to/example";

export function PricingSectionCustom() {
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
