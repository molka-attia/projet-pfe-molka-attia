import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from './ticket.model';
import { tickets } from './tickets-list';
import {AdminService } from '../../services/admin.service';
import { users } from '../user/users-list';
import { User } from '../user/user.model';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  public ticketsList : Ticket[] = tickets;
  public showTicketDetails = false;
  public showTicketaffectation = false;
  public currentticket=tickets[0];
  public fetchedTicket=tickets;
  public fetchedTechniciens=users;
  public user:User;
  public technicienaffecte:User;
  public listtechniciens=users;
  formAffecter:FormGroup;

  constructor(private userService : AdminService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.userService.getTicketscloturer().subscribe(
      (resultatTicket) => {
        this.fetchedTicket = resultatTicket;
         console.log(resultatTicket);
      }  
      );
   
      this.formAffecter = new FormGroup({
        technicienid: new FormControl(null,{validators:[Validators.required]}),
 
      });
    
      
  }
  // onCloturerTiket(userId:string){

  //   this.userService.EditCloturer(userId);
  //   this.showTicketDetails = false
   
  // }

  oneEditAffecter(userId:string){

    this.userService.EditAffecter(this.formAffecter.value.technicienid,userId);
    this.showTicketaffectation = false;
   
  }
  
  onClickShowForm2(ticket:Ticket){
    this.showTicketDetails = true;
    this.currentticket=ticket;
ticket.opened="opened";
this.userService.getUser(this.currentticket.demandeur) .subscribe(
  (resultat:any) => {
    console.log(resultat);
    this.user = resultat;
  
  });
  this.userService.getUser(this.currentticket.assignetech) .subscribe(
    (resultat:any) => {
      console.log(resultat);
      this.technicienaffecte = resultat;
    
    }
    );
  }
  onClickCloseForm2(){
 
    
    this.showTicketDetails = false;
  }

  async onClickShowAffecter(ticket:Ticket){
    this.showTicketaffectation = true;
    this.currentticket=ticket;
      await    this.userService.getTechniciens().subscribe(
        (resultatTicket) => {
          this.listtechniciens = resultatTicket;
           console.log(resultatTicket);
        }  
        );
     // this.router.navigate(['dash-respo/events']);
   

  }
  onClickCloseAffecter(){
    this.showTicketaffectation = false;
  }
  onDeleteTiket(user:string){
    // this.route.paramMap.subscribe(params=>{
      // const userId=params.get("id");
      // const userId=id;
      //  console.log(user.id)
      //  this.currentuser=user;
       this.userService.DeleteTicket(user);
       this.showTicketDetails = false;
    //this.router.navigate(['admin/user']);
  // })
  }
}

