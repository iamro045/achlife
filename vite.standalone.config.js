import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Builds the same app as vite.config.js but as a single classic (IIFE)
// script instead of an ES module, so the output can be inlined into one
// HTML file and opened directly from disk (file://) without CORS errors.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist-standalone",
    rollupOptions: {
      output: {
        format: "iife",
        inlineDynamicImports: true,
        entryFileNames: "bundle.js",
        assetFileNames: "bundle.[ext]",
      },
    },
  },
});
