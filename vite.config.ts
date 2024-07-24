import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}
  },
  build: {
    minify: false,
    lib: {
      entry: "./src/index.js",
      name: "WoodDeck",
      fileName: (format) => `woodDeck6.${format}.js`,
    },
    // rollupOptions: {
    //   external: ["react", "react-dom", "three", "@react-three/drei", "@react-three/fiber"],
    //   output: {
    //     globals: {
    //       react: 'React',
    //       'react-dom': 'ReactDOM',
    //       three: "Three",
    //       "@react-three/drei": "Drei",
    //       "@react-three/fiber": "Fiber"
    //     }
    //   }
    // }
  },
});
