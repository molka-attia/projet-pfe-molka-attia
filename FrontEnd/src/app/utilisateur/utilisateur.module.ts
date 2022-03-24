import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtilisateurRoutingModule } from './utilisateur-routing.module';
import { UtilisateurComponent } from './utilisateur.component';
import { TicketComponent } from './ticket/ticket.component';
import { MainDashUtilisateurComponent } from './main-dash-utilisateur/main-dash-utilisateur.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UtilisateurComponent,
    TicketComponent,
    MainDashUtilisateurComponent
  ],
  imports: [
    CommonModule,
    UtilisateurRoutingModule,
    ReactiveFormsModule
  ]
})
export class UtilisateurModule { }
