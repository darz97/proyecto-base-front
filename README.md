# Angular Standalone App – Código limpio, modular y escalable 🧱🚀

Este proyecto Angular fue creado utilizando arquitectura **standalone**, modularización en capas (`core`, `shared`, `feature`), y una configuración avanzada de **ESLint** para mantener un código limpio, consistente y escalable.

---

## 📦 Estructura del Proyecto

```plaintext
src/
├── app/
│   ├── core/       # Singleton services, guards, interceptors
│   ├── shared/     # Módulos comunes: CommonModule, FormsModule, pipes, etc.
│   ├── feature/    # Módulos específicos por feature
│   └── app.config.ts
├── environments/   # Configuración de entornos
├── main.ts
```

---

## 🚀 Principales Características

### ✅ Arquitectura modular y standalone

- Uso de componentes standalone en vez de `@NgModule` donde es posible.
- Reutilización de módulos comunes a través de un archivo `sharedImports.ts`.

### ✅ ESLint avanzado

ESLint está configurado con:

- [`@typescript-eslint`](https://typescript-eslint.io/)
- [`angular-eslint`](https://github.com/angular-eslint/angular-eslint)
- [`eslint-plugin-boundaries`](https://github.com/insidewarehouse/eslint-plugin-boundaries)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import)
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier)

---

## 📏 Reglas de Estilo y Buenas Prácticas

### 🧠 Estructura por capas

Usamos `eslint-plugin-boundaries` para restringir dependencias entre capas:

| Desde     | Puede importar de              |
| --------- | ------------------------------ |
| `core`    | `core`, `env`                  |
| `shared`  | `shared`, `core`, `env`        |
| `feature` | `shared`, `core`, `env`        |
| `app`     | `env`, `app`, `core`, `shared` |
| `main.ts` | `app`                          |

---

### ⚠️ Reglas importantes de ESLint

- ❌ **Prohibido** usar `Array<T>` → Usar `T[]` (`@typescript-eslint/array-type`)
- ⚠️ `any` solo lanza advertencia, pero se recomienda evitarlo
- ❌ Prohibido `console.log` en producción (`no-console` solo permite `console.warn`, `console.error`)
- ⚠️ Límite de parámetros por función: máx. 4 (`max-params`)
- ✅ Uso obligatorio de tipos explícitos en funciones y parámetros públicos (`typedef`, `explicit-function-return-type`)
- ✅ Uso de comillas simples, salvo cuando se requieran dobles (`quotes`)
- ✅ Orden de imports estricto (`import/order`) sin líneas en blanco

---

## 🔍 Orden de Imports

Agrupados y ordenados alfabéticamente:

1. Builtin (ej: `@angular/core`)
2. External (ej: `rxjs`, `lodash`)
3. Internal (`src/app/**`)
4. Parent (`../`)
5. Sibling (`./`)
6. Index (`index.ts`)
7. Side effect (`import 'zone.js'`)
8. Types (`import type { ... }`)

---

## 📦 sharedImports

```ts
import { NgModuleType } from '@angular/core';

export const sharedImports: NgModuleType<any>[] = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];
```

✅ Solo acepta módulos (`@NgModule`). Si agregas un componente, lanza error.

---

## 📄 Reglas HTML

Activadas por `angular-eslint/template`:

- `prefer-self-closing-tags` ✅
- Accesibilidad activada (`templateAccessibility`)
- Integración con Prettier

---
