import { Component,  OnDestroy, OnInit  } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-main-dash-all',
  templateUrl: './main-dash-all.component.html',
  styleUrls: ['./main-dash-all.component.css']
})
export class MainDashAllComponent implements OnInit ,OnDestroy {
  private authListenerSubs : Subscription;
  private typeListenerSubs : Subscription;
  userIsAuthenticated = false;
  userType:string;
  technicien : boolean;
  utilisateur : boolean;
  admin:boolean=false;
token2:any;

  constructor(
    public authService : AuthService,
    ) { }

    ngOnInit(): void {
      this.authListenerSubs= this.authService.getAuthStatusListener().subscribe(isAuthenticated=>{
        this.userIsAuthenticated= isAuthenticated;
      });
      const token = localStorage.getItem('id_token');
      if(token){
        this.userIsAuthenticated=true;
      }
      const type = JSON.parse(localStorage.getItem('user')).type;
      if(type=="technicien"){
        this.technicien=true;
        this.utilisateur=false;
      }
      if(type=="admin"){
        this.admin=true;
        this.utilisateur=false;
      }
      if(type=="utilisateur"){
        this.utilisateur=true;
      }
      else{this.admin=false;
      
      }
      this.typeListenerSubs = this.authService.getTypeListener().subscribe(type=>{
        this.userType = type;

        if(type=='technicien'){
          this.technicien = true;
          this.admin=false;
          this.utilisateur=false;
        }
        else if(type=='utilisateur'){
          this.technicien = false;
          this.admin=false;
          this.utilisateur=true;
        }
        else{
          this.admin=true;
          this.technicien = false;
          
        }

      });





      


    }
    ngOnDestroy(): void {
      // this.typeListenerSubs.unsubscribe();
      // this.authListenerSubs.unsubscribe();
    }
  onLogoutClick() {
    this.authService.logout();
  }
}
