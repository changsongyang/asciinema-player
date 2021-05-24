import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import rust from "@wasm-tool/rollup-plugin-rust";

const plugins = [
  babel({
    exclude: "node_modules/**",
    babelHelpers: "bundled",
    presets: ["solid"]
  }),
  resolve({ extensions: [".js", ".jsx"] }),
  commonjs(),
  rust({ inlineWasm: true })
];

export default {
  input: "src/index.js",
  output: {
    file: "public/bundle.js",
    format: "iife"
  },
  preserveEntrySignatures: false,
  plugins
};