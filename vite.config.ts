import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          cdnScript: '<script src="https://unpkg.com/react@18"></script>',
        },
      },
    }),
  ],
  define: {
    "process.env": {},
  },
  build: {
    minify: false,
    lib: {
      entry: "./src/index.js",
      name: "WoodDeck",
      fileName: (format) => `woodDeck11.${format}.js`,
    },
    // rollupOptions: {
    //   external: ["react", "react-dom"],
    //   output: {
    //     // globals: {
    //     //   react: 'React',
    //     //   'react-dom': 'ReactDOM',
    //     // },
    //     paths: {
    //       react: 'https://unpkg.com/browse/react@18.0.0/umd/react.production.min.js',
    //       'react-dom':'https://unpkg.com/browse/react-dom@18.0.0/umd/react-dom.production.min.js'
    //     }
    //   }
    // }
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        format: "umd",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});

// // vite.config.js
// import { fileURLToPath, URL } from "node:url";

// import vue from "@vitejs/plugin-vue";
// import { createHtmlPlugin } from "vite-plugin-html";

// export default {
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
//   plugins: [
//     vue(),
//     createHtmlPlugin({
//       inject: {
//         data: {
//           cdnScript:
//             process.env.NODE_ENV === "production"
//               ? '<script src="https://unpkg.com/vue@3"></script>'
//               : "",
//         },
//       },
//     }),
//   ],
//   build: {
//     rollupOptions: {
//       external: ["vue"],
//       output: {
//         format: "iife",
//         globals: {
//           vue: "Vue",
//         },
//       },
//     },
//   },
// };
