import { Component, OnInit } from '@angular/core';
import {AdminService } from '../../services/admin.service';
@Component({
  selector: 'app-main-dash-technicien',
  templateUrl: './main-dash-technicien.component.html',
  styleUrls: ['./main-dash-technicien.component.css']
})
export class MainDashTechnicienComponent implements OnInit {
  technicienId = localStorage.getItem('user');
  public AllticketsCount;
  public techticketscount;
  constructor(private userService : AdminService) { }

  ngOnInit(): void {
    this.userService.getStatstickets().subscribe((res:any)=>{
      this.AllticketsCount = res.tickets;
      //this. clubsCount = res.teams;
      //this.title = res.title
    });
    this.userService.getStatstechtickets(JSON.parse(this.technicienId).userId).subscribe((res:any)=>{
      this.techticketscount = res.tickets;
      //this. clubsCount = res.teams;
      //this.title = res.title
    });
  }

}
