import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http'; // Ensure HttpClient is available
import { provideAnimations } from '@angular/platform-browser/animations'; // Provide animations if using Angular Material
import { config } from './app/app.config.server'; // Configuration for your app

// Bootstrap the application
const bootstrap = () =>
  bootstrapApplication(AppComponent, {
    ...config, // Spread your existing configuration
    providers: [
      provideHttpClient(), // Provide HttpClient to the application
      provideAnimations(), // Provide animations for Angular Material or other animations
      // Add any other necessary providers here
    ],
  }).catch((err) => console.error('Error bootstrapping the application:', err));

export default bootstrap;
