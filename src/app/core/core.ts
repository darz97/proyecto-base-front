import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  EnvironmentProviders,
  inject,
  InjectionToken,
  provideEnvironmentInitializer,
} from '@angular/core';
import {
  Routes,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';

export interface CoreOptions {
  routes: Routes;
}

export const CORE_GUARD: InjectionToken<string> = new InjectionToken<string>(
  'CORE_GUARD'
);

export function provideCore(coreOptions: CoreOptions): EnvironmentProviders[] {
  return [
    provideHttpClient(withFetch()),
    provideRouter(coreOptions.routes, withComponentInputBinding()),

    // otros providers globales...

    provideEnvironmentInitializer(() => {
      const coreGuard: string | null = inject(CORE_GUARD, {
        skipSelf: true,
        optional: true,
      });
      if (coreGuard) {
        throw new TypeError(
          `provideCore() solo debe llamarse una vez en la aplicación`
        );
      }
    }),
  ];
}
