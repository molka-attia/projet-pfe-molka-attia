import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from './user.model';
import { users } from './users-list';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public usersList : User[] = users;
  
  //imagePreview:string;
  constructor( private router:Router) {
   
   }
    //formaddUser:FormGroup;
   public showAddUserForm = false;
   public showUserDetails = false;
   public showEditUserForm=false;
   public currentuser=users[0];

  ngOnInit(): void {
    // this.formaddUser = new FormGroup({
    //   name: new FormControl(null,{validators:[Validators.required]}),
    //   email: new FormControl(null,{validators:[Validators.required]}),
    //  password: new FormControl(null,{validators:[Validators.required]}),
    //  type: new FormControl(null,{validators:[Validators.required]}),
    //  user_img: new FormControl(null,{validators:[Validators.required]}),
    // });
 
  }

  onClickShowForm(){
    this.showAddUserForm = true;
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

}
