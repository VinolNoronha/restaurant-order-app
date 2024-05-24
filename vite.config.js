import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Restaurant-Order-App/",
  plugins: [react()],
  server: {
    port: 3000, // Customize the dev server port if needed
  },
  // Additional configuration options can go here
});
