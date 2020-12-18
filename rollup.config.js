import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

export default (args) => {
  // Usage: npx rv build --debug OR npx rollup -c rollup.config.js --config-debug
  const debug = args['config-debug'];

  process.env.NODE_ENV = 'production';

  return {
    input: ['./src/!(_|storybook)*/**/!(*.story.tsx|*.test.ts)'],
    output: {
      dir: './build',
      format: 'cjs',
    },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
      (id) => id.includes('@babel/runtime'),
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript(),
      babel({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        babelHelpers: 'runtime',
        exclude: /node_modules/,
      }),
      !debug && terser(),
      multiInput(),
    ].filter((p) => p),
  };
};
