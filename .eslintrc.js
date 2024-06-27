/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off',

    'vue/component-api-style': ['error', ['script-setup']],
    'vue/block-order': ['error', { order: ['template', 'script', 'style'] }],
    'vue/define-macros-order': ['error', { order: ['defineEmits', 'defineProps'] }],

    'vue/require-v-for-key': 'error',
    'vue/v-on-event-hyphenation': 'error',
    'vue/html-closing-bracket-newline': 'error',
    'vue/prefer-separate-static-class': 'error',
    'vue/multiline-html-element-content-newline': 'error',
    'vue/prefer-true-attribute-shorthand': ['error', 'always'],
    'vue/valid-v-slot': ['error', { allowModifiers: true }],
    'vue/html-self-closing': ['error', { html: { void: 'always' } }],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'CONDITIONALS',
          'LIST_RENDERING',
          'UNIQUE',
          'DEFINITION',
          'RENDER_MODIFIERS',
          'ATTR_SHORTHAND_BOOL',
          'ATTR_STATIC',
          'ATTR_DYNAMIC',
          'TWO_WAY_BINDING',
          'CONTENT',
          'EVENTS'
        ]
      }
    ],

    'vue/no-unused-properties': 'error',
    'vue/no-undef-properties': 'error',
    'vue/prop-name-casing': 'error',
    'vue/require-prop-types': 'error',
    'vue/require-default-prop': 'error',
    'vue/no-required-prop-with-default': 'error'
  }
}
