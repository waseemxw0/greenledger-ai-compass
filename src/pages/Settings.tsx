import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { IvyAssistant } from "@/components/IvyAssistant";
import { Plus, Check } from "lucide-react";

const Settings = () => {
  return (
    <Layout>
      {/* Outer wrapper to provide full height and scrolling on mobile */}
      <div className="min-h-screen flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight break-words">Settings</h1>
            <p className="text-muted-foreground text-sm md:text-base whitespace-normal break-words">
              Manage your account and application preferences
            </p>
          </div>
        </div>

        {/* Tabs - the scrollable container */}
        <div className="flex-1 min-h-0">
          <Tabs defaultValue="profile" className="mb-6 h-full">
            <TabsList 
              className="mb-4 grid grid-cols-2 md:grid-cols-5 w-full overflow-x-auto no-scrollbar gap-2 px-1"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <TabsTrigger 
                value="profile" 
                className="text-xs sm:text-sm min-w-[90px] truncate"
              >
                Profile
              </TabsTrigger>
              <TabsTrigger 
                value="company" 
                className="text-xs sm:text-sm min-w-[90px] truncate"
              >
                Company
              </TabsTrigger>
              <TabsTrigger 
                value="notifications" 
                className="text-xs sm:text-sm min-w-[90px] truncate"
              >
                Notifications
              </TabsTrigger>
              <TabsTrigger 
                value="integrations" 
                className="text-xs sm:text-sm min-w-[90px] truncate"
              >
                Integrations
              </TabsTrigger>
              <TabsTrigger 
                value="billing" 
                className="text-xs sm:text-sm min-w-[90px] truncate"
              >
                Billing
              </TabsTrigger>
            </TabsList>
            
            {/* Each tab is now inside an overflow-y-auto min-h-0 wrapper for mobile scroll */}
            <TabsContent value="profile" className="m-0 space-y-6 mt-4 overflow-y-auto min-h-0">
              <Card className="overflow-auto">
                <CardHeader>
                  <CardTitle className="break-words whitespace-normal">Personal Information</CardTitle>
                  <CardDescription className="break-words whitespace-normal">Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 overflow-auto">
                  <div className="flex flex-col sm:flex-row items-center gap-6">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="" />
                      <AvatarFallback className="text-xl bg-emerald text-white">SM</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2 text-center sm:text-left">
                      <Button variant="outline">Change Avatar</Button>
                      <p className="text-xs text-muted-foreground break-words whitespace-normal">
                        JPG, GIF or PNG. Max size 2MB.
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="space-y-2 w-full">
                      <Label htmlFor="first-name" className="break-words whitespace-normal">First Name</Label>
                      <Input id="first-name" defaultValue="Sarah" className="break-words whitespace-normal w-full" />
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="last-name" className="break-words whitespace-normal">Last Name</Label>
                      <Input id="last-name" defaultValue="Miller" className="break-words whitespace-normal w-full" />
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="email" className="break-words whitespace-normal">Email</Label>
                      <Input id="email" defaultValue="sarah@greenledger.ai" className="break-words whitespace-normal w-full" />
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="phone" className="break-words whitespace-normal">Phone Number</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" className="break-words whitespace-normal w-full" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-emerald hover:bg-emerald-dark">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-auto">
                <CardHeader>
                  <CardTitle className="break-words whitespace-normal">Password</CardTitle>
                  <CardDescription className="break-words whitespace-normal">Update your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 overflow-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="space-y-2 w-full">
                      <Label htmlFor="current-password" className="break-words whitespace-normal">Current Password</Label>
                      <Input id="current-password" type="password" className="break-words whitespace-normal w-full" />
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="new-password" className="break-words whitespace-normal">New Password</Label>
                      <Input id="new-password" type="password" className="break-words whitespace-normal w-full" />
                    </div>
                    <div className="space-y-2 md:col-span-2 w-full">
                      <Label htmlFor="confirm-password" className="break-words whitespace-normal">Confirm Password</Label>
                      <Input id="confirm-password" type="password" className="break-words whitespace-normal w-full" />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-emerald hover:bg-emerald-dark">Update Password</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="company" className="m-0 space-y-6 mt-4 overflow-y-auto min-h-0">
              <Card className="overflow-auto">
                <CardHeader>
                  <CardTitle className="break-words whitespace-normal">Company Information</CardTitle>
                  <CardDescription className="break-words whitespace-normal">Update your organization details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 overflow-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="space-y-2 md:col-span-2 w-full">
                      <Label htmlFor="company-name" className="break-words whitespace-normal">Company Name</Label>
                      <Input id="company-name" defaultValue="GreenTech Solutions LLC" className="break-words whitespace-normal w-full" />
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="industry" className="break-words whitespace-normal">Industry</Label>
                      <Select defaultValue="technology">
                        <SelectTrigger id="industry" className="break-words whitespace-normal w-full">
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="company-size" className="break-words whitespace-normal">Company Size</Label>
                      <Select defaultValue="11-50">
                        <SelectTrigger id="company-size" className="break-words whitespace-normal w-full">
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501+">501+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="space-y-2 md:col-span-2 w-full">
                      <Label htmlFor="address" className="break-words whitespace-normal">Address</Label>
                      <Input id="address" defaultValue="123 Green Street" className="break-words whitespace-normal w-full" />
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="city" className="break-words whitespace-normal">City</Label>
                      <Input id="city" defaultValue="San Francisco" className="break-words whitespace-normal w-full" />
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="state" className="break-words whitespace-normal">State/Province</Label>
                      <Input id="state" defaultValue="California" className="break-words whitespace-normal w-full" />
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="zip" className="break-words whitespace-normal">ZIP/Postal Code</Label>
                      <Input id="zip" defaultValue="94105" className="break-words whitespace-normal w-full" />
                    </div>
                    <div className="space-y-2 w-full">
                      <Label htmlFor="country" className="break-words whitespace-normal">Country</Label>
                      <Select defaultValue="us">
                        <SelectTrigger id="country" className="break-words whitespace-normal w-full">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="eu">European Union</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-emerald hover:bg-emerald-dark">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="m-0 space-y-6 mt-4 overflow-y-auto min-h-0">
              <Card className="overflow-auto">
                <CardHeader>
                  <CardTitle className="break-words whitespace-normal">Notification Settings</CardTitle>
                  <CardDescription className="break-words whitespace-normal">Configure how you receive notifications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Email Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="report-reminders" className="break-words whitespace-normal">Report Reminders</Label>
                            <p className="text-sm text-muted-foreground">Get reminders when reports are due</p>
                          </div>
                          <Switch id="report-reminders" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="data-updates" className="break-words whitespace-normal">Data Updates</Label>
                            <p className="text-sm text-muted-foreground">Notifications when data is missing or updated</p>
                          </div>
                          <Switch id="data-updates" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="goal-progress" className="break-words whitespace-normal">Goal Progress</Label>
                            <p className="text-sm text-muted-foreground">Updates on sustainability goal progress</p>
                          </div>
                          <Switch id="goal-progress" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="marketing" className="break-words whitespace-normal">Marketing</Label>
                            <p className="text-sm text-muted-foreground">Tips, product updates, and offers from GreenLedger</p>
                          </div>
                          <Switch id="marketing" />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">In-App Notifications</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="task-reminders" className="break-words whitespace-normal">Task Reminders</Label>
                            <p className="text-sm text-muted-foreground">Show reminders for pending tasks</p>
                          </div>
                          <Switch id="task-reminders" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="alerts" className="break-words whitespace-normal">Alerts</Label>
                            <p className="text-sm text-muted-foreground">Critical alerts about your ESG reporting</p>
                          </div>
                          <Switch id="alerts" defaultChecked />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div>
                            <Label htmlFor="ai-suggestions" className="break-words whitespace-normal">AI Suggestions</Label>
                            <p className="text-sm text-muted-foreground">Show AI-generated suggestions for improvement</p>
                          </div>
                          <Switch id="ai-suggestions" defaultChecked />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button className="bg-emerald hover:bg-emerald-dark">Save Preferences</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integrations" className="m-0 space-y-6 mt-4 overflow-y-auto min-h-0">
              <Card className="overflow-auto">
                <CardHeader>
                  <CardTitle className="break-words whitespace-normal">Connected Integrations</CardTitle>
                  <CardDescription className="break-words whitespace-normal">Manage connected services and data sources</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Cloud Storage</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      <Card className="border border-border/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12.01 2C6.5 2 2.01 6.5 2.01 12s4.49 10 9.99 10c5.51 0 10-4.5 10-10S17.52 2 12.01 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm">Google Drive</h4>
                                <p className="text-xs text-muted-foreground">Not connected</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">Connect</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-border/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <svg className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm">Dropbox</h4>
                                <p className="text-xs text-muted-foreground">Not connected</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">Connect</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-border/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center">
                                <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm">OneDrive</h4>
                                <p className="text-xs text-muted-foreground">Not connected</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">Connect</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Business Tools</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      <Card className="border border-emerald/30 bg-emerald/5">
                        <CardContent className="p-4">
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-lg bg-emerald/20 flex items-center justify-center">
                                <Check className="h-5 w-5 text-emerald" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm">QuickBooks</h4>
                                <p className="text-xs text-muted-foreground">Connected</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">Disconnect</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-border/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-lg bg-orange-50 flex items-center justify-center">
                                <svg className="h-6 w-6 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm">Zapier</h4>
                                <p className="text-xs text-muted-foreground">Not connected</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">Connect</Button>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-border/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col space-y-3">
                            <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-lg bg-purple-50 flex items-center justify-center">
                                <svg className="h-6 w-6 text-purple-500" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2C6.48 2 2 6.44 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                                </svg>
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm">Slack</h4>
                                <p className="text-xs text-muted-foreground">Not connected</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm" className="w-full">Connect</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button className="bg-emerald hover:bg-emerald-dark w-full sm:w-auto">
                      <Plus className="mr-2 h-4 w-4" />
                      Add New Integration
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="m-0 space-y-6 mt-4 overflow-y-auto min-h-0">
              <Card className="overflow-auto">
                <CardHeader>
                  <CardTitle className="break-words whitespace-normal">Subscription Plan</CardTitle>
                  <CardDescription className="break-words whitespace-normal">Manage your subscription plan and billing details</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 bg-emerald/10 border border-emerald/30 rounded-md">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-medium">Pro Plan</h3>
                          <p className="text-sm text-muted-foreground">$99/month, billed monthly</p>
                        </div>
                        <div className="px-3 py-1 bg-emerald text-white text-xs font-medium rounded-full">
                          CURRENT PLAN
                        </div>
                      </div>
                      
                      <ul className="space-y-2 my-4">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald" />
                          <span className="text-sm">Full emissions calculator</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald" />
                          <span className="text-sm">Unlimited PDF reports</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald" />
                          <span className="text-sm">Data analysis tools</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-emerald" />
                          <span className="text-sm">Email support</span>
                        </li>
                      </ul>
                      
                      <div className="flex gap-3">
                        <Button variant="outline">Change Plan</Button>
                        <Button variant="outline" className="text-red-500 hover:text-red-600 hover:bg-red-50">Cancel Plan</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Payment Method</h3>
                      <div className="flex items-center gap-3 p-3 border rounded-md">
                        <svg className="h-6 w-10" viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0" y="0" width="40" height="24" rx="4" fill="#1434CB" />
                          <path d="M15.4 12.6667C15.4 14.6 16.8333 16 18.8 16C20.7333 16 22.2 14.6 22.2 12.6667C22.2 10.7333 20.7333 9.33333 18.8 9.33333C16.8333 9.33333 15.4 10.7333 15.4 12.6667Z" fill="#FFAA3B" />
                        </svg>
                        <div className="flex-1">
                          <p className="font-medium">•••• •••• •••• 4242</p>
                          <p className="text-xs text-muted-foreground">Visa • Expires 05/26</p>
                        </div>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Billing History</h3>
                        <Button variant="outline" size="sm">Download All</Button>
                      </div>
                      
                      <div className="border rounded-md overflow-hidden">
                        <div className="grid grid-cols-4 gap-2 p-3 bg-muted/30 text-sm font-medium">
                          <div>Date</div>
                          <div>Description</div>
                          <div>Amount</div>
                          <div className="text-right">Receipt</div>
                        </div>
                        
                        <div className="divide-y">
                          <div className="grid grid-cols-4 gap-2 p-3 text-sm">
                            <div>May 1, 2025</div>
                            <div>Pro Plan Subscription</div>
                            <div>$99.00</div>
                            <div className="text-right">
                              <Button variant="link" className="p-0 h-auto text-xs">Download</Button>
                            </div>
                          </div>
                          <div className="grid grid-cols-4 gap-2 p-3 text-sm">
                            <div>Apr 1, 2025</div>
                            <div>Pro Plan Subscription</div>
                            <div>$99.00</div>
                            <div className="text-right">
                              <Button variant="link" className="p-0 h-auto text-xs">Download</Button>
                            </div>
                          </div>
                          <div className="grid grid-cols-4 gap-2 p-3 text-sm">
                            <div>Mar 1, 2025</div>
                            <div>Pro Plan Subscription</div>
                            <div>$99.00</div>
                            <div className="text-right">
                              <Button variant="link" className="p-0 h-auto text-xs">Download</Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <IvyAssistant />
      </div>
    </Layout>
  );
};

export default Settings;
