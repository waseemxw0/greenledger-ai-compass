import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ESGScoreCard } from "@/components/dashboard/ESGScoreCard";
import { EmissionsChart } from "@/components/dashboard/EmissionsChart";
import { TasksList } from "@/components/dashboard/TasksList";
import { AlertsCard } from "@/components/dashboard/AlertsCard";
import { DeadlinesCard } from "@/components/dashboard/DeadlinesCard";
import { PricingSection } from "@/components/dashboard/PricingSection";
import { IvyAssistant } from "@/components/IvyAssistant";
import { FileText, TrendingUp, AreaChart, Award, ChevronRight, Linkedin } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/your-link"; // Replace with your actual Calendly/Typeform/checkout url

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full py-12 md:py-20 flex flex-col items-center justify-center text-center bg-gradient-to-b from-emerald/10 via-transparent to-transparent rounded-xl mb-6 relative overflow-hidden">
      <h1 className="text-3xl md:text-5xl font-extrabold max-w-3xl mb-4 bg-gradient-to-r from-emerald to-emerald-light bg-clip-text text-transparent drop-shadow-lg">
        Automated ESG Compliance &amp; Sustainability Reports — In Minutes, Not Months
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-6 max-w-xl mx-auto">
        Focus on your business, not on spreadsheets.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <Button
          className="bg-emerald hover:bg-emerald-dark shadow-glow px-8 py-4 text-base font-semibold rounded-xl animate-bounce-subtle"
          onClick={() => window.open(CALENDLY_URL, "_blank", "noopener,noreferrer")}
        >
          Start Free
        </Button>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-emerald"
          onClick={() => navigate("/reports")}
        >
          <FileText className="h-5 w-5" />
          Get ESG Report
        </Button>
      </div>
    </section>
  );
}

function PowerBenefits() {
  const benefits = [
    "Save 100+ hours on manual ESG reporting",
    "Impress investors with audit-ready dashboards",
    "Stay compliant with evolving ESG regulations",
  ];
  return (
    <section className="mb-10 flex flex-col md:flex-row justify-center items-start gap-6 w-full">
      <ul className="flex-1 flex flex-col gap-4">
        {benefits.map((text, i) => (
          <li key={i} className="flex items-center gap-3 text-base md:text-lg bg-emerald/5 rounded-lg px-4 py-3 shadow-xs">
            <span className="inline-block w-3 h-3 bg-emerald rounded-full mr-2" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="mb-12 flex flex-col items-center">
      <div className="text-muted-foreground text-base md:text-lg mb-3">
        Used by startups, manufacturers, and consultants
      </div>
      <div className="flex gap-6 md:gap-10">
        {/* Placeholder logos/LinkedIn (replace as you get real customers!) */}
        <div className="rounded bg-white/80 shadow p-2 flex items-center justify-center min-w-[60px] min-h-[40px]">
          <Linkedin className="h-8 w-8 text-blue-600" />
        </div>
        <div className="rounded bg-white/80 shadow p-2 flex items-center justify-center min-w-[60px] min-h-[40px]">
          <svg width="56" height="20">
            <rect width="56" height="20" rx="6" fill="#ECFDF5"/>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#065F46">LOGO</text>
          </svg>
        </div>
        <div className="rounded bg-white/80 shadow p-2 flex items-center justify-center min-w-[60px] min-h-[40px]">
          <svg width="56" height="20">
            <rect width="56" height="20" rx="6" fill="#ECFDF5"/>
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="#065F46">LOGO</text>
          </svg>
        </div>
      </div>
    </section>
  );
}

const Index = () => {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Layout>
      <HeroSection />
      <PowerBenefits />
      <TrustSection />
      
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
                <span className="text-xl sm:text-2xl font-bold">12.6%</span>
                <span className="text-emerald text-xs sm:text-sm flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> 
                  decrease
                </span>
              </div>
              <div className="mt-4 h-16 sm:h-24 chart-container">
                <div className="bg-gradient-to-t from-emerald/10 to-transparent h-full w-full rounded-md flex items-end">
                  {Array(12).fill(null).map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 h-full flex items-end px-[1px]"
                    >
                      <div 
                        className={`w-full bg-emerald/70 rounded-t-sm ${i % 4 === 0 ? 'animate-bounce-subtle' : ''}`}
                        style={{ 
                          height: `${20 + Math.sin(i/1.5) * 40 + Math.random() * 15}%`,
                          animationDelay: `${i * 0.1}s`
                        }}
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
                <span className="text-xl sm:text-2xl font-bold gradient-text">Top 15%</span>
                <span className="text-blue-500 text-xs sm:text-sm flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L12 8L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  +3 places
                </span>
              </div>
              <div className="mt-4 flex gap-1.5 h-6 sm:h-8">
                {[...Array(10)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-sm transition-all duration-500 ${
                      i < 2 ? 'bg-gradient-to-t from-blue-500 to-blue-400' : 'bg-gray-200 dark:bg-gray-700'
                    } ${i === 1 ? 'animate-scale-subtle' : ''}`}
                    style={{ 
                      height: `${100 - (i * 8)}%`,
                      boxShadow: i < 2 ? '0 3px 10px rgba(59, 130, 246, 0.3)' : 'none'
                    }}
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
