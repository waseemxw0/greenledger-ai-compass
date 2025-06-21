import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Search, FileText, Plus, Calendar, Folder, Database, BarChart3 } from "lucide-react";
import { IvyAssistant } from "@/components/IvyAssistant";

const DataManager = () => {
  const [activeTab, setActiveTab] = useState<string>("files");

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Data Manager</h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Organize and analyze your ESG-related documents and data
          </p>
        </div>
        <Button className="bg-emerald hover:bg-emerald-dark w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Import Data
        </Button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6">
        <div className="xl:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Data Sources</CardTitle>
            </CardHeader>
            <CardContent className="px-2">
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Folder className="mr-2 h-4 w-4" />
                  All Files
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm opacity-50">
                  <Folder className="mr-2 h-4 w-4" />
                  Utility Bills
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm opacity-50">
                  <Folder className="mr-2 h-4 w-4" />
                  Vehicle Logs
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm opacity-50">
                  <Folder className="mr-2 h-4 w-4" />
                  Travel Receipts
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm opacity-50">
                  <Folder className="mr-2 h-4 w-4" />
                  Supplier Data
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm opacity-50">
                  <Folder className="mr-2 h-4 w-4" />
                  Waste Management
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Integrations</CardTitle>
              <CardDescription className="text-sm">Connect to external sources</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start text-sm p-2">
                <img src="https://cdn.worldvectorlogo.com/logos/google-drive.svg" alt="Google Drive" className="h-4 w-4 mr-2" />
                <span className="truncate">Google Drive</span>
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm p-2">
                <img src="https://cdn.worldvectorlogo.com/logos/dropbox-1.svg" alt="Dropbox" className="h-4 w-4 mr-2" />
                <span className="truncate">Dropbox</span>
              </Button>
              <Button variant="outline" className="w-full justify-start text-sm p-2">
                <img src="https://cdn.worldvectorlogo.com/logos/microsoft-onedrive-1.svg" alt="OneDrive" className="h-4 w-4 mr-2" />
                <span className="truncate">OneDrive</span>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="xl:col-span-4">
          <Card className="h-full">
            <CardHeader className="pb-0">
              <Tabs defaultValue="files" value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="files" className="text-xs sm:text-sm">Files</TabsTrigger>
                  <TabsTrigger value="extracted-data" className="text-xs sm:text-sm">Data</TabsTrigger>
                  <TabsTrigger value="analysis" className="text-xs sm:text-sm">Analysis</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab}>
                <TabsContent value="files" className="m-0">
                  <div className="p-8 text-center">
                    <Database className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Files Yet</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      Upload your ESG-related documents to get started with data management and analysis
                    </p>
                    <Button className="bg-emerald hover:bg-emerald-dark">
                      <Plus className="mr-2 h-4 w-4" />
                      Upload Your First File
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="extracted-data" className="m-0">
                  <div className="p-8 text-center">
                    <FileText className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Data Extracted</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      Upload files first to automatically extract data points for ESG reporting
                    </p>
                    <Button className="bg-emerald hover:bg-emerald-dark" disabled>
                      Extract Data From Files
                    </Button>
                  </div>
                </TabsContent>

                <TabsContent value="analysis" className="m-0">
                  <div className="p-8 text-center">
                    <BarChart3 className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">No Analysis Available</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-6">
                      Upload data files to analyze trends and gain insights for your ESG reporting
                    </p>
                    <Button className="bg-emerald hover:bg-emerald-dark" disabled>
                      Start Analysis
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Upload New Files</CardTitle>
            <CardDescription className="text-sm">
              Upload your ESG-related documents for automatic data extraction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center border-2 border-dashed border-gray-300 p-8 rounded-lg hover:border-emerald/50 transition-colors">
              <div className="space-y-4 text-center">
                <Upload className="mx-auto h-16 w-16 text-gray-400" />
                <div className="text-lg text-gray-600">
                  <label htmlFor="data-upload" className="relative cursor-pointer text-emerald font-medium hover:text-emerald-dark">
                    <span>Upload files</span>
                    <input id="data-upload" name="data-upload" type="file" className="sr-only" multiple />
                  </label>
                  <p className="mt-1">or drag and drop</p>
                </div>
                <p className="text-sm text-gray-500">
                  PDF, XLS, CSV, JPG up to 10MB per file
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full">Utility Bills</span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full">Travel Receipts</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">Vehicle Logs</span>
                  <span className="px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-full">Supplier Data</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <IvyAssistant />
    </Layout>
  );
};

export default DataManager;