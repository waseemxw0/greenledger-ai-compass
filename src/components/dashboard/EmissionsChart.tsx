
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function EmissionsChart() {
  return (
    <Card className="col-span-2">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Emissions by Scope</CardTitle>
        <Tabs defaultValue="quarter">
          <TabsList>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="quarter">Quarter</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="pl-2">
        <div className="h-[240px] flex items-center justify-center p-4">
          <div className="flex justify-between w-full">
            <div className="flex flex-col items-center">
              <div className="w-24 h-[180px] relative bg-gray-100 rounded-t-md overflow-hidden">
                <div className="absolute bottom-0 w-full h-[30%] bg-emerald-light"></div>
              </div>
              <p className="text-sm mt-2 font-medium">Scope 1</p>
              <p className="text-xs text-muted-foreground">14.2 tCO₂e</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-[180px] relative bg-gray-100 rounded-t-md overflow-hidden">
                <div className="absolute bottom-0 w-full h-[60%] bg-emerald"></div>
              </div>
              <p className="text-sm mt-2 font-medium">Scope 2</p>
              <p className="text-xs text-muted-foreground">38.4 tCO₂e</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-[180px] relative bg-gray-100 rounded-t-md overflow-hidden">
                <div className="absolute bottom-0 w-full h-[85%] bg-emerald-dark"></div>
              </div>
              <p className="text-sm mt-2 font-medium">Scope 3</p>
              <p className="text-xs text-muted-foreground">65.8 tCO₂e</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-24 h-[180px] relative bg-gray-100 rounded-t-md overflow-hidden">
                <div className="absolute bottom-0 w-full h-[70%] bg-charcoal"></div>
              </div>
              <p className="text-sm mt-2 font-medium">Total</p>
              <p className="text-xs text-muted-foreground">118.4 tCO₂e</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
