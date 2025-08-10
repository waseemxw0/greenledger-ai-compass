
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PricingFree() {
  const navigate = useNavigate();

  return (
    <section className="py-12 min-h-[60vh] flex items-center justify-center">
      <Card className="max-w-md w-full p-0">
        <CardHeader>
          <CardTitle className="text-2xl">Free Plan</CardTitle>
          <CardDescription>
            For small businesses just getting started with ESG. Enjoy basic features at no cost.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            <li className="flex items-center"><Check className="text-primary mr-2" /> 1 ESG report per year</li>
            <li className="flex items-center"><Check className="text-primary mr-2" /> Scope 1 emissions only</li>
            <li className="flex items-center"><Check className="text-primary mr-2" /> Basic dashboard</li>
            <li className="flex items-center"><Check className="text-primary mr-2" /> PDF export</li>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => navigate("/")}>
            Start Using Free Plan
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
