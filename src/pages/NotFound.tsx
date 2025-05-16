
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-7xl font-bold text-emerald mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-6">This page doesn't exist yet</p>
        <p className="text-lg text-gray-500 mb-8 max-w-md text-center">
          We're still building the ESG platform. This feature will be available soon.
        </p>
        <Button className="bg-emerald hover:bg-emerald-dark" asChild>
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </Layout>
  );
};

export default NotFound;
