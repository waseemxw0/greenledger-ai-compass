
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

export function EmissionsChart() {
  const [animatedHeights, setAnimatedHeights] = useState({
    scope1: 0,
    scope2: 0,
    scope3: 0,
    total: 0
  });

  const finalHeights = {
    scope1: 30,
    scope2: 60,
    scope3: 85,
    total: 70
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedHeights(prev => ({
        scope1: Math.min(prev.scope1 + 2, finalHeights.scope1),
        scope2: Math.min(prev.scope2 + 2, finalHeights.scope2),
        scope3: Math.min(prev.scope3 + 2, finalHeights.scope3),
        total: Math.min(prev.total + 2, finalHeights.total)
      }));
    }, 30);
    
    return () => clearTimeout(timer);
  }, [animatedHeights]);

  return (
    <Card className="shadow-soft border-none glass-effect transition-all duration-300 hover:shadow-xl">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CardTitle className="text-xl font-bold bg-gradient-to-br from-emerald to-emerald-light bg-clip-text text-transparent">Emissions by Scope</CardTitle>
        <Tabs defaultValue="quarter" className="w-full sm:w-[300px]">
          <TabsList className="grid grid-cols-3 h-9 w-full">
            <TabsTrigger value="month" className="text-xs">Month</TabsTrigger>
            <TabsTrigger value="quarter" className="text-xs">Quarter</TabsTrigger>
            <TabsTrigger value="year" className="text-xs">Year</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="pl-0 pr-0 sm:pl-2">
        <div className="h-[280px] flex items-end justify-center sm:justify-between p-2 sm:p-4 pb-0 gap-1 sm:gap-0 overflow-x-auto">
          <div className="flex flex-col items-center min-w-[70px] sm:min-w-0 sm:w-auto">
            <div className="w-16 sm:w-28 h-[180px] relative bg-gray-100/40 rounded-t-xl overflow-hidden">
              <div 
                className="absolute bottom-0 w-full transition-all duration-300 ease-out bg-gradient-to-t from-emerald-light to-emerald/80"
                style={{ height: `${animatedHeights.scope1}%` }}
              ></div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium">Scope 1</p>
              <p className="text-base sm:text-lg font-bold">14.2 <span className="text-xs font-normal text-muted-foreground">tCO₂e</span></p>
            </div>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px] sm:min-w-0 sm:w-auto">
            <div className="w-16 sm:w-28 h-[180px] relative bg-gray-100/40 rounded-t-xl overflow-hidden">
              <div 
                className="absolute bottom-0 w-full transition-all duration-300 ease-out bg-gradient-to-t from-emerald to-emerald/80"
                style={{ height: `${animatedHeights.scope2}%` }}
              ></div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium">Scope 2</p>
              <p className="text-base sm:text-lg font-bold">38.4 <span className="text-xs font-normal text-muted-foreground">tCO₂e</span></p>
            </div>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px] sm:min-w-0 sm:w-auto">
            <div className="w-16 sm:w-28 h-[180px] relative bg-gray-100/40 rounded-t-xl overflow-hidden">
              <div 
                className="absolute bottom-0 w-full transition-all duration-300 ease-out bg-gradient-to-t from-emerald-dark to-emerald-dark/80"
                style={{ height: `${animatedHeights.scope3}%` }}
              ></div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium">Scope 3</p>
              <p className="text-base sm:text-lg font-bold">65.8 <span className="text-xs font-normal text-muted-foreground">tCO₂e</span></p>
            </div>
          </div>
          
          <div className="flex flex-col items-center min-w-[70px] sm:min-w-0 sm:w-auto">
            <div className="w-16 sm:w-28 h-[180px] relative bg-gray-100/40 rounded-t-xl overflow-hidden">
              <div 
                className="absolute bottom-0 w-full transition-all duration-300 ease-out bg-gradient-to-b from-charcoal-light to-charcoal"
                style={{ height: `${animatedHeights.total}%` }}
              ></div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-medium">Total</p>
              <p className="text-base sm:text-lg font-bold">118.4 <span className="text-xs font-normal text-muted-foreground">tCO₂e</span></p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
