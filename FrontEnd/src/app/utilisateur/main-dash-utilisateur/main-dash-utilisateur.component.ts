import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {AdminService } from '../../services/admin.service';
import { users } from '../../admin/user/users-list';
import { User } from '../../admin/user/user.model';
import { groupes } from 'src/app/admin/groupe/groupes-list';
import {Groupe} from 'src/app/admin/groupe/groupe.model';

@Component({
  selector: 'app-main-dash-utilisateur',
  templateUrl: './main-dash-utilisateur.component.html',
  styleUrls: ['./main-dash-utilisateur.component.css']
})
export class MainDashUtilisateurComponent implements OnInit {
  technicienId = localStorage.getItem('user');
  constructor(private userService : AdminService) { }
  public user:User;
  public technicienaffecte:User;
  ngOnInit(): void {

    this.userService.getUser(JSON.parse(this.technicienId).userId) .subscribe(
      (resultat:any) => {
        console.log(resultat);
        this.user = resultat;
      
      });
  }
 // getUser(id:String)
 
}
