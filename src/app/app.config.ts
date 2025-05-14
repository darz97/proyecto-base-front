import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideCore } from '@core/core';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideCore({ routes }),
  ],
};
