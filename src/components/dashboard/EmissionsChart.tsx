
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3 } from "lucide-react";

export function EmissionsChart() {
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
        <div className="h-[280px] flex flex-col items-center justify-center text-muted-foreground">
          <BarChart3 className="h-16 w-16 mb-4 text-gray-300" />
          <p className="text-center text-sm">No emissions data available</p>
          <p className="text-center text-xs mt-1">Start tracking your carbon footprint</p>
        </div>
      </CardContent>
    </Card>
  );
}
