import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerSW } from 'virtual:pwa-register';

// Register service worker for PWA
if (typeof window !== 'undefined') {
  registerSW({
    onNeedRefresh() {
      if (confirm('Aplikasi diperbarui. Muat ulang sekarang?')) {
        window.location.reload();
      }
    },
    onOfflineReady() {
      console.log('Aplikasi siap digunakan secara offline');
    },
  });
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);