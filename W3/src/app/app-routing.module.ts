import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './core/residences/residences.component';
import { FormResidenceComponent } from './core/form-residence/form-residence.component';
import { ApartmentsComponent } from './core/apartments/apartments.component';
import { FormApartmentComponent } from './core/form-apartment/form-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailApartmentComponent } from './core/detail-apartment/detail-apartment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: ResidencesComponent },
  { path: 'addResidence', component: FormResidenceComponent },
  { path: 'residences/:residenceId/apartments', component: ApartmentsComponent },
  { path: 'addApartment', component: FormApartmentComponent },
  { path: '404', component: NotFoundComponent },
  { path: 'details/:id', component: DetailApartmentComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
