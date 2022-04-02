import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MainDashAdminComponent } from './main-dash-admin/main-dash-admin.component';
import { UserComponent } from './user/user.component';
import { TicketComponent } from './ticket/ticket.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchiveComponent } from './archive/archive.component';


@NgModule({
  declarations: [
    AdminComponent,
    MainDashAdminComponent,
    UserComponent,
    TicketComponent,
    ArchiveComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
