module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-hooks',
    'immutable',
    'import',
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0, // 1,
    'no-unused-vars': 0, // 2,
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 1,

    // import rules
    'import/order': 0, // 1,
    'import/named': 2,
    'import/no-default-export': 2,
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': 0, // 2,
    'import/prefer-default-export': 0,

    // @typescript rules
    '@typescript-eslint/array-type': 0, // [1, 'array-simple'],
    '@typescript-eslint/ban-ts-ignore': 1,
    '@typescript-eslint/indent': 0, // ['warn', 2],
    '@typescript-eslint/explicit-member-accessibility': 0, // 2,
    '@typescript-eslint/explicit-function-return-type': 0, // 1,
    '@typescript-eslint/no-explicit-any': 0, // 2,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-require-imports': 1,
    '@typescript-eslint/no-unused-vars': 0, // 2,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/prefer-interface': 0,

    // immutable rules
    'immutable/no-let': 0, // 1,
    'immutable/no-this': 0, // 1,
    'immutable/no-mutation': 0, // 1,

    // react rules
    // 'react/destructuring-assignment': 1,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
