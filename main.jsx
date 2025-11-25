import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App.jsx';

// Optional: import a minimal CSS reset (there's no Tailwind in this project by default)
import './index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
