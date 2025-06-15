
import { Layout } from "@/components/layout/Layout";

export default function BookDemo() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto py-16 flex flex-col items-center text-center gap-4">
        <h1 className="text-3xl font-bold mb-3">Book a 15-min Walkthrough</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Schedule a personalized demo with our ESG experts and discover how GreenLedger AI can help your company achieve its goals.
        </p>
        {/* Optionally embed Calendly here in the future */}
      </div>
    </Layout>
  );
}
