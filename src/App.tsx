
import { Toaster } from "@/components/ui/toaster";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, useEffect, useState } from "react";
import { Loader } from "lucide-react";

// Create a global isServer variable that works in both environments
declare global {
  var isServerRendering: boolean;
}

// Helper function to detect server rendering
const isServer = () => {
  return typeof window === 'undefined' || global.isServerRendering === true;
};

// Lazy load pages for better performance
const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center">
    <div className="flex flex-col items-center gap-2">
      <Loader className="h-8 w-8 animate-spin text-purple-500" />
      <p className="text-sm text-white/70">Loading...</p>
    </div>
  </div>
);

// Improved ClientOnly component with proper hydration support
const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return mounted ? <>{children}</> : null;
};

// Static components render the same on server and client
const StaticContent = ({ children }: { children: React.ReactNode }) => (
  <>{children}</>
);

// Main App Component
const App = () => {
  // Determine if we're on the server or client
  const serverRendered = isServer();

  return (
    <>
      {/* Only render Toaster on the client to prevent hydration mismatch */}
      <ClientOnly>
        <Toaster />
      </ClientOnly>
      
      {/* Create a consistent suspense fallback between server and client */}
      <Suspense fallback={
        <StaticContent>
          <PageLoader />
        </StaticContent>
      }>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
