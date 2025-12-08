import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { 
  lazyLoadAbout,
  lazyLoadAccessibility,
  lazyLoadLocation,
  lazyLoadGeneric,
  lazyLoadECard} from './lazy-loaders';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
  },
  { 
    path: 'about',
    loadComponent: lazyLoadAbout,
  },
  { 
    path: 'location',
    loadComponent: lazyLoadLocation,
  },
  { 
    path: 'accessibility-statement',
    loadComponent: lazyLoadAccessibility,
  },
  { 
    path: 'services/:slug',
    loadComponent: lazyLoadGeneric,
  },
  {
    path: 'e-card/:slug',
    loadComponent: lazyLoadECard,
  },
  { 
    path: '**', 
    redirectTo: '' 
  },

];
