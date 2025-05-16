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
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your account and application preferences
          </p>
        </div>
      </div>

      <Tabs defaultValue="profile" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="m-0 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your personal details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-xl bg-emerald text-white">SM</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <Button variant="outline">Change Avatar</Button>
                  <p className="text-xs text-muted-foreground">
                    JPG, GIF or PNG. Max size 2MB.
                  </p>
                </div>
              </div>
              
              <Separator />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" defaultValue="Sarah" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" defaultValue="Miller" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="sarah@greenledger.ai" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-emerald hover:bg-emerald-dark">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Update your password</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              
              <div className="flex justify-end">
                <Button className="bg-emerald hover:bg-emerald-dark">Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="company" className="m-0 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your organization details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" defaultValue="GreenTech Solutions LLC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry</Label>
                  <Select defaultValue="technology">
                    <SelectTrigger id="industry">
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
                <div className="space-y-2">
                  <Label htmlFor="company-size">Company Size</Label>
                  <Select defaultValue="11-50">
                    <SelectTrigger id="company-size">
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" defaultValue="123 Green Street" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="San Francisco" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State/Province</Label>
                  <Input id="state" defaultValue="California" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP/Postal Code</Label>
                  <Input id="zip" defaultValue="94105" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Select defaultValue="us">
                    <SelectTrigger id="country">
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

        <TabsContent value="notifications" className="m-0 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Configure how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Email Notifications</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="report-reminders">Report Reminders</Label>
                        <p className="text-sm text-muted-foreground">Get reminders when reports are due</p>
                      </div>
                      <Switch id="report-reminders" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="data-updates">Data Updates</Label>
                        <p className="text-sm text-muted-foreground">Notifications when data is missing or updated</p>
                      </div>
                      <Switch id="data-updates" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="goal-progress">Goal Progress</Label>
                        <p className="text-sm text-muted-foreground">Updates on sustainability goal progress</p>
                      </div>
                      <Switch id="goal-progress" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="marketing">Marketing</Label>
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
                        <Label htmlFor="task-reminders">Task Reminders</Label>
                        <p className="text-sm text-muted-foreground">Show reminders for pending tasks</p>
                      </div>
                      <Switch id="task-reminders" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="alerts">Alerts</Label>
                        <p className="text-sm text-muted-foreground">Critical alerts about your ESG reporting</p>
                      </div>
                      <Switch id="alerts" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="ai-suggestions">AI Suggestions</Label>
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

        <TabsContent value="integrations" className="m-0 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Connected Integrations</CardTitle>
              <CardDescription>Manage connected services and data sources</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Cloud Storage</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src="https://cdn.worldvectorlogo.com/logos/google-drive.svg" alt="Google Drive" className="h-8 w-8" />
                            <div>
                              <h4 className="font-medium">Google Drive</h4>
                              <p className="text-xs text-muted-foreground">Not connected</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Connect</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src="https://cdn.worldvectorlogo.com/logos/dropbox-1.svg" alt="Dropbox" className="h-8 w-8" />
                            <div>
                              <h4 className="font-medium">Dropbox</h4>
                              <p className="text-xs text-muted-foreground">Not connected</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Connect</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src="https://cdn.worldvectorlogo.com/logos/microsoft-onedrive-1.svg" alt="OneDrive" className="h-8 w-8" />
                            <div>
                              <h4 className="font-medium">OneDrive</h4>
                              <p className="text-xs text-muted-foreground">Not connected</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Connect</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <Separator />
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Business Tools</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src="https://cdn.worldvectorlogo.com/logos/quickbooks-2.svg" alt="QuickBooks" className="h-8 w-8" />
                            <div>
                              <h4 className="font-medium">QuickBooks</h4>
                              <p className="text-xs text-muted-foreground">Connected</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Disconnect</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src="https://cdn.worldvectorlogo.com/logos/zapier-1.svg" alt="Zapier" className="h-8 w-8" />
                            <div>
                              <h4 className="font-medium">Zapier</h4>
                              <p className="text-xs text-muted-foreground">Not connected</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Connect</Button>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img src="https://cdn.worldvectorlogo.com/logos/slack-new-2019.svg" alt="Slack" className="h-8 w-8" />
                            <div>
                              <h4 className="font-medium">Slack</h4>
                              <p className="text-xs text-muted-foreground">Not connected</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Connect</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="bg-emerald hover:bg-emerald-dark">
                    <Plus className="mr-2 h-4 w-4" />
                    Add New Integration
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="m-0 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Subscription Plan</CardTitle>
              <CardDescription>Manage your subscription plan and billing details</CardDescription>
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
      
      <IvyAssistant />
    </Layout>
  );
};

export default Settings;
