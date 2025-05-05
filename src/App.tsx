import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "lucide-react";
import { HelmetProvider } from "react-helmet-async";

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

// Create a singleton QueryClient
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: false,
//       staleTime: 60 * 1000, // 1 minute
//     },
//   },
// });

const App = () => (
  <HelmetProvider>
    {/*<QueryClientProvider client={queryClient}>
      <TooltipProvider>*/}
        <Toaster />
        <Sonner />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      {/*</TooltipProvider>
    </QueryClientProvider>*/}
  </HelmetProvider>
);

export default App;
