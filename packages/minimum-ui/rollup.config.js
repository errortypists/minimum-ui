import resolve from "@rollup/plugin-node-resolve"
import image from "@rollup/plugin-image"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "rollup-plugin-typescript2"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import svgr from "@svgr/rollup" //  SVG를 컴포넌트 형태로 불러와서 사용
import url from "@rollup/plugin-url" //  데이터 URI 또는 ES모듈로 가져옴 (@svgr/rollup 사용시 필요)
import { uglify } from "rollup-plugin-uglify"

const pkg = require("./package.json")
const external = [
  "react",
  "react-dom",
  "styled-components",
  "react-svg-unique-id",
  "tslib",
]

export default {
  input: "./src/index.ts",
  output: [
    {
      dir: "dist/esm",
      // file: pkg.main,
      format: "esm",
      preserveModules: true,
      sourcemap: false,
    },
    {
      dir: "dist/cjs",
      // file: pkg.module,
      format: "cjs",
      preserveModules: true,
      sourcemap: false,
      exports: "named",
    },
  ],
  external,
  plugins: [
    peerDepsExternal(),
    svgr(),
    image(),
    url(),
    resolve(),
    babel({
      babelHelpers: "runtime",
      exclude: "node_modules/**",
      // skipPreflightCheck: true, // 음... 뭐가 충돌이 나는건지....
    }),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    uglify(),
  ],
}
