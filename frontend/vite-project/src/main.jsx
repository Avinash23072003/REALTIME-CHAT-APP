import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Global CSS
import App from './App.jsx'; // Main App Component
import { Provider } from './components/ui/provider';
import {BrowserRouter} from 'react-router-dom'
// Ensure alias is correctly configured

// Select the root DOM element
const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter>
     
        <Provider>
        <App />
      </Provider>
      </BrowserRouter>

    </StrictMode>
  );
} else {
  console.error("Root element not found. Ensure there's an element with id='root' in your index.html.");
}
