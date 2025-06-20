import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CausalLinkAssessmentComponent } from './pages/services/occupational-medicine/causal-link-assessment/causal-link-assessment.component';
import { MilitaryMedicineComponent } from './pages/services/additional-services/military-medicine/military-medicine.component';
import { MedicalAdministrationComponent } from './pages/services/additional-services/medical-administration/medical-administration.component';
import { DivingMedicineComponent } from './pages/services/additional-services/diving-medicine/diving-medicine.component';
import { AviationMedicineComponent } from './pages/services/additional-services/aviation-medicine/aviation-medicine.component';
import { WorkAbilityComponent } from './pages/services/occupational-medicine/work-ability/work-ability.component';
import { MedicalRightsComponent } from './pages/services/occupational-medicine/medical-rights/medical-rights.component';
import { IndustryConsultingComponent } from './pages/services/occupational-medicine/industry-consulting/industry-consulting.component';

export const routes: Routes = [
    
    { path: '', component: HomeComponent},
    { path: 'about',
         loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
    { path: 'location',
         loadComponent:() => import('./pages/location/location.component').then(m => m.LocationComponent) },
    { path: 'accessibility-statement',
         loadComponent:() => import('./pages/accessibility/accessibility.component').then( m => m.AccessibilityComponent )},
    { path: 'services',
            children:[
            { path: 'causal-link-assessment',
                loadComponent:() => import("./pages/services/occupational-medicine/causal-link-assessment/causal-link-assessment.component").then(m => m.CausalLinkAssessmentComponent)},
            { path: 'industry-consulting',
                loadComponent:() => import("./pages/services/occupational-medicine/industry-consulting/industry-consulting.component").then(m => m.IndustryConsultingComponent)},
            { path: 'medical-rights',
                loadComponent:() => import("./pages/services/occupational-medicine/medical-rights/medical-rights.component").then(m => m.MedicalRightsComponent)},
            { path: 'work-ability',
                loadComponent:() => import("./pages/services/occupational-medicine/work-ability/work-ability.component").then(m => m.WorkAbilityComponent)},

            { path: 'aviation-medicine',
                loadComponent:() => import("./pages/services/additional-services/aviation-medicine/aviation-medicine.component").then(m => m.AviationMedicineComponent)},
            { path: 'diving-medicine',
                loadComponent:() => import("./pages/services/additional-services/diving-medicine/diving-medicine.component").then(m => m.DivingMedicineComponent)},
            { path: 'medical-administration',
                loadComponent:() => import("./pages/services/additional-services/medical-administration/medical-administration.component").then(m => m.MedicalAdministrationComponent)},
            { path: 'military-medicine',
                loadComponent:() => import("./pages/services/additional-services/military-medicine/military-medicine.component").then(m => m.MilitaryMedicineComponent)},

            ] 
        },
    
    { path: '**', redirectTo: '' }, // catch-all reroute to home

];
