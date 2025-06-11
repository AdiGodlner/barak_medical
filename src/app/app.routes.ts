import { Routes } from '@angular/router';
import { LocationComponent } from './pages/location/location.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { CausalLinkAssessmentComponent } from './pages/services/occupational-medicine/causal-link-assessment/causal-link-assessment.component';
import { MilitaryMedicineComponent } from './pages/services/additional-services/military-medicine/military-medicine.component';
import { MedicalAdministrationComponent } from './pages/services/additional-services/medical-administration/medical-administration.component';
import { DivingMedicineComponent } from './pages/services/additional-services/diving-medicine/diving-medicine.component';
import { AviationMedicineComponent } from './pages/services/additional-services/aviation-medicine/aviation-medicine.component';
import { WorkAbilityComponent } from './pages/services/occupational-medicine/work-ability/work-ability.component';
import { MedicalRightsComponent } from './pages/services/occupational-medicine/medical-rights/medical-rights.component';
import { IndustryConsultingComponent } from './pages/services/occupational-medicine/industry-consulting/industry-consulting.component';
import { AccessibilityComponent } from './pages/accessibility/accessibility.component';

export const routes: Routes = [
    
    //  TODO add lazy load to routes

    { path: '', component: HomeComponent },
    {
        path: 'he',
        children:[
            
            { path: 'about', component: AboutComponent },
            { path: 'location', component: LocationComponent },
            { path: 'accessibility-statement', component:AccessibilityComponent },
            { path: 'services',
                 children:[
                    { path: 'causal-link-assessment', component: CausalLinkAssessmentComponent },
                    { path: 'industry-consulting', component: IndustryConsultingComponent },
                    { path: 'medical-rights', component: MedicalRightsComponent },
                    { path: 'work-ability', component: WorkAbilityComponent },

                    { path: 'aviation-medicine', component: AviationMedicineComponent },
                    { path: 'diving-medicine', component: DivingMedicineComponent },
                    { path: 'medical-administration', component: MedicalAdministrationComponent },
                    { path: 'military-medicine', component: MilitaryMedicineComponent },

                 ] 
                },
            

        ]

    },
    
    { path: '**', redirectTo: '' }, // catch-all reroute to home

];
