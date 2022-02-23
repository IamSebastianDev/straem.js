/** @format */

import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "./dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "./dist/index.js",
        format: "cjs",
        sourcemap: true,
      },

      /**
       * The IIFE bundle is used for delivery via unpgk cdn and as the browser package file. It will work in any
       * browser, even if it doesn't support ESM Modules, imports or exports.
       */

      {
        file: "./dist/index.browser.min.js",
        format: "iife",
        plugins: [terser()],
        sourcemap: true,
        name: "straem",
      },
    ],
  },
];
