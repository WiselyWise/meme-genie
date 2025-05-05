
import { hydrateRoot, createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

// Check if we're hydrating from server-rendered content
const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found. Cannot mount React application.")
}

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
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
