// main.ts
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    provideHttpClient(),
    ...appConfig.providers,
  ],
}).catch((err) => console.error(err));
