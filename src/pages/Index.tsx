
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ESGScoreCard } from "@/components/dashboard/ESGScoreCard";
import { EmissionsChart } from "@/components/dashboard/EmissionsChart";
import { TasksList } from "@/components/dashboard/TasksList";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { DeadlinesCard } from "@/components/dashboard/DeadlinesCard";
import { PricingSection } from "@/components/dashboard/PricingSection";
import { IvyAssistant } from "@/components/IvyAssistant";
import { FileText, TrendingUp, AreaChart, Award, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FeatureBreakdownSection } from "./index-sections/FeatureBreakdownSection";
import { WhoItsForSection } from "./index-sections/WhoItsForSection";
import { DemoVisualSection } from "./index-sections/DemoVisualSection";
import { FeaturesSection } from "./index-sections/FeaturesSection";

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout>
      {/* New: Features + infographic + How it works */}
      <FeaturesSection />

      {/* New: Feature Breakdown section */}
      <FeatureBreakdownSection />
      {/* New: Who It's For section */}
      <WhoItsForSection />
      {/* New: Product Demo Visuals */}
      <DemoVisualSection />

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 sm:mb-8 gap-4 relative">
        <div className="w-full md:w-auto">
          <div className="animate-in fade-in duration-500">
            <span className="inline-block px-3 py-1 bg-emerald/10 text-emerald rounded-full text-xs font-medium mb-2">
              Dashboard Overview
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent">
              ESG Dashboard
              <span className="animate-pulse ml-1">·</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-md">
              Track your environmental impact and reporting progress with our comprehensive analytics
            </p>
          </div>
        </div>
        <Button
          className="w-full md:w-auto bg-emerald hover:bg-emerald-dark shadow-soft transition-all duration-300 hover:shadow-glow group relative overflow-hidden"
          onClick={() => navigate("/reports")}
        >
          <span className="absolute top-0 left-0 w-full h-full bg-gradient-shimmer bg-shimmer animate-shimmer"></span>
          <FileText className="mr-2 h-4 w-4 relative z-10" />
          <span className="relative z-10">Start New Report</span>
          <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <div 
          className={`transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
          style={{ transitionDelay: "100ms" }}
        >
          <ESGScoreCard />
        </div>
        <div 
          className={`transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
          style={{ transitionDelay: "200ms" }}
        >
          <TasksList />
        </div>
        <div 
          className={`transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
          style={{ transitionDelay: "300ms" }}
        >
          <AlertsCard />
        </div>
        <div 
          className={`transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`} 
          style={{ transitionDelay: "400ms" }}
        >
          <DeadlinesCard />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        <div 
          className={`lg:col-span-2 transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "500ms" }}
        >
          <EmissionsChart />
        </div>
        
        <div 
          className={`transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: "600ms" }}
        >
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="glass-card rounded-lg p-4 sm:p-6 interactive-card shadow-soft">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-emerald/20 to-emerald/5 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-inner">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-emerald" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Carbon Reduction</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">YoY comparison</p>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-xl sm:text-2xl font-bold">0%</span>
                <span className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
                  No data yet
                </span>
              </div>
              <div className="mt-4 h-16 sm:h-24 chart-container">
                <div className="bg-gradient-to-t from-gray-100 to-transparent h-full w-full rounded-md flex items-end">
                  {Array(12).fill(null).map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 h-full flex items-end px-[1px]"
                    >
                      <div 
                        className="w-full bg-gray-200 rounded-t-sm"
                        style={{ height: "5%" }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-lg p-4 sm:p-6 interactive-card shadow-soft">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-500/5 rounded-full p-2 sm:p-3 mr-3 sm:mr-4 shadow-inner">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-base sm:text-lg">Industry Ranking</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">In your sector</p>
                </div>
              </div>
              <div className="flex items-end gap-2">
                <span className="text-xl sm:text-2xl font-bold gradient-text">N/A</span>
                <span className="text-muted-foreground text-xs sm:text-sm flex items-center gap-1">
                  No data yet
                </span>
              </div>
              <div className="mt-4 flex gap-1.5 h-6 sm:h-8">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className="flex-1 rounded-sm bg-gray-200 dark:bg-gray-700"
                    style={{ height: "20%" }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div 
        className={`transition-all duration-500 ${mounted ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
        style={{ transitionDelay: "700ms" }}
      >
        <PricingSection />
      </div>

      <IvyAssistant />
    </Layout>
  );
};

export default Index;
