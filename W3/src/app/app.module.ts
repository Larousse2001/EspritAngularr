import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './core/residences/residences.component';
import { FormResidenceComponent } from './core/form-residence/form-residence.component';
import { ApartmentsComponent } from './core/apartments/apartments.component';
import { FormApartmentComponent } from './core/form-apartment/form-apartment.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailApartmentComponent } from './core/detail-apartment/detail-apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    FormResidenceComponent,
    ApartmentsComponent,
    FormApartmentComponent,
    NotFoundComponent,
    DetailApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
