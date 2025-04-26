// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettierRules = require('eslint-plugin-prettier/recommended');
const boundaries = require('eslint-plugin-boundaries');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    plugins: {
      boundaries,
    },

    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettierRules,
      boundaries.configs.strict,
    ],
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
      'boundaries/ignore': [],
      'boundaries/dependency-nodes': ['import', 'dynamic-import'],
      'boundaries/elements': [
        {
          type: 'core',
          pattern: 'src/app/core',
        },
        {
          type: 'shared',
          pattern: 'src/app/shared',
        },
        {
          type: 'feature',
          pattern: 'src/app/feature/([^/]+)',
          capture: ['feature'],
        },
        {
          type: 'env',
          pattern: 'environments',
          mode: 'folder',
          basePattern: 'src',
        },
        {
          type: 'main',
          mode: 'file',
          pattern: 'main.ts',
          basePattern: 'src',
          baseCapture: ['app'],
        },
        {
          type: 'app',
          mode: 'file',
          pattern: 'app(-|.)*.ts',
          basePattern: 'src/app',
          baseCapture: ['app'],
        },
      ],
    },
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'mbs',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'mbs',
          style: 'kebab-case',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/typedef': [
        'error',
        {
          arrowParameter: false,
          variableDeclaration: true,
          memberVariableDeclaration: true,
          objectDestructuring: false,
          arrayDestructuring: false,
          parameter: true,
          propertyDeclaration: true,
        },
      ],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            {
              from: 'core',
              allow: ['core'],
            },
            {
              from: 'shared',
              allow: ['shared', 'core'],
            },
            {
              from: 'feature',
              allow: ['shared', 'core'],
            },
            {
              from: 'main',
              allow: ['app'],
            },
            {
              from: 'app',
              allow: ['env', 'app', 'core', 'shared', 'feature'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
      prettierRules,
    ],
    rules: {
      '@angular-eslint/template/prefer-self-closing-tags': ['error'],
      '@angular-eslint/template/attributes-order': [
        'error',
        {
          alphabetical: false,
          order: [
            'STRUCTURAL_DIRECTIVE',
            'TEMPLATE_REFERENCE',
            'ATTRIBUTE_BINDING',
            'INPUT_BINDING',
            'TWO_WAY_BINDING',
            'OUTPUT_BINDING',
          ],
        },
      ],
    },
  }
);
