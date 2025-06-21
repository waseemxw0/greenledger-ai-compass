import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Goal, ArrowUp, Plus, Target, TrendingUp, Lightbulb } from "lucide-react";
import { IvyAssistant } from "@/components/IvyAssistant";

const GoalsRoadmap = () => {
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
          Set Your First Goal
        </Button>
      </div>

      <Tabs defaultValue="goals" className="mb-6">
        <TabsList className="mb-4 w-full grid grid-cols-1 sm:grid-cols-3 h-auto">
          <TabsTrigger value="goals" className="text-xs sm:text-sm py-2">Sustainability Goals</TabsTrigger>
          <TabsTrigger value="actions" className="text-xs sm:text-sm py-2">Recommended Actions</TabsTrigger>
          <TabsTrigger value="offsets" className="text-xs sm:text-sm py-2">Carbon Offsets</TabsTrigger>
        </TabsList>
        
        <TabsContent value="goals" className="m-0">
          <div className="text-center py-16">
            <Target className="h-20 w-20 text-muted-foreground/30 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-3">No Sustainability Goals Set</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
              Start your sustainability journey by setting your first goal. Whether it's carbon neutrality, 
              waste reduction, or renewable energy adoption, we'll help you create a roadmap to success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
              <Card className="border-dashed border-2 hover:border-emerald/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-6 w-6 text-emerald" />
                  </div>
                  <h3 className="font-semibold mb-2">Carbon Neutral</h3>
                  <p className="text-sm text-muted-foreground">Eliminate or offset all carbon emissions</p>
                </CardContent>
              </Card>
              
              <Card className="border-dashed border-2 hover:border-blue-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Goal className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Zero Waste</h3>
                  <p className="text-sm text-muted-foreground">Achieve zero waste operations</p>
                </CardContent>
              </Card>
              
              <Card className="border-dashed border-2 hover:border-purple-500/50 transition-colors">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Renewable Energy</h3>
                  <p className="text-sm text-muted-foreground">Switch to 100% renewable energy</p>
                </CardContent>
              </Card>
            </div>
            
            <Button className="bg-emerald hover:bg-emerald-dark text-lg px-8 py-3">
              <Plus className="mr-2 h-5 w-5" />
              Create Your First Goal
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="actions" className="m-0">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Actions</CardTitle>
              <CardDescription>AI-suggested sustainability initiatives based on your industry</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="text-center p-12 lg:p-16">
                <Lightbulb className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">No Recommendations Yet</h3>
                <p className="text-muted-foreground max-w-md mx-auto mb-6 text-sm lg:text-base">
                  Set your first sustainability goal to receive personalized action recommendations
                </p>
                <Button className="bg-emerald hover:bg-emerald-dark">
                  <Plus className="mr-2 h-4 w-4" />
                  Set a Goal to Get Started
                </Button>
              </div>
            </CardContent>
          </Card>
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