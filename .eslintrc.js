module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react-hooks',
    'immutable',
    'import',
    '@typescript-eslint',
    'prettier',
    'react',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.story.tsx', 'docs/**'],
      rules: {
        'import/no-default-export': 0,
        '@typescript-eslint/ban-ts-comment': 0,
      },
    },
    {
      files: ['*.config.*'],
      rules: {
        'import/no-default-export': 0,
      },
    },
    {
      files: ['**/pages/**'],
      rules: {
        'import/no-default-export': 0,
      },
    },
  ],
  rules: {
    'arrow-parens': 0,
    'implicit-arrow-linebreak': 0,
    'no-confusing-arrow': 0, // 1,
    'no-unused-vars': 0, // 2,
    'no-use-before-define': 0,
    'object-curly-newline': 0,
    'operator-linebreak': 1,

    //
    // import rules
    //
    'import/order': 0, // 1,
    // 'import/named': 2,
    'import/no-default-export': 2,
    'import/no-extraneous-dependencies': 1,
    'import/no-unresolved': 0, // 2,
    'import/prefer-default-export': 0,
    'no-restricted-imports': [
      'warn',
      {
        paths: [
          {
            name: '@storybook/react',
            importNames: ['storiesOf'],
            message:
              'Please use the CSF (Component Story Format) API instead: https://storybook.js.org/docs/formats/component-story-format/',
          },
        ],
      },
    ],

    //
    // @typescript rules
    //
    '@typescript-eslint/array-type': 0, // [1, 'array-simple'],
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/indent': 0, // ['warn', 2],
    '@typescript-eslint/explicit-member-accessibility': 0, // 2,
    '@typescript-eslint/explicit-module-boundary-types': 0, // 2
    '@typescript-eslint/explicit-function-return-type': 0, // 1,
    '@typescript-eslint/no-explicit-any': 0, // 2,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-require-imports': 1,
    '@typescript-eslint/no-unused-vars': 0, // 2,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/prefer-interface': 0,

    //
    // immutable rules
    //
    'immutable/no-let': 0, // 1,
    'immutable/no-this': 0, // 1,
    'immutable/no-mutation': 0, // 1,

    //
    // react rules
    //
    'react/destructuring-assignment': 'warn',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.tsx'] },
    ],
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'react/jsx-key': 'warn',
    'react/jsx-no-comment-textnodes': 'off',
    'react/no-children-prop': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
