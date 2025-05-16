
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ESGScoreCard } from "@/components/dashboard/ESGScoreCard";
import { EmissionsChart } from "@/components/dashboard/EmissionsChart";
import { TasksList } from "@/components/dashboard/TasksList";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { DeadlinesCard } from "@/components/dashboard/DeadlinesCard";
import { PricingSection } from "@/components/dashboard/PricingSection";
import { IvyAssistant } from "@/components/IvyAssistant";
import { FileText } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">ESG Dashboard</h1>
          <p className="text-muted-foreground">
            Track your environmental impact and reporting progress
          </p>
        </div>
        <Button className="bg-emerald hover:bg-emerald-dark">
          <FileText className="mr-2 h-4 w-4" />
          Start New Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <ESGScoreCard />
        <TasksList />
        <AlertsCard />
        <DeadlinesCard />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <EmissionsChart />
      </div>
      
      <PricingSection />

      <IvyAssistant />
    </Layout>
  );
};

export default Index;
