import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), nodePolyfills()],
  build: {
    // minify: false,
    lib: {
      entry: "./src/index.js",
      name: "WoodDeck",
      fileName: (format) => `woodDeck.${format}.js`,
      // formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react-dom", "three", "@react-three/drei", "@react-three/fiber"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          three: "Three",
          "@react-three/drei": "Drei",
          "@react-three/fiber": "Fiber"
        }
      }
    }
  },
});
