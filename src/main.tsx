
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HelmetProvider } from "react-helmet-async"

// Check if we're hydrating from server-rendered content
const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found. Cannot mount React application.")
}

// Create a client-side QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 60 * 1000, // 1 minute
    },
  },
})

const app = (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </HelmetProvider>
)

// More robust check for server-rendered content
const hasServerRenderedContent = rootElement.firstChild && 
  rootElement.innerHTML.includes('data-reactroot') || 
  rootElement.innerHTML.trim() !== ''

if (hasServerRenderedContent) {
  // If the root has content, hydrate the server-rendered content
  console.log('Hydrating server-rendered content')
  hydrateRoot(rootElement, app)
} else {
  // If no server-rendered content, create a new root
  console.log('No server-rendered content found, creating new root')
  createRoot(rootElement).render(app)
}
