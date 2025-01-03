import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations'; // Use NoopAnimations if you want to disable animations

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideAnimations(), // Disable animations
  ],
}).catch((err) => console.error(err));
