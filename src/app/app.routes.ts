import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { lazyLoadAbout, lazyLoadAccessibility, lazyLoadAviationMedicine, lazyLoadCausalLinkAssessment, lazyLoadDivingMedicine, lazyLoadIndustryConsulting, lazyLoadLocation, lazyLoadMedicalAdministration, lazyLoadMedicalRights, lazyLoadMilitaryMedicine, lazyLoadWorkAbility } from './lazy-loaders';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    data: {
      loc: '/',
      lastmod: '2025-06-21',
      changefreq: 'monthly',
      priority: 1.0
    }
  },
  { 
    path: 'about',
    loadComponent: lazyLoadAbout,
    data: {
      loc: '/about',
      lastmod: '2025-06-10',
      changefreq: 'monthly',
      priority: 0.7
    }
  },
  { 
    path: 'location',
    loadComponent: lazyLoadLocation,
    data: {
      loc: '/location',
      lastmod: '2025-06-10',
      changefreq: 'monthly',
      priority: 0.7
    }
  },
  { 
    path: 'accessibility-statement',
    loadComponent: lazyLoadAccessibility,
    data: {
      loc: '/accessibility-statement',
      lastmod: '2025-06-10',
      changefreq: 'monthly',
      priority: 0.6
    }
  },
  { 
    path: 'services',
    children:[
      { 
        path: 'causal-link-assessment',
        loadComponent: lazyLoadCausalLinkAssessment,
        data: {
          loc: '/services/causal-link-assessment',
          lastmod: '2025-06-15',
          changefreq: 'monthly',
          priority: 0.7
        }
      },
      { 
        path: 'industry-consulting',
        loadComponent: lazyLoadIndustryConsulting,
        data: {
          loc: '/services/industry-consulting',
          lastmod: '2025-06-20',
          changefreq: 'monthly',
          priority: 0.7
        }
      },
      { 
        path: 'medical-rights',
        loadComponent: lazyLoadMedicalRights,
        data: {
          loc: '/services/medical-rights',
          lastmod: '2025-06-15',
          changefreq: 'monthly',
          priority: 0.7
        }
      },
      { 
        path: 'work-ability',
        loadComponent: lazyLoadWorkAbility,
        data: {
          loc: '/services/work-ability',
          lastmod: '2025-06-10',
          changefreq: 'monthly',
          priority: 0.7
        }
      },
      { 
        path: 'aviation-medicine',
        loadComponent: lazyLoadAviationMedicine,
        data: {
          loc: '/services/aviation-medicine',
          lastmod: '2025-06-06',
          changefreq: 'monthly',
          priority: 0.7
        }
      },
      { 
        path: 'diving-medicine',
        loadComponent: lazyLoadDivingMedicine,
        data: {
          loc: '/services/diving-medicine',
          lastmod: '2025-06-01',
          changefreq: 'monthly',
          priority: 0.7
        }
      },
      { 
        path: 'medical-administration',
        loadComponent: lazyLoadMedicalAdministration,
        data: {
          loc: '/services/medical-administration',
          lastmod: '2025-06-10',
          changefreq: 'monthly',
          priority: 0.7
        }
      },
      { 
        path: 'military-medicine',
        loadComponent: lazyLoadMilitaryMedicine,
        data: {
          loc: '/services/military-medicine',
          lastmod: '2025-06-20',
          changefreq: 'monthly',
          priority: 0.7
        }
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: '' 
  }, // catch-all reroute to home

];
