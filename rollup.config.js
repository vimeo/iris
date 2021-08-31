import babel from '@rollup/plugin-babel';
import multiInput from 'rollup-plugin-multi-input';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import visualizer from 'rollup-plugin-visualizer';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

// Must come last in plugins array.
let minify = terser({ compress: { passes: 2 } });

/** @type {import('rollup').Plugin[]} */
let commonPlugins = [
  typescript(),
  json({ exclude: ['**/package/json'] }),
  resolve(),
  commonjs({ ignoreGlobal: true }),
  babel({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    babelHelpers: 'runtime',
    exclude: /node_modules/,
  }),
  replace({ __VERSION__: JSON.stringify(pkg.version) }),
  multiInput(),
  visualizer({ open: false, gzipSize: true }),
];

/** @type {import('rollup').RollupOptions} */
let configBase = {
  input: [
    './src/!(_|storybook)*/**/!(*.story.tsx|*.test.ts|*.types.ts)',
  ],
  external: (id) =>
    (!id.startsWith('\0') &&
      !id.startsWith('.') &&
      !id.startsWith('/')) ||
    Object.keys(pkg.peerDependencies).includes(id),
  plugins: commonPlugins,
};

/**
 * @param {Record<string,unknown>} args
 * @returns {import('rollup'.RollupOptions[])}
 */
export default (args) => {
  const debug = args['config-debug'];
  process.env.NODE_ENV = 'production';

  /** @type {import('rollup').RollupOptions} */
  let serverConfig = {
    ...configBase,
    output: [
      {
        dir: './build',
        format: 'commonjs',
        exports: 'named',
        entryFileNames: '[name].cjs',
        chunkFileNames: '[name]-[hash].cjs',
        assetFileNames: '[name]-[hash].cjs',
      },
      {
        dir: './build',
        format: 'esm',
        entryFileNames: '[name].mjs',
        chunkFileNames: '[name]-[hash].mjs',
        assetFileNames: '[name]-[hash].mjs',
      },
    ],
    plugins: configBase.plugins
      .concat(
        replace({
          window: undefined,
          __SERVER__: JSON.stringify(true),
        }),
        !debug && minify
      )
      .filter(Boolean),
  };

  /** @type {import('rollup').RollupOptions} */
  let browserConfig = {
    ...configBase,
    output: [
      {
        dir: './build',
        format: 'commonjs',
        exports: 'named',
        entryFileNames: '[name].browser.cjs',
        chunkFileNames: '[name]-[hash].browser.cjs',
        assetFileNames: '[name]-[hash].browser.cjs',
      },
      {
        dir: './build',
        format: 'esm',
        entryFileNames: '[name].browser.mjs',
        chunkFileNames: '[name]-[hash].browser.mjs',
        assetFileNames: '[name]-[hash].browser.mjs',
      },
    ],
    plugins: configBase.plugins
      .concat(
        replace({
          __SERVER__: JSON.stringify(false),
        }),
        !debug && minify
      )
      .filter(Boolean),
  };

  return [serverConfig, browserConfig];
};
