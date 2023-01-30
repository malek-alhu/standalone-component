import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideRouter } from '@angular/router';
import { provideState, provideStore } from '@ngrx/store';
import { routes } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

import { AppModule } from './app/app.module';
import { userReducer } from './app/store/user.reducer';

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideStore({ users: userReducer })],
}).catch((err) => console.error(err));
