
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import App from './App.tsx';
import './index.css';

// Check if we're hydrating from server-rendered content
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Cannot mount React application.");
}

// Create a singleton QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000, // 1 minute
    },
  },
});

// Use the same provider wrappers as in server-side rendering
const app = (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

if (rootElement.hasChildNodes()) {
  // If the root has children, we're hydrating server-rendered content
  hydrateRoot(rootElement, app);
} else {
  // Otherwise, we're rendering client-side only
  createRoot(rootElement).render(app);
}
