import { terser } from 'rollup-plugin-terser';

import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import visualizer from 'rollup-plugin-visualizer';

import pkg from './package.json';

const dependencies = Object.keys(pkg.dependencies || {});
const peerDependencies = Object.keys(pkg.peerDependencies || {});
const babelRuntime = (id) => id.includes('@babel/runtime');

export default (args) => {
  const debug = args['config-debug'];
  process.env.NODE_ENV = 'production';

  return {
    input: [
      './src/!(_|storybook)*/**/!(*.story.tsx|*.test.ts|*.types.ts)',
    ],
    output: {
      dir: './build',
      format: 'es',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    },
    external: [...dependencies, ...peerDependencies, babelRuntime],
    plugins: [
      resolve(),
      // commonjs(),
      typescript(),
      babel({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        babelHelpers: 'runtime',
        exclude: /node_modules/,
      }),
      !debug && terser(),
      multiInput(),
      visualizer({ open: true, gzipSize: true }),
    ].filter((p) => p),
  };
};
