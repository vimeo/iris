import multi from 'rollup-plugin-multi-input';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';

import pkg from './package.json';

const dependencies = Object.keys(pkg.dependencies || {});
const peerDependencies = Object.keys(pkg.peerDependencies || {});
const babelRuntime = (id) => id.includes('@babel/runtime');

export default (args) => {
  process.env.NODE_ENV = 'production';

  const debug = args['config-debug'];

  /** @type {import('rollup').RollupOptions} */
  let config = {
    input: './src/!(_|storybook)*/**/!(*.story.tsx|*.test.ts|*.types.ts)',
    output: [
      {
        dir: 'build',
        format: 'esm',
        entryFileNames: '[name].mjs',
      },
      {
        dir: 'build',
        format: 'commonjs',
        entryFileNames: '[name].cjs',
      },
    ],
    external: [...dependencies, ...peerDependencies, babelRuntime, 'styled-components/cssprop'],
    plugins: [commonjs(), resolve(), typescript(), babel({ exclude: '**/node_modules', babelHelpers: 'runtime' }), multi()],
  };

  return config;
};
