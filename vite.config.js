import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), svgr()],
  server: {
    open: true,
    port: 3000,
    host: "0.0.0.0",
  },
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
