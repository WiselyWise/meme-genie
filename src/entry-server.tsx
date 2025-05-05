
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import App from './App';

// Ensure global exists in the server environment
declare global {
  var isServerRendering: boolean;
  interface Window {
    isServerRendering: boolean;
    global: typeof globalThis;
  }
}

// Make sure global is defined in the server environment
if (typeof global !== 'undefined') {
  // Set the server rendering flag
  global.isServerRendering = true;
}

export function render(url: string) {
  // Create a fresh QueryClient instance for each render
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 60 * 1000,
      },
    },
  });

  const helmetContext = {};

  // Important: match the exact structure of providers that's in main.tsx
  const html = ReactDOMServer.renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  // Add console logs for debugging
  console.log('Server-rendered page for URL:', url);

  // Clean up our global flag
  if (typeof global !== 'undefined') {
    delete global.isServerRendering;
  }

  return html;
}
