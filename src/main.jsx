import React from 'react';
import ReactDOM from "react-dom/client"; // ⬅️ CORRECTNote: In newer React, it might be 'react-dom/client'
import App from './App.jsx';
import { ThemeProvider } from './ThemeContext.jsx';
import './index.css'; // Global styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);