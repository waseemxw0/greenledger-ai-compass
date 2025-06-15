
import { Layout } from "@/components/layout/Layout";

export default function ESGReadinessSurvey() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto py-16 flex flex-col items-center text-center gap-4">
        <h1 className="text-3xl font-bold mb-3">ESG Readiness Survey</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Take our quick survey to find out how ESG-ready your company is.
        </p>
        {/* Typeform embed or native survey form can go here */}
      </div>
    </Layout>
  );
}
