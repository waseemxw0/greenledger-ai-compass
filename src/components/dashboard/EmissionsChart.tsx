
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart3 } from "lucide-react";
import { useEmissions } from "@/hooks/useEmissions";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import { useMemo, useState } from "react";
import { format } from "date-fns";

const scopeConfig = {
  1: { label: "Scope 1", color: "#22c55e" },
  2: { label: "Scope 2", color: "#3b82f6" },
  3: { label: "Scope 3", color: "#a855f7" },
};

function buildChartData(perScopeSeries: Record<number, { scope: number; period_date: string; value: number; }[]>) {
  // Find all unique months
  const allDates = new Set<string>();
  Object.values(perScopeSeries).forEach(series =>
    series.forEach(item => allDates.add(item.period_date))
  );
  // Sort dates ascending
  const sortedDates = Array.from(allDates).sort();
  // Build chart data
  return sortedDates.map(date => {
    const formatted = format(new Date(date), "MMM yyyy");
    return {
      name: formatted,
      scope1: perScopeSeries[1]?.find(x => x.period_date === date)?.value ?? 0,
      scope2: perScopeSeries[2]?.find(x => x.period_date === date)?.value ?? 0,
      scope3: perScopeSeries[3]?.find(x => x.period_date === date)?.value ?? 0,
    };
  });
}

export function EmissionsChart(): JSX.Element {
  const { data, isLoading } = useEmissions();
  const [tab, setTab] = useState("quarter");

  const chartData = useMemo(() => {
    if (!data?.perScopeSeries) return [];
    return buildChartData(data.perScopeSeries);
  }, [data]);

  // If loading or empty, show placeholder
  const hasData =
    chartData.length > 0 &&
    (chartData.some(d => d.scope1 > 0) ||
      chartData.some(d => d.scope2 > 0) ||
      chartData.some(d => d.scope3 > 0));

  return (
    <Card className="shadow-soft border-none glass-effect transition-all duration-300 hover:shadow-xl">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <CardTitle className="text-xl font-bold bg-gradient-to-br from-emerald to-emerald-light bg-clip-text text-transparent">Emissions by Scope</CardTitle>
        <Tabs value={tab} onValueChange={setTab} className="w-full sm:w-[300px]">
          <TabsList className="grid grid-cols-3 h-9 w-full">
            <TabsTrigger value="month" className="text-xs">Month</TabsTrigger>
            <TabsTrigger value="quarter" className="text-xs">Quarter</TabsTrigger>
            <TabsTrigger value="year" className="text-xs">Year</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="pl-0 pr-0 sm:pl-2">
        {isLoading || !hasData ? (
          <div className="h-[280px] flex flex-col items-center justify-center text-muted-foreground">
            <BarChart3 className="h-16 w-16 mb-4 text-gray-300" />
            <p className="text-center text-sm">No emissions data available</p>
            <p className="text-center text-xs mt-1">Start tracking your carbon footprint</p>
          </div>
        ) : (
          <div className="h-[280px] w-full flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="scope1" name={scopeConfig[1].label} fill={scopeConfig[1].color} />
                <Bar dataKey="scope2" name={scopeConfig[2].label} fill={scopeConfig[2].color} />
                <Bar dataKey="scope3" name={scopeConfig[3].label} fill={scopeConfig[3].color} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
