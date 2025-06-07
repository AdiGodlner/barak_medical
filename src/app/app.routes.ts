import { Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { CausalLinkAssessmentComponent } from './treatments/occupational-medicine/causal-link-assessment/causal-link-assessment.component';
import { MilitaryMedicineComponent } from './treatments/additional-services/military-medicine/military-medicine.component';
import { MedicalAdministrationComponent } from './treatments/additional-services/medical-administration/medical-administration.component';
import { DivingMedicineComponent } from './treatments/additional-services/diving-medicine/diving-medicine.component';
import { AviationMedicineComponent } from './treatments/additional-services/aviation-medicine/aviation-medicine.component';
import { WorkAbilityComponent } from './treatments/occupational-medicine/work-ability/work-ability.component';
import { MedicalRightsComponent } from './treatments/occupational-medicine/medical-rights/medical-rights.component';
import { IndustryConsultingComponent } from './treatments/occupational-medicine/industry-consulting/industry-consulting.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    {
        path: 'he',
        children:[
            
            { path: 'about', component: AboutComponent },
            { path: 'location', component: LocationComponent },
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
