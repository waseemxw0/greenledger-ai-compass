
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ESGScoreCard } from "@/components/dashboard/ESGScoreCard";
import { EmissionsChart } from "@/components/dashboard/EmissionsChart";
import { TasksList } from "@/components/dashboard/TasksList";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { DeadlinesCard } from "@/components/dashboard/DeadlinesCard";
import { PricingSection } from "@/components/dashboard/PricingSection";
import { IvyAssistant } from "@/components/IvyAssistant";
import { FileText, TrendingUp, AreaChart, Award } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent">
            ESG Dashboard
          </h1>
          <p className="text-muted-foreground mt-1">
            Track your environmental impact and reporting progress
          </p>
        </div>
        <Button className="bg-emerald hover:bg-emerald-dark shadow-soft transition-all duration-300 hover:shadow-glow">
          <FileText className="mr-2 h-4 w-4" />
          Start New Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <ESGScoreCard />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <TasksList />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <AlertsCard />
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <DeadlinesCard />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="md:col-span-2 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <EmissionsChart />
        </div>
        
        <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="grid grid-cols-1 gap-6">
            <div className="glass-effect rounded-lg p-6 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="bg-emerald/10 rounded-full p-3 mr-4">
                  <TrendingUp className="h-6 w-6 text-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Carbon Reduction</h3>
                  <p className="text-sm text-muted-foreground">YoY comparison</p>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">12.6%</span>
                <span className="text-emerald text-sm">↓ decrease</span>
              </div>
              <div className="mt-4 h-24 chart-container">
                <div className="bg-gradient-to-t from-emerald/10 to-transparent h-full w-full rounded-md"></div>
              </div>
            </div>
            
            <div className="glass-effect rounded-lg p-6 shadow-soft">
              <div className="flex items-center mb-4">
                <div className="bg-blue-500/10 rounded-full p-3 mr-4">
                  <Award className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Industry Ranking</h3>
                  <p className="text-sm text-muted-foreground">In your sector</p>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold">Top 15%</span>
                <span className="text-blue-500 text-sm">↑ +3 places</span>
              </div>
              <div className="mt-4 flex gap-1 h-8">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-sm ${i < 2 ? 'bg-emerald' : 'bg-gray-200'}`}
                    style={{ height: `${100 - (i * 8)}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
        <PricingSection />
      </div>

      <IvyAssistant />
    </Layout>
  );
};

export default Index;
