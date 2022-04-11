import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';



import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  name:string;
  email:string;
  password:string;
  formSignUp:FormGroup;
  formLogin:FormGroup;
  imagePreview:string;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.formSignUp= new FormGroup({
      name: new FormControl(null,{validators:[Validators.required]}),
      email: new FormControl(null,{validators:[Validators.required , Validators.email]}),
      password: new FormControl(null,{validators:[Validators.required, Validators.minLength(6)]}),
   
      user_img: new FormControl(null,{validators:[Validators.required]}),

    });

    this.formLogin= new FormGroup({
      email: new FormControl(null,{validators:[Validators.required , Validators.email]}),
      password: new FormControl(null,{validators:[Validators.required]})
    });

  }



  onSigninSubmit(){
    this.authService.login(this.formLogin.value);
  }

  onSignUpSubmit(){
  
    this.authService.signup(this.formSignUp.value,this.formSignUp);
 
  }

  onImagePicked(event :Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.formSignUp.patchValue({user_img:file});
    this.formSignUp.get('user_img').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);

  }

 

}
