import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy to handle requests to the external Ethiopian Orthodox website
      "/api": {
        target: "https://www.ethiopianorthodox.org", // Target server
        changeOrigin: true, // Changes the origin of the host header to the target URL
        rewrite: (path) => path.replace(/^\/api/, ""), // Removes "/api" prefix from requests
        secure: true, // Use HTTPS for the proxy
      },
    },
  },
  build: {
    target: "esnext",
  },
});
