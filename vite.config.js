import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sentryVitePlugin } from '@sentry/vite-plugin';

export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      release: {
        name: 'banana-sports@0.0.1', // Set your app version here
      },
    }),
  ],
});
