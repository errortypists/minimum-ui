import resolve from "@rollup/plugin-node-resolve";
import image from "@rollup/plugin-image";
import babel, { getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const packageJson = require("./package.json");
const external = ["react", "react-dom", "styled-components"];

export default {
  input: "./src/index.ts",
  // output: [
  //   {
  //     dir: "dist",
  //     format: "esm",
  //     exports: "named",
  //     sourcemap: true,
  //   },
  // ],
  output: [
    {
      dir: "dist/esm",
      format: "es",
      preserveModules: true,
      // plugins: [
      //   getBabelOutputPlugin({
      //     plugins: ["babel-plugin-styled-components"],
      //   }),
      // ],
    },
    {
      dir: "dist/cjs",
      format: "cjs",
      preserveModules: true,
      exports: "auto",
    },
  ],
  external,
  preserveModules: true,
  plugins: [
    peerDepsExternal(),
    image(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
