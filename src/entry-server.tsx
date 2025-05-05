
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { HelmetProvider } from "react-helmet-async"

export async function render(url: string) {
  try {
    // Create a new QueryClient instance for each render to prevent data leaking between requests
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          staleTime: 60 * 1000, // 1 minute
        },
      },
    })
    const helmetContext = {}

    const html = ReactDOMServer.renderToString(
      <HelmetProvider context={helmetContext}>
        <QueryClientProvider client={queryClient}>
          <StaticRouter location={url}>
            <App />
          </StaticRouter>
        </QueryClientProvider>
      </HelmetProvider>
    )
    
    return html
  } catch (error) {
    console.error(`Error rendering ${url}:`, error)
    return '<!-- Error rendering content -->'
  }
}
