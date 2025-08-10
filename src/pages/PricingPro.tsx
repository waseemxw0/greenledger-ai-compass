
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function PricingPro() {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    toast("Upgrade to Pro is currently in preview. Stripe integration coming soon!");
    // Replace with real Stripe session/payment logic later
  };

  return (
    <section className="py-12 min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-md w-full p-0">
        <CardHeader>
          <CardTitle className="text-2xl">Pro Plan</CardTitle>
          <CardDescription>
            For growing businesses ready to take ESG seriously. Unlock all platform capabilities.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-center"><Check className="text-primary mr-2" /> Full emissions calculator</li>
            <li className="flex items-center"><Check className="text-primary mr-2" /> Scope 1, 2, and 3 tracking</li>
            <li className="flex items-center"><Check className="text-primary mr-2" /> PDF and Excel reports</li>
            <li className="flex items-center"><Check className="text-primary mr-2" /> Data storage for 2 years</li>
            <li className="flex items-center"><Check className="text-primary mr-2" /> Quarterly reporting</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-primary hover:bg-primary/90" onClick={handleUpgrade}>
            Upgrade to Pro (Coming Soon)
          </Button>
        </CardFooter>
        <CardFooter>
          <Button variant="outline" className="w-full mt-2" onClick={() => navigate("/")}>
            Back to Dashboard
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
