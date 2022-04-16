import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './user.model';
import { users } from './users-list';
import {AdminService } from '../../services/admin.service';
import { Groupe } from '../groupe/groupe.model';
import { groupes } from '../groupe/groupes-list';


@Component({
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.css']
})
export class TechnicienComponent implements OnInit {
  public usersList : User[] = users;
 
 public imagePreview:string;

  constructor(private userService : AdminService, private route:ActivatedRoute,private router:Router) {
   
   }
    formaddUser:FormGroup;
    formEdit:FormGroup;
    public techniciens=false;
   public showAddUserForm = false;
   public showUserDetails = false;
   public showTechnicienaffecter = false;
   public showEditUserForm=false;
   public currentuser=users[0];
   public fetchedUser=users;
   public listtechniciens=users;
   public fetchedspecialite;
   public fetchedgroupes=groupes;
   formAffecter:FormGroup;
   

  ngOnInit(): void {
    this.techniciens=false;
    this.userService.getTechniciens().subscribe(
      (resultatUser) => {
        this.fetchedUser = resultatUser;
         console.log(resultatUser);
      }

    );

    this.userService.getTechniciens().subscribe(
      (resultatUser) => {
        this.fetchedspecialite = resultatUser;
         console.log(resultatUser);
      }
      );
    
    this.formaddUser = new FormGroup({
      name: new FormControl(null,{validators:[Validators.required]}),
      email: new FormControl(null,{validators:[Validators.required]}),
     password: new FormControl(null,{validators:[Validators.required]}),
     type: new FormControl(null),
     user_img: new FormControl(null,{validators:[Validators.required]}),
     groupe_id: new FormControl(null,{validators:[Validators.required]}),
    });

    this.formEdit = new FormGroup({
      name: new FormControl(null,{validators:[Validators.required]}),
      email: new FormControl(null,{validators:[Validators.required]}),
       password: new FormControl(null,{validators:[Validators.required]}),
    // type: new FormControl(null,{validators:[Validators.required]}),
     user_img: new FormControl(null,{validators:[Validators.required]}),

    });
    this.formAffecter = new FormGroup({
      groupe_id : new FormControl(null,{validators:[Validators.required]}),

    });
  }
   oneEditSubmit(userId:string){

    this.userService.EditTechnicien(this.formEdit.value,userId);
    this.showEditUserForm = false;
   
  }
  oneAffceterSubmit(userId:string){

    this.userService.AffecterTechnicien(this.formAffecter.value.groupe_id,userId);
    this.showTechnicienaffecter = false;
   
  }
  onDeleteUser(user:string){
    // this.route.paramMap.subscribe(params=>{
      // const userId=params.get("id");
      // const userId=id;
      //  console.log(user.id)
      //  this.currentuser=user;
       this.userService.DeleteUser(user);
       this.showUserDetails = false;
    //this.router.navigate(['admin/user']);
  // })
  }
 onAddSubmit(){

    this.userService.getGroupes().subscribe(
      (resultatTicket) => {
        this.fetchedgroupes = resultatTicket;
         console.log(resultatTicket);
      }  
      );


   this.userService.ajoutertechnicien(this.formaddUser.value);
    this.userService.envoyermailech(this.formaddUser.value);
    this.showAddUserForm = false;
   // this.router.navigate(['dash-respo/events']);
  }

  // async onAddSubmit(){

  //   this.userService.getGroupes().subscribe(
  //     (resultatTicket) => {
  //       this.fetchedgroupes = resultatTicket;
  //        console.log(resultatTicket);
  //     }  
  //     );


  //  // this.userService.envoyermailech(this.formaddUser.value);
  //   this.showAddUserForm = false;
  //  // this.router.navigate(['dash-respo/events']);
  // }
  onImagePicked(event :Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.formaddUser.patchValue({user_img:file});
    this.formaddUser.get('user_img').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

  }
  onImagePicked2(event :Event){
    const file = (event.target as HTMLInputElement).files[0];
  this.formEdit.patchValue({user_img:file});
  this.formEdit.get('user_img').updateValueAndValidity();
  const reader = new FileReader();
  reader.onload = () => {
    this.imagePreview = reader.result as string;
  };
  reader.readAsDataURL(file);

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
  onClickShowForm2(user:User){
    this.showUserDetails = true;
    this.currentuser=user;

  }
  onClickCloseForm2(){
    this.showUserDetails = false;
  }

  onClickCloseForm3(){
    this.showEditUserForm = false;
  }
  onClickShowForm3(){
    this.showUserDetails = false;
this.showEditUserForm=true;
  }

  onClickCloseForm4(){
    
    this.showTechnicienaffecter = false;
  }
  onClickShowForm4(){
    this.userService.getGroupes().subscribe(
      (resultatTicket) => {
        this.fetchedgroupes = resultatTicket;
         console.log(resultatTicket);
      }  
      );
    this.showUserDetails = false;
    
this.showTechnicienaffecter=true;
  }

  async  onclickaffichertechniciens(){
this.techniciens=false;
await    this.userService.getTechniciens().subscribe(
  (resultatTicket) => {
    this.listtechniciens = resultatTicket;
     console.log(resultatTicket);
  }  
  );

  }

  async  onclickafficherutilisateurs(){
    this.techniciens=true;
    await this.userService.getUsers().subscribe(
      (resultatUser) => {
        this.fetchedUser = resultatUser;
         console.log(resultatUser);
      }
      );
  }


}
