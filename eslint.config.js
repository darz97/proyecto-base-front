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
    languageOptions: {
      parserOptions: {
  
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },

    },
    plugins: {
      // @ts-ignore
      boundaries,
      import: importPlugin, 
    },

    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      prettierRules,
      // @ts-ignore
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
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      '@angular-eslint/no-conflicting-lifecycle': 'error',
      '@angular-eslint/no-input-rename': 'error',
      '@angular-eslint/no-inputs-metadata-property': 'error',
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/no-output-on-prefix': 'error',
      '@angular-eslint/no-output-rename': 'error',
      '@angular-eslint/no-outputs-metadata-property': 'error',
      '@angular-eslint/use-lifecycle-interface': 'error',
      '@angular-eslint/use-pipe-transform-interface': 'error',
      // TypeScript
    
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'explicit', overrides: { constructors: 'no-public' } },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/max-params': 'error',
      '@typescript-eslint/no-magic-numbers': 'error',
      '@typescript-eslint/consistent-generic-constructors': 'error',
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        { selector: 'property', format: null },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
        },
        { selector: 'typeLike', format: ['PascalCase'] },
      ],
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-shadow': ['error', { hoist: 'all' }],
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/triple-slash-reference': [
        'error',
        { path: 'always', types: 'prefer-import', lib: 'always' },
      ],
      '@typescript-eslint/unified-signatures': 'error',
      eqeqeq: 'error',
      '@typescript-eslint/no-duplicate-enum-values': 'error',
      '@typescript-eslint/no-for-in-array': 'error',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/prefer-readonly':'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: false,
          allowTypedFunctionExpressions: true,
          allowHigherOrderFunctions: true,
          allowDirectConstAssertionInArrowFunctions: true,
        },
      ],
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
          default: 'array',
        }
      ],
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      'max-params': ['warn', 4],      
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
      '@angular-eslint/template/prefer-self-closing-tags': 'error',
      '@angular-eslint/template/prefer-control-flow': 'error',
    },
  }
);
