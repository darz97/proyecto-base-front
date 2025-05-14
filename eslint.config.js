// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettierRules = require('eslint-plugin-prettier/recommended');
const boundaries = require('eslint-plugin-boundaries');
const importPlugin = require('eslint-plugin-import');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    plugins: {
      boundaries,
      import: importPlugin, // <-- Agregamos el plugin de import
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
          type: 'layout',
          pattern: 'src/app/layout',
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
      '@typescript-eslint/array-type': [
        'error', 
        {
          default: 'array', // Esto asegura que se usen tipos como `number[]` en lugar de `Array<number>`
        }
      ],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'max-params': ['warn', 4],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      
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
              allow: ['core', 'env'],
            },
            {
              from: 'shared',
              allow: ['shared', 'core', 'env'],
            },
            
            {
              from: 'feature',
              allow: ['shared', 'core', 'env'],
            },
            {
              from: 'layout',
              allow: ['shared', 'core', 'env'],
            },
            {
              from: 'main',
              allow: ['app'],
            },
            {
              from: 'app',
              allow: ['env', 'app', 'core', 'shared','layout'],
            },
          ],
        },
      ],

      // 👇 Agregado: Orden de imports limpio y ordenado
      'import/order': [
        'error',
        {
          groups: [
            'builtin', // Node.js, Angular (@angular/core)
            'external', // npm libraries (rxjs, lodash, etc)
            'internal', // src/app/**
            'parent', // ../
            'sibling', // ./
            'index', // index.ts
            'object', // import 'zone.js';
            'type', // import type { X }
          ],
          pathGroups: [
            {
              pattern: 'src/app/core/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/app/shared/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: 'src/app/feature/**',
              group: 'internal',
              position: 'before',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'never',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
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
    },
  }
);
