import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from './../ticket/ticket.model';
import { tickets } from './../ticket/tickets-list';
import {AdminService } from '../../services/admin.service';
import { users } from '../../admin/user/users-list';
import { User } from '../../admin/user/user.model';
import { groupes } from 'src/app/admin/groupe/groupes-list';
import {Groupe} from 'src/app/admin/groupe/groupe.model';

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
  public fetchedgroupes=groupes;
  public fetchedTechniciens=users;
  public user:User;
  public technicienaffecte:User;
  public showEditTicketForm = false;
  formaddTicket:FormGroup;
  formeditTicket:FormGroup;
  public showAddUserForm = false;
  public specialite: Groupe;
  public formclourer:FormGroup;
  public showTicketcloturation = false;
 

  constructor(private userService : AdminService, private route:ActivatedRoute,private router:Router) { }
  technicienId = localStorage.getItem('user');
  ngOnInit(): void {
    this.userService.getTicketsUsercloturer(JSON.parse(this.technicienId).userId).subscribe(
      (resultatTicket) => {
        this.fetchedTicket = resultatTicket;
         console.log(resultatTicket);
      }  
      );


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
      this.formclourer = new FormGroup({
        note: new FormControl(null,{validators:[Validators.required]}),
 
      });
     
    
      
  }
  
  async onClickShowForm2(ticket:Ticket){
    this.showTicketDetails = true;
    this.currentticket=ticket;

await this.userService.getUser(this.currentticket.demandeur) .subscribe(
  (resultat:any) => {
    console.log(resultat);
    this.user = resultat;
  
  });
  await   this.userService.getUser(this.currentticket.assignetech) .subscribe(
    (resultat:any) => {
      console.log(resultat);
      this.technicienaffecte = resultat;
    
    }
    );
    await   this.userService.getspecialite(this.currentticket.specialite).subscribe(
      (resultatTicket:any) => {
        this.specialite = resultatTicket;
         console.log(resultatTicket);
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
       this.showTicketDetails=false;
    //this.router.navigate(['admin/user']);
  // })
  }
  onAddSubmit(){
    this.userService.addTicket(this.formaddTicket.value.description,this.formaddTicket.value.priorite,this.formaddTicket.value.specialite,JSON.parse(this.technicienId).userId);
     this.showAddUserForm = false;
    // this.router.navigate(['dash-respo/events']);
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
    onClickShowcloturation(ticket:Ticket){
      this.showTicketDetails = false;
      this.showTicketcloturation = true;
      this.currentticket=ticket;
        
       // this.router.navigate(['dash-respo/events']);
     
  
    }
    onCloturerTiket(userId:string){

      this.userService.EditCloturer(this.formclourer.value.note,userId);
      this.showTicketcloturation = false;
      this.showTicketDetails = false
     
    }
    onClickClosecloturation(){
      this.showTicketcloturation = false;
    }
}