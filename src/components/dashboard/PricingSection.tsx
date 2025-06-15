import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export function PricingSection() {
  const navigate = useNavigate();
  const pricingTiers: PricingTier[] = [
    {
      name: "Free",
      price: "$0",
      description: "For small businesses just getting started with ESG",
      features: [
        "1 ESG report per year", 
        "Scope 1 emissions only", 
        "Basic dashboard", 
        "PDF export"
      ],
      cta: "Start Free",
    },
    {
      name: "Pro",
      price: "$99",
      description: "For growing businesses ready to take ESG seriously",
      features: [
        "Full emissions calculator",
        "Scope 1, 2, and 3 tracking",
        "PDF and Excel reports",
        "Data storage for 2 years",
        "Quarterly reporting"
      ],
      cta: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Compliance+",
      price: "$249",
      description: "For businesses with regulatory reporting requirements",
      features: [
        "CSRD/SEC reporting templates",
        "Supplier data integration",
        "Team collaboration (up to 5)",
        "Audit-ready exports",
        "Regulatory deadline tracking",
        "Expert support"
      ],
      cta: "Upgrade to Compliance+"
    },
  ];

  // Map tier name to route
  const tierRoute = (name: string) => {
    switch (name) {
      case "Free": return "/pricing/free";
      case "Pro": return "/pricing/pro";
      case "Compliance+": return "/pricing/compliance-plus";
      default: return "/pricing";
    }
  };

  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-emerald/5 to-transparent"></div>
      
      <div className="text-center mb-12 relative">
        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent">
          Unlock the Full ESG Suite
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that best fits your business's sustainability reporting needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pricingTiers.map((tier, index) => (
          <Card 
            key={tier.name} 
            className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${
              tier.popular ? "border-emerald shadow-lg" : "hover:shadow-md"
            }`}
            style={{ animationDelay: `${0.2 * (index + 1)}s` }}
          >
            {tier.popular && (
              <div className="absolute top-0 right-0">
                <div className="bg-emerald text-white text-center py-1 px-8 text-sm font-medium rotate-45 translate-x-8 translate-y-4">
                  Popular
                </div>
              </div>
            )}
            <CardHeader>
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <div className="mt-4">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-emerald shrink-0 bg-emerald/10 rounded-full p-0.5">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${tier.popular ? 'bg-emerald hover:bg-emerald-dark shadow-glow' : ''}`}
                variant={tier.popular ? "default" : "outline"}
                onClick={() => navigate(tierRoute(tier.name))}
              >
                {tier.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
