import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Check if we're hydrating from server-rendered content
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Cannot mount React application.");
}

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if (rootElement.hasChildNodes()) {
  // If the root has children, we're hydrating server-rendered content
  hydrateRoot(rootElement, app);
} else {
  // Otherwise, we're rendering client-side only
  createRoot(rootElement).render(app);
}
