import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    mimeTypes: {
      webmanifest: "application/manifest+json",
      png: "image/png",
    },
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate", // Auto update the service worker
      manifest: {
        name: "iChef Reports App",
        short_name: "iChef",
        description: "A modern reporting web app",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        scope: "/",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "/screenshot-1280x720.png",
            sizes: "1280x720",
            type: "image/png",
          },
          {
            src: "/screenshot-720x1280.png",
            sizes: "720x1280",
            type: "image/png",
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
});
