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
      entry: "./src/main.tsx",
      name: "WoodDeck",
      fileName: (format) => `woodDeck9.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        // globals: {
        //   react: 'React',
        //   'react-dom': 'ReactDOM',
        // },
        paths: {
          react: 'https://unpkg.com/browse/react@18.0.0/umd/react.production.min.js',
          'react-dom':'https://unpkg.com/browse/react-dom@18.0.0/umd/react-dom.production.min.js'
        }
      }
    }
  },
});
