import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const pkg = require("./package.json");
const external = ["react", "react-dom", "styled-components"];

export default {
  input: "./src/index.ts",
  output: [
    {
      file:pkg.main,
      format: "esm",
      sourcemap:true
    },
    {
      file:pkg.module,
      format: "cjs",
      sourcemap:true
    },
  ],
  external,
  plugins: [
    peerDepsExternal(),
    image(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
