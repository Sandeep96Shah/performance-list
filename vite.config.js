import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  mode: "production",
  plugins: [react()],
  build: {
    minify: "esbuild"
  },
});
