import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MainDashAdminComponent } from './main-dash-admin/main-dash-admin.component';
import { UserComponent } from './user/user.component';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [
    AdminComponent,
    MainDashAdminComponent,
    UserComponent,
    TicketComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
