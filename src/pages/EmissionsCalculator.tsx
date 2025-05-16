
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, BarChart3, FileText, ArrowUp } from "lucide-react";
import { IvyAssistant } from "@/components/IvyAssistant";

const EmissionsCalculator = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const totalSteps = 3;

  const handleNextStep = () => {
    if (activeStep < totalSteps) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Emissions Calculator</h1>
          <p className="text-muted-foreground">
            Calculate your emissions across Scope 1, 2, and 3
          </p>
        </div>
        <Button className="bg-emerald hover:bg-emerald-dark">Save Progress</Button>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium">Step {activeStep} of {totalSteps}</span>
          <span className="text-sm font-medium">{Math.round((activeStep / totalSteps) * 100)}% complete</span>
        </div>
        <Progress value={(activeStep / totalSteps) * 100} className="h-2" />
      </div>

      <Tabs defaultValue={`scope-${activeStep}`} value={`scope-${activeStep}`} className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="scope-1" disabled={activeStep !== 1}>Scope 1</TabsTrigger>
          <TabsTrigger value="scope-2" disabled={activeStep !== 2}>Scope 2</TabsTrigger>
          <TabsTrigger value="scope-3" disabled={activeStep !== 3}>Scope 3</TabsTrigger>
        </TabsList>

        <TabsContent value="scope-1">
          <Card>
            <CardHeader>
              <CardTitle>Scope 1: Direct Emissions</CardTitle>
              <CardDescription>
                Calculate emissions from sources owned or controlled by your company
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="company-vehicles">Company Vehicles (gallons)</Label>
                  <Input id="company-vehicles" placeholder="Enter fuel consumption" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fuel-type">Fuel Type</Label>
                  <Select>
                    <SelectTrigger id="fuel-type">
                      <SelectValue placeholder="Select fuel type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="gasoline">Gasoline</SelectItem>
                      <SelectItem value="diesel">Diesel</SelectItem>
                      <SelectItem value="electric">Electric</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="natural-gas">Natural Gas (therms)</Label>
                  <Input id="natural-gas" placeholder="Enter consumption" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="region">Region</Label>
                  <Select>
                    <SelectTrigger id="region">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="northeast">Northeast US</SelectItem>
                      <SelectItem value="midwest">Midwest US</SelectItem>
                      <SelectItem value="south">South US</SelectItem>
                      <SelectItem value="west">West US</SelectItem>
                      <SelectItem value="eu">European Union</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Upload Relevant Documents</Label>
                <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg">
                  <div className="space-y-2 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer text-emerald font-medium">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleNextStep} className="bg-emerald hover:bg-emerald-dark">
                  Next Step
                  <ArrowUp className="ml-2 h-4 w-4 rotate-90" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scope-2">
          <Card>
            <CardHeader>
              <CardTitle>Scope 2: Indirect Emissions</CardTitle>
              <CardDescription>
                Calculate emissions from purchased electricity, steam, heating, and cooling
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="electricity">Electricity (kWh)</Label>
                  <Input id="electricity" placeholder="Enter consumption" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="energy-source">Energy Source</Label>
                  <Select>
                    <SelectTrigger id="energy-source">
                      <SelectValue placeholder="Select energy source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="grid">Grid Electricity</SelectItem>
                      <SelectItem value="renewable">Renewable Energy</SelectItem>
                      <SelectItem value="mixed">Mixed Sources</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="heating">Heating & Cooling (therms)</Label>
                  <Input id="heating" placeholder="Enter consumption" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="region-scope2">Region</Label>
                  <Select>
                    <SelectTrigger id="region-scope2">
                      <SelectValue placeholder="Select region" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="northeast">Northeast US</SelectItem>
                      <SelectItem value="midwest">Midwest US</SelectItem>
                      <SelectItem value="south">South US</SelectItem>
                      <SelectItem value="west">West US</SelectItem>
                      <SelectItem value="eu">European Union</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label>Upload Utility Bills</Label>
                <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg">
                  <div className="space-y-2 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="text-sm text-gray-600">
                      <label htmlFor="bill-upload" className="relative cursor-pointer text-emerald font-medium">
                        <span>Upload bills</span>
                        <input id="bill-upload" name="bill-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, PNG, JPG up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handlePrevStep}>
                  Previous
                </Button>
                <Button onClick={handleNextStep} className="bg-emerald hover:bg-emerald-dark">
                  Next Step
                  <ArrowUp className="ml-2 h-4 w-4 rotate-90" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scope-3">
          <Card>
            <CardHeader>
              <CardTitle>Scope 3: Value Chain Emissions</CardTitle>
              <CardDescription>
                Calculate emissions from your entire value chain, including suppliers and customers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="business-travel">Business Travel (miles)</Label>
                  <Input id="business-travel" placeholder="Enter miles traveled" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="travel-type">Travel Type</Label>
                  <Select>
                    <SelectTrigger id="travel-type">
                      <SelectValue placeholder="Select travel type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="air">Air Travel</SelectItem>
                      <SelectItem value="car">Car Travel</SelectItem>
                      <SelectItem value="rail">Rail Travel</SelectItem>
                      <SelectItem value="public">Public Transport</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="employee-commuting">Employee Commuting (miles)</Label>
                  <Input id="employee-commuting" placeholder="Enter miles commuted" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="commute-method">Commute Method</Label>
                  <Select>
                    <SelectTrigger id="commute-method">
                      <SelectValue placeholder="Select commute method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="car">Car</SelectItem>
                      <SelectItem value="public">Public Transport</SelectItem>
                      <SelectItem value="cycling">Cycling/Walking</SelectItem>
                      <SelectItem value="mixed">Mixed Methods</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="purchased-goods">Purchased Goods & Services ($)</Label>
                  <Input id="purchased-goods" placeholder="Enter annual spend" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="waste-generated">Waste Generated (tons)</Label>
                  <Input id="waste-generated" placeholder="Enter waste generated" />
                </div>
              </div>

              <div>
                <Label>Upload Supplier Data</Label>
                <div className="mt-2 flex items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg">
                  <div className="space-y-2 text-center">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="text-sm text-gray-600">
                      <label htmlFor="supplier-upload" className="relative cursor-pointer text-emerald font-medium">
                        <span>Upload data</span>
                        <input id="supplier-upload" name="supplier-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      PDF, XLS, CSV up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant="outline" onClick={handlePrevStep}>
                  Previous
                </Button>
                <Button className="bg-emerald hover:bg-emerald-dark">
                  Calculate Emissions
                  <BarChart3 className="ml-2 h-4 w-4" />
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

export default EmissionsCalculator;
