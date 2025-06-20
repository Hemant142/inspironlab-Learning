import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: { "./Header": "./src/Header.jsx" },
      shared: ["react", "react-dom"],
    }),
  ],
  server: { port: 5001 },
});
