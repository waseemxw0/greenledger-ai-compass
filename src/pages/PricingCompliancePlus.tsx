
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export default function PricingCompliancePlus() {
  const navigate = useNavigate();

  const handleUpgrade = () => {
    toast("Upgrade to Compliance+ is currently in preview. Stripe integration coming soon!");
    // Replace with real Stripe session/payment logic later
  };

  return (
    <section className="py-12 min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-md w-full p-0">
        <CardHeader>
          <CardTitle className="text-2xl">Compliance+ Plan</CardTitle>
          <CardDescription>
            For businesses with regulatory reporting requirements. Top-tier reporting and support.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-center"><Check className="text-emerald mr-2" /> CSRD/SEC reporting templates</li>
            <li className="flex items-center"><Check className="text-emerald mr-2" /> Supplier data integration</li>
            <li className="flex items-center"><Check className="text-emerald mr-2" /> Team collaboration (up to 5)</li>
            <li className="flex items-center"><Check className="text-emerald mr-2" /> Audit-ready exports</li>
            <li className="flex items-center"><Check className="text-emerald mr-2" /> Regulatory deadline tracking</li>
            <li className="flex items-center"><Check className="text-emerald mr-2" /> Expert support</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-emerald hover:bg-emerald-dark shadow-glow" onClick={handleUpgrade}>
            Upgrade to Compliance+ (Coming Soon)
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
