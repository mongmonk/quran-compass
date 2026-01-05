import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          devOptions: {
            enabled: true
          },
          includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg', 'icon_180.png', 'icon_192.png', 'icon_512.png'],
          manifest: {
            name: 'Quran Compass',
            short_name: 'QuranCompass',
            description: 'A comprehensive Quran reading and navigation application',
            theme_color: '#ffffff',
            icons: [
              {
                src: 'icon_192.png',
                sizes: '192x192',
                type: 'image/png'
              },
              {
                src: 'icon_512.png',
                sizes: '512x512',
                type: 'image/png'
              },
              {
                src: 'icon_512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any maskable'
              }
            ]
          }
        })
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
