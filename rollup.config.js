import babel from '@rollup/plugin-babel';
import multiInput from 'rollup-plugin-multi-input';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default args => {
  // Usage: npx rv build --debug OR npx rollup -c rollup.config.js --config-debug
  const debug = args['config-debug'];

  process.env.NODE_ENV = 'production';

  return {
    input: ['./src/!(_|storybook)*/**/!(*.story.tsx|*.test.ts)'],
    output: {
      dir: './build',
      format: 'cjs',
    },
    external: id => id.includes('@babel/runtime'),
    plugins: [
      resolve(),
      typescript(),
      babel({
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        babelHelpers: 'runtime',
      }),
      !debug && terser(),
      multiInput(),
    ].filter(p => p),
  };
};
