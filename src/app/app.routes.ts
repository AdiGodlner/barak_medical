import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { lazyLoadAbout, lazyLoadAccessibility, lazyLoadAviationMedicine, lazyLoadCausalLinkAssessment, lazyLoadDivingMedicine, lazyLoadIndustryConsulting, lazyLoadLocation, lazyLoadMedicalAdministration, lazyLoadMedicalRights, lazyLoadMilitaryMedicine, lazyLoadWorkAbility } from './lazy-loaders';

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
    path: 'services',
    children:[
      { 
        path: 'causal-link-assessment',
        loadComponent: lazyLoadCausalLinkAssessment,

      },
      { 
        path: 'industry-consulting',
        loadComponent: lazyLoadIndustryConsulting,
      },
      { 
        path: 'medical-rights',
        loadComponent: lazyLoadMedicalRights,
      },
      { 
        path: 'work-ability',
        loadComponent: lazyLoadWorkAbility,
      },
      { 
        path: 'aviation-medicine',
        loadComponent: lazyLoadAviationMedicine,
      },
      { 
        path: 'diving-medicine',
        loadComponent: lazyLoadDivingMedicine,
      },
      { 
        path: 'medical-administration',
        loadComponent: lazyLoadMedicalAdministration,
      },
      { 
        path: 'military-medicine',
        loadComponent: lazyLoadMilitaryMedicine,
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: '' 
  },

];
