
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import App from './App.tsx';
import './index.css';

// We're definitely not server rendering here
global.isServerRendering = false;

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

const helmetContext = {};

// Important: match the exact structure of providers that's in entry-server.tsx
const app = (
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

// Use a consistent approach to detect if we need to hydrate
const hasChildNodes = rootElement.hasChildNodes() && 
                      rootElement.innerHTML !== '' && 
                      !rootElement.innerHTML.includes('<!--app-html-->');

if (hasChildNodes) {
  // If the root has children, we're hydrating server-rendered content
  console.log('Hydrating app from server-rendered content');
  hydrateRoot(rootElement, app);
} else {
  // Otherwise, we're rendering client-side only
  console.log('Rendering app client-side only');
  createRoot(rootElement).render(app);
}
