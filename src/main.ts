import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AppModule } from './app/app.module';
AOS.init();

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
