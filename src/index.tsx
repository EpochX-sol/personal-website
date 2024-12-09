import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
 

try {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
   
} catch (error) {
  console.error('Failed to render application:', error);
} 