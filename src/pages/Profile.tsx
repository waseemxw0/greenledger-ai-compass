
import React, { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Camera, Mail, Phone, MapPin, Calendar, Building } from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Profile</h1>
            <p className="text-muted-foreground text-sm md:text-base">
              Manage your personal information and preferences
            </p>
          </div>
          <Button 
            variant={isEditing ? "default" : "outline"}
            onClick={() => setIsEditing(!isEditing)}
            className={isEditing ? "bg-emerald hover:bg-emerald-dark" : ""}
          >
            {isEditing ? "Save Changes" : "Edit Profile"}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your account details and contact information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-2xl bg-emerald text-white">SM</AvatarFallback>
                </Avatar>
                {isEditing && (
                  <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 rounded-full h-8 w-8">
                    <Camera className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="text-center sm:text-left space-y-2">
                <h2 className="text-2xl font-semibold">Sarah Miller</h2>
                <p className="text-muted-foreground">Business Owner at GreenTech Solutions</p>
                <Badge variant="outline" className="bg-emerald/10 text-emerald border-emerald/30">
                  Pro Member
                </Badge>
              </div>
            </div>
            
            <Separator />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input 
                    id="first-name" 
                    defaultValue="Sarah" 
                    disabled={!isEditing}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="email" 
                      defaultValue="sarah@greenledger.ai" 
                      disabled={!isEditing}
                      className={cn("pl-10", !isEditing ? "bg-muted" : "")}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="phone" 
                      defaultValue="+1 (555) 123-4567" 
                      disabled={!isEditing}
                      className={cn("pl-10", !isEditing ? "bg-muted" : "")}
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input 
                    id="last-name" 
                    defaultValue="Miller" 
                    disabled={!isEditing}
                    className={!isEditing ? "bg-muted" : ""}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="company" 
                      defaultValue="GreenTech Solutions LLC" 
                      disabled={!isEditing}
                      className={cn("pl-10", !isEditing ? "bg-muted" : "")}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="location" 
                      defaultValue="San Francisco, CA" 
                      disabled={!isEditing}
                      className={cn("pl-10", !isEditing ? "bg-muted" : "")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Statistics</CardTitle>
            <CardDescription>Your activity and usage overview</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-emerald/5 rounded-lg border border-emerald/20">
                <div className="text-2xl font-bold text-emerald">24</div>
                <div className="text-sm text-muted-foreground">Reports Generated</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="text-2xl font-bold text-blue-600">156</div>
                <div className="text-sm text-muted-foreground">Days Active</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="text-2xl font-bold text-purple-600">89%</div>
                <div className="text-sm text-muted-foreground">Goal Progress</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
