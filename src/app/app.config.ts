import { ApplicationConfig} from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation,withRouterConfig } from '@angular/router';

import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withEnabledBlockingInitialNavigation(),
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      })
    )
  ]
};
