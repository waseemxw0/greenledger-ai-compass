
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export function PricingSection() {
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

  return (
    <section className="py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">Unlock the Full ESG Suite</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that best fits your business's sustainability reporting needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {pricingTiers.map((tier) => (
          <Card key={tier.name} className={tier.popular ? "border-emerald shadow-lg" : ""}>
            {tier.popular && (
              <div className="bg-emerald text-white text-center py-1 text-sm font-medium">
                Most Popular
              </div>
            )}
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <div className="mt-2">
                <span className="text-3xl font-bold">{tier.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <CardDescription className="mt-2">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="mr-2 h-5 w-5 text-emerald shrink-0">
                      <Check className="h-5 w-5" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${tier.popular ? 'bg-emerald hover:bg-emerald-dark' : ''}`}
                variant={tier.popular ? "default" : "outline"}
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
