import { Component, OnInit } from '@angular/core';
import {AdminService } from '../../services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-main-dash-technicien',
  templateUrl: './main-dash-technicien.component.html',
  styleUrls: ['./main-dash-technicien.component.css']
})
export class MainDashTechnicienComponent implements OnInit {
  technicienId = localStorage.getItem('user');
  public AllticketsCount;
  public techticketscount;
  public user;
  public imagePreview:string;
  formaddUser:FormGroup;
  public showEditUserForm=false;
  
  formEdit:FormGroup;
  
  constructor(private userService : AdminService) {
   
   }
    


  ngOnInit(): void {
    this.userService.getStatstickets().subscribe((res:any)=>{
      this.AllticketsCount = res.tickets;
      //this. clubsCount = res.teams;
      //this.title = res.title
    });
    this.userService.getStatstechtickets(JSON.parse(this.technicienId).userId).subscribe((res:any)=>{
      this.techticketscount = res.tickets;
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
      // type: new FormControl(null,{validators:[Validators.required]}),
       user_img: new FormControl(null,{validators:[Validators.required]}),
  
      });
    }
    oneEditSubmit(){

      this.userService.EditTechnicien(this.formEdit.value,JSON.parse(this.technicienId).userId);
      this.showEditUserForm = false;
     
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
    onClickCloseForm(){
      this.showEditUserForm = false;
    }
    onClickShowForm(){
     
  this.showEditUserForm=true;
    }

  
}
