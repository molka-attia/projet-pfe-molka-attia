import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from './ticket.model';
import { tickets } from './tickets-list';
import {AdminService } from '../../services/admin.service';
import { users } from '../../admin/user/users-list';
import { User } from '../../admin/user/user.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent  implements OnInit {
  public ticketsList : Ticket[] = tickets;
  public showTicketDetails = false;
  public showTicketaffectation = false;
  public currentticket=tickets[0];
  public fetchedTicket=tickets;
  public fetchedTechniciens=users;
  public user:User;
  public technicienaffecte:User;
  public showEditTicketForm = false;
  formaddTicket:FormGroup;
  formeditTicket:FormGroup;
  public showAddUserForm = false;

  constructor(private userService : AdminService, private route:ActivatedRoute,private router:Router) { }
  technicienId = localStorage.getItem('user');
  ngOnInit(): void {
    this.userService.getTicketsUser(JSON.parse(this.technicienId).userId).subscribe(
      (resultatTicket) => {
        this.fetchedTicket = resultatTicket;
         console.log(resultatTicket);
      }  
      );
      this.formaddTicket = new FormGroup({
        description: new FormControl(null,{validators:[Validators.required]}),
        priorite: new FormControl(null,{validators:[Validators.required]}),
     
      });
  
      this.formeditTicket = new FormGroup({
        description: new FormControl(null,{validators:[Validators.required]}),
        priorite: new FormControl(null,{validators:[Validators.required]}),
     
      });
    
     
    
      
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

  onClickShowAffecter(){
    this.showTicketaffectation = true;
   

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
    //this.router.navigate(['admin/user']);
  // })
  }
  onAddSubmit(){
    this.userService.addTicket(this.formaddTicket.value.description,this.formaddTicket.value.priorite,JSON.parse(this.technicienId).userId);
     this.showAddUserForm = false;
    // this.router.navigate(['dash-respo/events']);
   }
  
   onEditSubmit(user:string){
     
     this.userService.EditTicket(this.formeditTicket.value.description,this.formeditTicket.value.priorite,user);
      this.showEditTicketForm = false;
     // this.router.navigate(['dash-respo/events']);
    }
    onClickCloseFormEdit(){
      this.showEditTicketForm = false;
    }
  
    onClickShowForm(){
      this.showAddUserForm = true;
    }
    onClickCloseForm(){
      this.showAddUserForm = false;
    } 
    onClickShowFormEdit(){
    
      this.showTicketDetails = false;
     
      this.showEditTicketForm = true;
      //this.id=user;
    }
}
