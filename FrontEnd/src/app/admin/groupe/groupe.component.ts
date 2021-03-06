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
  public showMembreForm = false;
  public showaffecterForm = false;
  public showTicketDetails = false;
  public showTicketaffectation = false;
  public showEditGroupForm=false;
  //  public currentgroupe=groupes[0];
  public cuurentgroupe:string ;
  public fetchedTicket=groupes;
  public fetchedgroupecloturer=groupes;
  public fetchedTechniciens=users;
  public user:User;
  public technicienaffecte:User;
  public listtechniciens :any;
  formajouter:FormGroup;
  formaddGroupe:FormGroup;
  formEditGroupe:FormGroup;
  public currentuser=users[0];
  public fetchedUser=users;
  public showUserDetails = false;

  constructor(private userService : AdminService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.userService.getGroupes().subscribe(
      (resultatTicket) => {
        this.fetchedTicket = resultatTicket;
         console.log(resultatTicket);
      }  
      );
      this.userService.getGroupescloturer().subscribe(
        (resultatTicket) => {
          this.fetchedgroupecloturer = resultatTicket;
           console.log(resultatTicket);
        }  
        );
      this.formaddGroupe = new FormGroup({
        specialite: new FormControl(null,{validators:[Validators.required]}),
      
     
      });
      this.formEditGroupe = new FormGroup({
        specialite: new FormControl(null,{validators:[Validators.required]}),
      
     
      });
      
      
}

onAddSubmit(){
  this.userService.addGroupe(this.formaddGroupe.value.specialite);
   this.showAddUserForm = false;
  // this.router.navigate(['dash-respo/events']);
 }



 onClickDeleteGroupe(user:string){
 
     this.userService.DeleteGroupe(user);
     this.router.navigate(['admin/groupe']);

}


onClickShowForm(){
  this.showAddUserForm = true;
}
onClickCloseForm(){
  this.showAddUserForm = false;
}

onClickCloseFormEdit(){
  this.showEditGroupForm = false;
}


onClickShowFormEdit(id:string){

 this.cuurentgroupe=id;
  this.showEditGroupForm = true;
  //this.id=user;
}

onClickCloseFormtechniciens(){
  this.showMembreForm = false;
}


async onClickShowFormtechniciens(id:string){
  await    this.userService.getTechniciensofthegroupe(id).subscribe(
    (resultatTicket) => {
      this.listtechniciens = resultatTicket;
       console.log(resultatTicket);
    }  
    );
 this.cuurentgroupe=id;
  this.showMembreForm  = true;
  //this.id=user;
}
onEditSubmit(user:string){
     
  this.userService.EditGroupe(this.formEditGroupe.value.specialite,this.cuurentgroupe);
  console.log(this.cuurentgroupe);
   this.showEditGroupForm = false;
  // this.router.navigate(['dash-respo/events']);
 }
 onClickShowForm2(user:User){
  this.showUserDetails = true;
  this.currentuser=user;

}
 onClickCloseForm2(){
  this.showUserDetails = false;
}


}
