import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../admin/user/user.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  // private userUpdated = new Subject<User[]>();
  constructor(private http:HttpClient) { }
  API_URL: string = 'http://localhost:3000/api/users';

  getUsers(){
    
    return this.http.get<any>(`http://localhost:3000/api/users`);
  }

}
