
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, Download, CheckCircle } from "lucide-react";
import { IvyAssistant } from "@/components/IvyAssistant";

const ReportGenerator = () => {
  const [selectedFormat, setSelectedFormat] = useState<string>("vsme");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [reportGenerated, setReportGenerated] = useState<boolean>(false);

  const handleGenerateReport = () => {
    setIsGenerating(true);
    
    // Simulate report generation
    setTimeout(() => {
      setIsGenerating(false);
      setReportGenerated(true);
    }, 2000);
  };

  const reportTypes = [
    {
      id: "vsme",
      name: "VSME Standard",
      description: "Voluntary standard for Small and Medium Enterprises",
      icon: "📊"
    },
    {
      id: "csrd",
      name: "EU CSRD",
      description: "Corporate Sustainability Reporting Directive (European Union)",
      icon: "🇪🇺"
    },
    {
      id: "sec",
      name: "SEC Disclosure",
      description: "U.S. Securities and Exchange Commission disclosure format",
      icon: "🇺🇸"
    }
  ];

  const outputFormats = [
    { id: "pdf", name: "PDF Document", icon: "📄" },
    { id: "excel", name: "Excel Spreadsheet", icon: "📑" },
    { id: "online", name: "Online Report", icon: "🌐" }
  ];

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">ESG Report Generator</h1>
          <p className="text-muted-foreground">
            Generate regulatory-compliant ESG reports in minutes
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Report Settings</CardTitle>
              <CardDescription>
                Configure your report output
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="report-name">Report Name</Label>
                <Input id="report-name" placeholder="Annual ESG Report 2025" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="reporting-period">Reporting Period</Label>
                <Select>
                  <SelectTrigger id="reporting-period">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="q1-2025">Q1 2025</SelectItem>
                    <SelectItem value="q2-2025">Q2 2025</SelectItem>
                    <SelectItem value="q3-2025">Q3 2025</SelectItem>
                    <SelectItem value="q4-2025">Q4 2025</SelectItem>
                    <SelectItem value="annual-2024">Annual 2024</SelectItem>
                    <SelectItem value="annual-2025">Annual 2025</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Report Format</Label>
                <Tabs defaultValue="vsme" onValueChange={setSelectedFormat}>
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="vsme">VSME</TabsTrigger>
                    <TabsTrigger value="csrd">EU CSRD</TabsTrigger>
                    <TabsTrigger value="sec">SEC</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="space-y-2">
                <Label htmlFor="output-format">Output Format</Label>
                <Select>
                  <SelectTrigger id="output-format">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    {outputFormats.map((format) => (
                      <SelectItem key={format.id} value={format.id}>
                        {format.icon} {format.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={handleGenerateReport} 
                  className="w-full bg-emerald hover:bg-emerald-dark"
                  disabled={isGenerating}
                >
                  {isGenerating ? "Generating..." : "Generate Report"}
                  <FileText className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Report Preview</CardTitle>
              <CardDescription>
                {reportTypes.find(r => r.id === selectedFormat)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] overflow-auto">
              {reportGenerated ? (
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-emerald mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Report Generated Successfully</h3>
                    <p className="text-muted-foreground">Your ESG report is ready to download</p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-2">Executive Summary</h4>
                    <p className="text-sm text-muted-foreground">
                      In fiscal year 2024, our organization demonstrated a commitment to sustainability 
                      by reducing our carbon footprint by 12% compared to the previous year. Our Scope 1 
                      emissions decreased by 15%, while Scope 2 emissions saw an 8% reduction through 
                      energy efficiency initiatives and increased use of renewable energy sources.
                    </p>
                  </div>
                  
                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-2">Emissions Data</h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="border rounded-md p-2">
                        <div className="text-xs text-muted-foreground">Scope 1</div>
                        <div className="text-lg font-medium">34.2 tCO₂e</div>
                        <div className="text-xs text-emerald">▼ 15%</div>
                      </div>
                      <div className="border rounded-md p-2">
                        <div className="text-xs text-muted-foreground">Scope 2</div>
                        <div className="text-lg font-medium">87.5 tCO₂e</div>
                        <div className="text-xs text-emerald">▼ 8%</div>
                      </div>
                      <div className="border rounded-md p-2">
                        <div className="text-xs text-muted-foreground">Scope 3</div>
                        <div className="text-lg font-medium">243.8 tCO₂e</div>
                        <div className="text-xs text-emerald">▼ 3%</div>
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-md p-4">
                    <h4 className="font-medium mb-2">Regulatory Compliance</h4>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald" />
                        <span>VSME Standard v2.1 requirements met</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald" />
                        <span>GHG Protocol accounting principles followed</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald" />
                        <span>Data verification completed by third party</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <FileText className="h-16 w-16 text-muted-foreground/30 mb-4" />
                  <h3 className="text-xl font-medium mb-2">No Report Generated Yet</h3>
                  <p className="text-muted-foreground max-w-md">
                    Configure your report settings and click "Generate Report" to create your ESG report
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="border-t pt-4">
              {reportGenerated && (
                <div className="flex w-full justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Last generated: May 16, 2025 at 10:42 AM
                  </span>
                  <Button className="bg-emerald hover:bg-emerald-dark">
                    Download Report
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
      
      <IvyAssistant />
    </Layout>
  );
};

export default ReportGenerator;
