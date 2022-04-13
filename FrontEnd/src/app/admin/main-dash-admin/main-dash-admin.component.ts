import { Component, OnInit } from '@angular/core';
import {AdminService } from '../../services/admin.service';
import { User } from '../../admin/user/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-dash-admin',
  templateUrl: './main-dash-admin.component.html',
  styleUrls: ['./main-dash-admin.component.css']
})
export class MainDashAdminComponent implements OnInit {
  public AllticketsCount;
  public usersCount;
  public GroupeCount;
  public number=3;
  public showUserDetails = false;
  public imagePreview:string;
  formEdit:FormGroup;
  technicienId = localStorage.getItem('user');
  constructor(private userService : AdminService) { }
  public user:User;

  ngOnInit(): void {
    this.userService.getStats().subscribe((res:any)=>{
      this.usersCount = res.users;
      //this. clubsCount = res.teams;
      //this.title = res.title
    });
    this.userService.getStatstickets().subscribe((res:any)=>{
      this.AllticketsCount = res.tickets;
      //this. clubsCount = res.teams;
      //this.title = res.title
    });
    this.userService.getStatsgroupes().subscribe((res:any)=>{
      this.GroupeCount = res.groupes;
      //this. clubsCount = res.teams;
      //this.title = res.title
    });
    this.userService.getUser(JSON.parse(this.technicienId).userId) .subscribe(
      (resultat:any) => {
        console.log(resultat);
        this.user = resultat;
      
      });
      this.formEdit = new FormGroup({
        name: new FormControl(null,{validators:[Validators.required]}),
        email: new FormControl(null,{validators:[Validators.required]}),
         password: new FormControl(null,{validators:[Validators.required]}),
      //  type: new FormControl(null,{validators:[Validators.required]}),
       user_img: new FormControl(null,{validators:[Validators.required]}),
      });
  }
 // getUser(id:String)
 oneEditSubmit(){

  this.userService.EditAdmin(this.formEdit.value,JSON.parse(this.technicienId).userId);
  this.showUserDetails = false;
 
 
} 
  

  onClickShowForm(){
    this.showUserDetails = true;
    
  
  }
  onClickCloseForm(){
    this.showUserDetails = false;
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
}
