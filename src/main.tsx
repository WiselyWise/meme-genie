import { hydrateRoot, createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Check if we're hydrating from server-rendered content
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Cannot mount React application.");
}

if (rootElement.hasChildNodes()) {
  // If the root has children, we're hydrating server-rendered content
  hydrateRoot(rootElement, <App />);
} else {
  // Otherwise, we're rendering client-side only
  createRoot(rootElement).render(<App />);
}
