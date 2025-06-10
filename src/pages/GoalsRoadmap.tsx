
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Goal, ArrowUp, Plus, Check } from "lucide-react";
import { IvyAssistant } from "@/components/IvyAssistant";

const GoalsRoadmap = () => {
  // Mock data for goals
  const sustainabilityGoals = [
    {
      id: 1,
      title: "Carbon Neutral by 2030",
      description: "Eliminate or offset all carbon emissions by 2030",
      progress: 28,
      targetYear: 2030,
      milestones: [
        { id: 1, title: "Baseline assessment completed", completed: true },
        { id: 2, title: "Switch to renewable energy", completed: true },
        { id: 3, title: "Optimize logistics routes", completed: false },
        { id: 4, title: "Implement energy efficiency program", completed: false },
        { id: 5, title: "Begin carbon offsets", completed: false }
      ]
    },
    {
      id: 2,
      title: "Zero Waste Operations",
      description: "Achieve zero waste across all company operations",
      progress: 45,
      targetYear: 2028,
      milestones: [
        { id: 1, title: "Waste audit completed", completed: true },
        { id: 2, title: "Implement recycling program", completed: true },
        { id: 3, title: "Eliminate single-use plastics", completed: true },
        { id: 4, title: "Composting program launch", completed: false },
        { id: 5, title: "Supplier packaging requirements", completed: false }
      ]
    },
    {
      id: 3,
      title: "Sustainable Supply Chain",
      description: "100% environmentally responsible suppliers",
      progress: 15,
      targetYear: 2029,
      milestones: [
        { id: 1, title: "Supplier ESG assessment launched", completed: true },
        { id: 2, title: "Top suppliers engaged", completed: false },
        { id: 3, title: "New supplier policy created", completed: false },
        { id: 4, title: "Supplier scorecard implementation", completed: false },
        { id: 5, title: "Annual supplier ESG awards", completed: false }
      ]
    }
  ];
  
  // Mock suggested actions
  const suggestedActions = [
    {
      id: 1,
      title: "Switch to LED Lighting",
      impact: "HIGH",
      effort: "LOW",
      description: "Replace all office lighting with energy-efficient LED bulbs",
      estimatedSavings: "3.2 tCO₂e yearly",
      estimatedCost: "$900 - $1,200"
    },
    {
      id: 2,
      title: "Remote Work Policy",
      impact: "MEDIUM",
      effort: "MEDIUM",
      description: "Implement 2 days remote work per week to reduce commuting emissions",
      estimatedSavings: "8.5 tCO₂e yearly",
      estimatedCost: "$0"
    },
    {
      id: 3,
      title: "Solar Panel Installation",
      impact: "HIGH",
      effort: "HIGH",
      description: "Install rooftop solar panels for office building",
      estimatedSavings: "21.8 tCO₂e yearly",
      estimatedCost: "$25,000 - $35,000"
    }
  ];

  return (
    <Layout>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Goals & Roadmap</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Track and manage your sustainability goals and action plan
          </p>
        </div>
        <Button className="bg-emerald hover:bg-emerald-dark w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          New Goal
        </Button>
      </div>

      <Tabs defaultValue="goals" className="mb-6">
        <TabsList className="mb-4 w-full grid grid-cols-1 sm:grid-cols-3 h-auto">
          <TabsTrigger value="goals" className="text-xs sm:text-sm py-2">Sustainability Goals</TabsTrigger>
          <TabsTrigger value="actions" className="text-xs sm:text-sm py-2">Recommended Actions</TabsTrigger>
          <TabsTrigger value="offsets" className="text-xs sm:text-sm py-2">Carbon Offsets</TabsTrigger>
        </TabsList>
        
        <TabsContent value="goals" className="m-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
            {sustainabilityGoals.map((goal) => (
              <Card key={goal.id} className="h-fit">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-lg leading-tight">{goal.title}</CardTitle>
                    <div className="text-sm font-semibold text-emerald px-2 py-0.5 bg-emerald/10 rounded-full flex-shrink-0">
                      {goal.targetYear}
                    </div>
                  </div>
                  <CardDescription className="text-sm">{goal.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-0">
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium mb-2">Milestones</h4>
                    {goal.milestones.map((milestone) => (
                      <div key={milestone.id} className="flex items-start gap-2">
                        <div className={`rounded-full p-0.5 mt-0.5 flex-shrink-0 ${milestone.completed ? 'bg-emerald text-white' : 'border'}`}>
                          {milestone.completed ? (
                            <Check className="h-3 w-3" />
                          ) : (
                            <div className="h-3 w-3" />
                          )}
                        </div>
                        <span className={`text-sm leading-tight ${milestone.completed ? 'line-through text-muted-foreground' : ''}`}>
                          {milestone.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button variant="outline" className="w-full text-sm">
                    Update Progress
                  </Button>
                </CardFooter>
              </Card>
            ))}
            
            <Card className="border-dashed h-fit">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">Add New Goal</CardTitle>
                <CardDescription className="text-sm">Set a new sustainability target for your organization</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center py-6">
                <div className="rounded-full bg-muted p-3 mb-3">
                  <Goal className="h-6 w-6 text-emerald" />
                </div>
                <p className="text-center text-muted-foreground text-sm mb-4">
                  Create a new goal to track your organization's sustainability journey
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-emerald hover:bg-emerald-dark text-sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Set New Goal
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="actions" className="m-0">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Action Filters</CardTitle>
                  <CardDescription className="text-sm">Filter recommended actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Impact Level</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="text-xs h-8" size="sm">All</Button>
                      <Button variant="outline" className="text-xs h-8 bg-green-50" size="sm">High Impact</Button>
                      <Button variant="outline" className="text-xs h-8" size="sm">Medium Impact</Button>
                      <Button variant="outline" className="text-xs h-8" size="sm">Low Impact</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Implementation Effort</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="text-xs h-8" size="sm">All</Button>
                      <Button variant="outline" className="text-xs h-8 bg-green-50" size="sm">Low Effort</Button>
                      <Button variant="outline" className="text-xs h-8" size="sm">Medium Effort</Button>
                      <Button variant="outline" className="text-xs h-8" size="sm">High Effort</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Emission Scope</h4>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" className="text-xs h-8" size="sm">All Scopes</Button>
                      <Button variant="outline" className="text-xs h-8" size="sm">Scope 1</Button>
                      <Button variant="outline" className="text-xs h-8" size="sm">Scope 2</Button>
                      <Button variant="outline" className="text-xs h-8" size="sm">Scope 3</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="lg:col-span-3">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Recommended Actions</CardTitle>
                  <CardDescription className="text-sm">AI-suggested sustainability initiatives based on your data</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {suggestedActions.map((action) => (
                      <div key={action.id} className="p-4 hover:bg-muted/20">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-2">
                          <h3 className="font-medium text-base">{action.title}</h3>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              action.impact === "HIGH" ? "bg-green-100 text-green-800" :
                              action.impact === "MEDIUM" ? "bg-yellow-100 text-yellow-800" :
                              "bg-blue-100 text-blue-800"
                            }`}>
                              {action.impact} IMPACT
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              action.effort === "LOW" ? "bg-green-100 text-green-800" :
                              action.effort === "MEDIUM" ? "bg-yellow-100 text-yellow-800" :
                              "bg-red-100 text-red-800"
                            }`}>
                              {action.effort} EFFORT
                            </span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mb-3 text-sm leading-relaxed">{action.description}</p>
                        <div className="flex flex-col sm:flex-row justify-between text-sm gap-2 mb-3">
                          <span>Est. Savings: {action.estimatedSavings}</span>
                          <span>Est. Cost: {action.estimatedCost}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row justify-end gap-2">
                          <Button variant="outline" size="sm" className="text-xs">Details</Button>
                          <Button size="sm" className="text-xs bg-emerald hover:bg-emerald-dark">Add to Plan</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="offsets" className="m-0">
          <Card>
            <CardHeader>
              <CardTitle>Carbon Offset Projects</CardTitle>
              <CardDescription>Browse verified carbon offset projects to neutralize your emissions</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-center p-12 lg:p-16">
                <Goal className="h-12 w-12 lg:h-16 lg:w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">Carbon Offset Marketplace</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6 text-sm lg:text-base">
                  Connect with verified carbon offset projects to balance your unavoidable emissions
                </p>
                <Button className="bg-emerald hover:bg-emerald-dark">
                  <ArrowUp className="mr-2 h-4 w-4" />
                  Upgrade to Compliance+ Plan
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <IvyAssistant />
    </Layout>
  );
};

export default GoalsRoadmap;
