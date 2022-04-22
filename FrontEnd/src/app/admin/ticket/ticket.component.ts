import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from './ticket.model';
import { tickets } from './tickets-list';
import {AdminService } from '../../services/admin.service';
import { users } from '../user/users-list';
import { User } from '../user/user.model';
import { groupes } from 'src/app/admin/groupe/groupes-list';
import {Groupe} from 'src/app/admin/groupe/groupe.model';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  public ticketsList : Ticket[] = tickets;
  public showTicketDetails = false;
  public showTicketaffectation = false;
  public showTicketcloturation = false;
  public currentticket=tickets[0];
  public fetchedTicket=tickets;
  public fetchedTechniciens=users;
  public user:User;
  public technicienaffecte:User;
  public listtechniciens=users;
  formAffecter:FormGroup;
  formclourer:FormGroup;
  formaddTicket:FormGroup;
  formeditTicket:FormGroup;
  public showAddUserForm = false;
  public specialite: Groupe;
  public fetchedgroupes=groupes;
  public showEditTicketForm = false;
  public technicieninformer:User;
 

  constructor(private userService : AdminService, private route:ActivatedRoute,private router:Router) { }

  technicienId = localStorage.getItem('user');
  ngOnInit(): void {
    this.userService.getTickets().subscribe(
      (resultatTicket) => {
        this.fetchedTicket = resultatTicket;
       // this.dtTrigger.next();
         console.log(resultatTicket);
      }  
      );
   
      this.formAffecter = new FormGroup({
        technicienid: new FormControl(null,{validators:[Validators.required]}),
 
      });
      this.formclourer = new FormGroup({
        note: new FormControl(null,{validators:[Validators.required]}),
 
      });
      this.formaddTicket = new FormGroup({
        description: new FormControl(null,{validators:[Validators.required]}),
        priorite: new FormControl(null,{validators:[Validators.required]}),
        specialite: new FormControl(null,{validators:[Validators.required]}),
      });
      this.formeditTicket = new FormGroup({
        description: new FormControl(null,{validators:[Validators.required]}),
        priorite: new FormControl(null,{validators:[Validators.required]}),
        specialite: new FormControl(null,{validators:[Validators.required]}),
     
      });
      
  }



  onCloturerTiket(userId:string){

    this.userService.EditCloturer(this.formclourer.value.note,userId);
    this.showTicketcloturation = false;
    this.showTicketDetails = false
   
  }

  oneEditAffecter(userId:string){

    this.userService.EditAffecter(this.formAffecter.value.technicienid,userId);
    this.userService.getUser(this.formAffecter.value.technicienid) .subscribe(
      (resultat:any) => {
        console.log(resultat);
        this.technicieninformer = resultat;
       // this.userService.envoyermailechinformer(resultat);
      });
    this.showTicketaffectation = false;

   
  }
  
  onClickShowForm2(ticket:Ticket){
    this.showTicketDetails = true;
    this.currentticket=ticket;

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


  onClickShowcloturation(ticket:Ticket){
    this.showTicketDetails = false;
    this.showTicketcloturation = true;
    this.currentticket=ticket;
      
     // this.router.navigate(['dash-respo/events']);
   

  }
  onAddSubmit(){
    this.userService.addTicket(this.formaddTicket.value.description,this.formaddTicket.value.priorite,this.formaddTicket.value.specialite,JSON.parse(this.technicienId).userId);
     this.showAddUserForm = false;
    // this.router.navigate(['dash-respo/events']);
   }
  onClickClosecloturation(){
    this.showTicketcloturation = false;
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



  onEditSubmit(user:string){
     
    this.userService.EditTicket(this.formeditTicket.value.description,this.formeditTicket.value.priorite,this.formeditTicket.value.specialite,user);
     this.showEditTicketForm = false;
    // this.router.navigate(['dash-respo/events']);
   }
   onClickCloseFormEdit(){
     this.showEditTicketForm = false;
   }


  onClickShowForm(){
    this.showAddUserForm = true;
    this.userService.getGroupes().subscribe(
      (resultatTicket) => {
        this.fetchedgroupes = resultatTicket;
         console.log(resultatTicket);
      }  
      );
  }
  onClickCloseForm(){
    this.showAddUserForm = false;
  } 
  onClickShowFormEdit(){
    this.userService.getGroupes().subscribe(
      (resultatTicket) => {
        this.fetchedgroupes = resultatTicket;
         console.log(resultatTicket);
      }  
      );
  
    this.showTicketDetails = false;
   
    this.showEditTicketForm = true;
    //this.id=user;
  }
 
}
