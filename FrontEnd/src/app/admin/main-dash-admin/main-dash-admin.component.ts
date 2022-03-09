import { Component, OnInit } from '@angular/core';
import {AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-main-dash-admin',
  templateUrl: './main-dash-admin.component.html',
  styleUrls: ['./main-dash-admin.component.css']
})
export class MainDashAdminComponent implements OnInit {

  public usersCount;
  constructor(private userService : AdminService) { }

  ngOnInit(): void {
    this.userService.getStats().subscribe((res:any)=>{
      this.usersCount = res.users;
      //this. clubsCount = res.teams;
      //this.title = res.title
    });
  }

}
