
import { Layout } from "@/components/layout/Layout";

export default function FreeESGTemplate() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto py-16 flex flex-col items-center text-center gap-4">
        <h1 className="text-3xl font-bold mb-3">Free ESG Audit Template</h1>
        <p className="text-lg text-muted-foreground mb-4">
          Download your free ESG audit template and get started on your compliance journey.
        </p>
        {/* You can add a download link or form here */}
      </div>
    </Layout>
  );
}
