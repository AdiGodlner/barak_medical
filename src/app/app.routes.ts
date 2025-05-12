import { Routes } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { TreatmentsComponent } from './treatments/treatments.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'treatments', component: TreatmentsComponent },
    { path: 'location', component: LocationComponent },
    { path: '**', redirectTo: '' }, // optional: catch-all route

];
