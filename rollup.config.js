import babel from '@rollup/plugin-babel';
import multiInput from 'rollup-plugin-multi-input';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import visualizer from 'rollup-plugin-visualizer';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

import pkg from './package.json';

const dependencies = Object.keys(pkg.dependencies || {});
const peerDependencies = Object.keys(pkg.peerDependencies || {});

/**
 * @param {Record<string,unknown>} args
 * @returns {import('rollup'.RollupOptions[])}
 */
export default (args) => {
  const debug = args['config-debug'];
  process.env.NODE_ENV = 'production';

  let input = [
    './src/!(_|storybook)*/**/!(*.story.tsx|*.test.ts|*.types.ts)',
  ];

  /** @type import('rollup').ExternalOption[] */
  let external = [...peerDependencies];

  /** @type {import('rollup').Plugin[]} */
  let plugins = [
    babel({
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      babelHelpers: 'runtime',
      exclude: /node_modules/,
    }),
    resolve(),
    json({ exclude: ['**/package/json'] }),
    typescript({ importHelpers: false, emitDeclarationOnly: true }),
    multiInput(),
    visualizer({ open: false, gzipSize: true }),
  ];

  return [
    {
      input,
      output: [
        {
          dir: './build',
          format: 'commonjs',
          entryFileNames: '[name].cjs',
          chunkFileNames: '[name]-[hash].cjs',
          assetFileNames: '[name]-[hash].cjs',
        },
      ],
      external,
      plugins: [...plugins, commonjs()].filter((p) => p),
    },
    {
      input,
      output: [
        {
          dir: './build',
          format: 'esm',
          entryFileNames: '[name].mjs',
          chunkFileNames: '[name]-[hash].mjs',
          assetFileNames: '[name]-[hash].mjs',
        },
      ],
      external,
      plugins: [...plugins].filter((p) => p),
    },
  ];
};
