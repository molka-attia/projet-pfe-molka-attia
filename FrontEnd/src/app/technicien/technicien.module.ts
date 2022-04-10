import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnicienRoutingModule } from './technicien-routing.module';
import { TechnicienComponent } from './technicien.component';
import { MainDashTechnicienComponent } from './main-dash-technicien/main-dash-technicien.component';
import { AllTicketsComponent } from './all-tickets/all-tickets.component';
import { TechTicketsComponent } from './tech-tickets/tech-tickets.component';
import { PublicationComponent } from './publication/publication.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TechnicienComponent,
    MainDashTechnicienComponent,
    AllTicketsComponent,
    TechTicketsComponent,
    PublicationComponent
  ],
  imports: [
    CommonModule,
    TechnicienRoutingModule,
    ReactiveFormsModule
  ]
})
export class TechnicienModule { }
