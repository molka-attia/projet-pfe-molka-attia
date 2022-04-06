import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Groupe } from './groupe.model';
import { groupes } from './groupes-list';
import {AdminService } from '../../services/admin.service';
import { users } from '../user/users-list';
import { User } from '../user/user.model';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  public showAddUserForm = false;
  public showTicketDetails = false;
  public showTicketaffectation = false;
  // public currentticket=tickets[0];
  public fetchedTicket=groupes;
  public fetchedTechniciens=users;
  public user:User;
  public technicienaffecte:User;
  public listtechniciens=users;
  formajouter:FormGroup;
  formaddGroupe:FormGroup;

  constructor(private userService : AdminService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.userService.getGroupes().subscribe(
      (resultatTicket) => {
        this.fetchedTicket = resultatTicket;
         console.log(resultatTicket);
      }  
      );
      this.formaddGroupe = new FormGroup({
        specialite: new FormControl(null,{validators:[Validators.required]}),
      
     
      });
  

      
}

onAddSubmit(){
  this.userService.addGroupe(this.formaddGroupe.value.specialite);
   this.showAddUserForm = false;
  // this.router.navigate(['dash-respo/events']);
 }







onClickShowForm(){
  this.showAddUserForm = true;
}
onClickCloseForm(){
  this.showAddUserForm = false;
}




}
