
// Section imports
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "./index-sections/HeroSection";
import { WhoItsForSection } from "./index-sections/WhoItsForSection";
import { ValueResultsSection } from "./index-sections/ValueResultsSection";
import { HowItWorksSection } from "./index-sections/HowItWorksSection";
import { TrustSection } from "./index-sections/TrustSection";
import { PricingSectionCustom } from "./index-sections/PricingSectionCustom";
import { LeadCaptureSection } from "./index-sections/LeadCaptureSection";
import { Footer } from "./index-sections/Footer";
import { useEffect, useState } from "react";

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

