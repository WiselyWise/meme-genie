
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

// Determine if we should hydrate or create a new root
if (rootElement.innerHTML.trim() !== '') {
  // If the root has content, hydrate the server-rendered content
  hydrateRoot(rootElement, app)
} else {
  // If no server-rendered content, create a new root
  createRoot(rootElement).render(app)
}
