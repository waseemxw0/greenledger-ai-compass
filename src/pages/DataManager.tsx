
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Search, FileText, Plus, Calendar, Folder } from "lucide-react";
import { IvyAssistant } from "@/components/IvyAssistant";

const DataManager = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<string>("files");

  // Mock data
  const mockFiles = [
    { id: "1", name: "Electricity Bill - Q1 2025.pdf", type: "utility", date: "2025-03-15", size: "2.4 MB" },
    { id: "2", name: "Natural Gas Statement.pdf", type: "utility", date: "2025-03-02", size: "1.7 MB" },
    { id: "3", name: "Business Travel Report.xlsx", type: "travel", date: "2025-04-10", size: "3.2 MB" },
    { id: "4", name: "Fleet Fuel Consumption.xlsx", type: "vehicle", date: "2025-03-28", size: "4.5 MB" },
    { id: "5", name: "Office Supplies Invoice.pdf", type: "supplier", date: "2025-04-05", size: "1.1 MB" },
    { id: "6", name: "Waste Management Receipt.pdf", type: "waste", date: "2025-04-15", size: "0.8 MB" },
    { id: "7", name: "Employee Commute Survey.xlsx", type: "commute", date: "2025-04-01", size: "2.9 MB" },
    { id: "8", name: "Supplier Carbon Report.pdf", type: "supplier", date: "2025-03-20", size: "5.2 MB" },
  ];

  const filteredFiles = mockFiles.filter(file => 
    file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    file.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFileSelection = (fileId: string) => {
    if (selectedFiles.includes(fileId)) {
      setSelectedFiles(selectedFiles.filter(id => id !== fileId));
    } else {
      setSelectedFiles([...selectedFiles, fileId]);
    }
  };

  const selectAllFiles = () => {
    if (selectedFiles.length === filteredFiles.length) {
      setSelectedFiles([]);
    } else {
      setSelectedFiles(filteredFiles.map(file => file.id));
    }
  };

  const getFileTypeIcon = (type: string) => {
    switch (type) {
      case "utility":
        return <FileText className="h-4 w-4 text-blue-500" />;
      case "travel":
        return <FileText className="h-4 w-4 text-purple-500" />;
      case "vehicle":
        return <FileText className="h-4 w-4 text-green-500" />;
      case "supplier":
        return <FileText className="h-4 w-4 text-orange-500" />;
      case "waste":
        return <FileText className="h-4 w-4 text-red-500" />;
      case "commute":
        return <FileText className="h-4 w-4 text-teal-500" />;
      default:
        return <FileText className="h-4 w-4 text-gray-500" />;
    }
  };

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
                <Button variant="ghost" className="w-full justify-start text-emerald text-sm">
                  <Folder className="mr-2 h-4 w-4 text-emerald" />
                  Utility Bills
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Folder className="mr-2 h-4 w-4" />
                  Vehicle Logs
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Folder className="mr-2 h-4 w-4" />
                  Travel Receipts
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <Folder className="mr-2 h-4 w-4" />
                  Supplier Data
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm">
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
              <div className="mb-6 flex flex-col gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search files..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Select>
                    <SelectTrigger className="w-full sm:w-[180px]">
                      <SelectValue placeholder="Filter by type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="utility">Utility Bills</SelectItem>
                      <SelectItem value="vehicle">Vehicle Logs</SelectItem>
                      <SelectItem value="travel">Travel Documents</SelectItem>
                      <SelectItem value="supplier">Supplier Data</SelectItem>
                      <SelectItem value="waste">Waste Management</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Calendar className="h-4 w-4 mr-2" />
                    Date
                  </Button>
                </div>
              </div>

              <Tabs value={activeTab}>
                <TabsContent value="files" className="m-0">
                  <div className="border rounded-md overflow-hidden">
                    {/* Desktop Table Header */}
                    <div className="hidden md:grid grid-cols-8 gap-2 p-3 border-b bg-muted/30 text-sm font-medium">
                      <div className="col-span-1">
                        <Checkbox 
                          id="select-all" 
                          onCheckedChange={selectAllFiles} 
                          checked={selectedFiles.length === filteredFiles.length && filteredFiles.length > 0} 
                        />
                      </div>
                      <div className="col-span-3">Name</div>
                      <div className="col-span-1">Type</div>
                      <div className="col-span-2">Date Added</div>
                      <div className="col-span-1">Size</div>
                    </div>

                    {/* Mobile Header */}
                    <div className="md:hidden flex items-center justify-between p-3 border-b bg-muted/30 text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <Checkbox 
                          id="select-all-mobile" 
                          onCheckedChange={selectAllFiles} 
                          checked={selectedFiles.length === filteredFiles.length && filteredFiles.length > 0} 
                        />
                        <span>Files</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{filteredFiles.length} files</span>
                    </div>

                    <div className="divide-y">
                      {filteredFiles.length > 0 ? (
                        filteredFiles.map((file) => (
                          <div key={file.id}>
                            {/* Desktop Layout */}
                            <div className="hidden md:grid grid-cols-8 gap-2 p-3 items-center hover:bg-muted/20">
                              <div className="col-span-1">
                                <Checkbox 
                                  id={`file-${file.id}`} 
                                  checked={selectedFiles.includes(file.id)} 
                                  onCheckedChange={() => toggleFileSelection(file.id)} 
                                />
                              </div>
                              <div className="col-span-3 flex items-center gap-2">
                                {getFileTypeIcon(file.type)}
                                <span className="truncate text-sm">{file.name}</span>
                              </div>
                              <div className="col-span-1 capitalize text-sm">{file.type}</div>
                              <div className="col-span-2 text-sm">{new Date(file.date).toLocaleDateString()}</div>
                              <div className="col-span-1 text-sm">{file.size}</div>
                            </div>

                            {/* Mobile Layout */}
                            <div className="md:hidden p-3 hover:bg-muted/20">
                              <div className="flex items-start gap-3">
                                <Checkbox 
                                  id={`file-mobile-${file.id}`} 
                                  checked={selectedFiles.includes(file.id)} 
                                  onCheckedChange={() => toggleFileSelection(file.id)}
                                  className="mt-1"
                                />
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-1">
                                    {getFileTypeIcon(file.type)}
                                    <span className="text-sm font-medium truncate">{file.name}</span>
                                  </div>
                                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span className="capitalize">{file.type}</span>
                                    <span>{file.size}</span>
                                  </div>
                                  <div className="text-xs text-muted-foreground mt-1">
                                    {new Date(file.date).toLocaleDateString()}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center">
                          <p className="text-muted-foreground">No files found matching your search criteria.</p>
                        </div>
                      )}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="extracted-data" className="m-0">
                  <div className="p-8 text-center">
                    <FileText className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Data Extraction</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-4">
                      Select files to automatically extract data points for ESG reporting
                    </p>
                    <Button className="bg-emerald hover:bg-emerald-dark">Extract Data From Files</Button>
                  </div>
                </TabsContent>

                <TabsContent value="analysis" className="m-0">
                  <div className="p-8 text-center">
                    <FileText className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                    <h3 className="text-xl font-medium mb-2">Data Analysis</h3>
                    <p className="text-muted-foreground max-w-md mx-auto mb-4">
                      Upload data files to analyze trends and gain insights for your ESG reporting
                    </p>
                    <Button className="bg-emerald hover:bg-emerald-dark">Start Analysis</Button>
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
            <div className="flex items-center justify-center border-2 border-dashed border-gray-300 p-6 rounded-lg">
              <div className="space-y-2 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="text-sm text-gray-600">
                  <label htmlFor="data-upload" className="relative cursor-pointer text-emerald font-medium">
                    <span>Upload files</span>
                    <input id="data-upload" name="data-upload" type="file" className="sr-only" multiple />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, XLS, CSV, JPG up to 10MB per file
                </p>
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
