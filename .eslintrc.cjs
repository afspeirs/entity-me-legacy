module.exports = {
  root: true,
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
  ],
  plugins: [
    'svelte3',
  ],
  overrides: [{
    files: ['*.svelte'],
    processor: 'svelte3/svelte3',
  }],
  rules: {
    'import/extensions': 'off',
    'import/first': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }], // https://github.com/sveltejs/eslint-plugin-svelte3/issues/41
  },
};
