import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Lazy load all pages
const Index = lazy(() => import("./pages/Index"));
const EmissionsCalculator = lazy(() => import("./pages/EmissionsCalculator"));
const ReportGenerator = lazy(() => import("./pages/ReportGenerator"));
const DataManager = lazy(() => import("./pages/DataManager"));
const GoalsRoadmap = lazy(() => import("./pages/GoalsRoadmap"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PricingFree = lazy(() => import("./pages/PricingFree"));
const PricingPro = lazy(() => import("./pages/PricingPro"));
const PricingCompliancePlus = lazy(() => import("./pages/PricingCompliancePlus"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ErrorBoundary>
        <BrowserRouter>
          <Suspense fallback={<div className="p-4">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/calculator" element={<EmissionsCalculator />} />
              <Route path="/reports" element={<ReportGenerator />} />
              <Route path="/data" element={<DataManager />} />
              <Route path="/goals" element={<GoalsRoadmap />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/pricing/free" element={<PricingFree />} />
              <Route path="/pricing/pro" element={<PricingPro />} />
              <Route path="/pricing/compliance-plus" element={<PricingCompliancePlus />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ErrorBoundary>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;