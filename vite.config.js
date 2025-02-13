import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "My PWA App",
        short_name: "PWA App",
        description: "A Vite PWA Application",
        theme_color: "#ffffff", // ✅ Add theme_color
        background_color: "#ffffff",
        display: "standalone",
        start_url: "./",
        scope: "./",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any", // ✅ Fix: Add "any" purpose
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any", // ✅ Fix: Add "any" purpose
          },
          {
            src: "/pwa-144x144.png", // ✅ Fix: Ensure at least one icon is 144px+
            sizes: "144x144",
            type: "image/png",
            purpose: "any",
          },
        ],
        screenshots: [
          {
            src: "/digimenu-scanntek-com-1280x720desktop-625937.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide", // ✅ Required for desktop
          },
          {
            src: "/digimenu-scanntek-com-720x1280desktop-625937.png",
            sizes: "720x1280",
            type: "image/png", // ✅ Required for mobile
          },
        ],
      },
    }),
  ],
});
