import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Demande } from './demande.model';
import { demandes } from './demandes-list';
import { Ticket } from '../tech-tickets/ticket.model';
import { tickets } from '../tech-tickets/tickets-list';
import {AdminService } from '../../services/admin.service';
import { users } from '../../admin/user/users-list';
import { User } from '../../admin/user/user.model';
import { TechnicienService } from 'src/app/services/technicien.service';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {
  public fetchedDemandes:any;
  public fetchedTicket=tickets;
  public fetchedtechniciens=users;
  technicienId = localStorage.getItem('user');
  formaddDemande:FormGroup;
  public showAddDemandeForm = false;
   constructor(private userService : AdminService,private techService : TechnicienService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.techService.getdemandes(JSON.parse(this.technicienId).userId).subscribe(
      (resultatTicket) => {
        this.fetchedDemandes = resultatTicket;
         console.log(resultatTicket);
      }  
      );
    
      this.formaddDemande = new FormGroup({
        contenu: new FormControl(null,{validators:[Validators.required]}),
        recepteur_id: new FormControl(null,{validators:[Validators.required]}),
        ticket_id: new FormControl(null,{validators:[Validators.required]}),
     //  type: new FormControl(null,{validators:[Validators.required]}),
     //  user_img: new FormControl(null,{validators:[Validators.required]}),
      });
      
}
async onClickShowForm(){
  this.showAddDemandeForm = true;
  await this.userService.getTicketsTech(JSON.parse(this.technicienId).userId).subscribe(
    (resultatTicket) => {
      this.fetchedTicket = resultatTicket;
       console.log(resultatTicket);
    }  
    );
    this.userService.getTechniciens().subscribe(
      (resultatUser) => {
        this.fetchedtechniciens = resultatUser;
         console.log(resultatUser);
      }

    );
}
onClickCloseForm(){
  this.showAddDemandeForm = false;
}
onAddSubmit(){

  


 this.techService.addDemande(this.formaddDemande.value.contenu,this.formaddDemande.value.recepteur_id,JSON.parse(this.technicienId).userId,this.formaddDemande.value.ticket_id);
  
  this.showAddDemandeForm= false;
 // this.router.navigate(['dash-respo/events']);
}

onacceptdemande(id:string,ticket:string){

  this.techService.repondredemande("acceptée",id);
 

    this.userService.EditAffecter(JSON.parse(this.technicienId).userId,ticket);
  

   
  
 
  //repondredemande(etat:string,id:string)
}
onrefusedemande(id:string){
  this.techService.repondredemande("refusée",id);
}
}