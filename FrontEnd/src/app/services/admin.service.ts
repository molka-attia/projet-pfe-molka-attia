import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ticket } from '../admin/ticket/ticket.model';
import { User } from '../admin/user/user.model';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
 
  private head = this.getHeaders().headers;
  getHeaders(){
    const token = localStorage.getItem('id_token');
    const id = JSON.parse(localStorage.getItem('user')).userId;
    return {
      headers: {
        'Authorization': 'Bearer ' + token,
        'userId': id
      }
    };
  }
  // private userUpdated = new Subject<User[]>();
  constructor(private http:HttpClient) { }
  API_URL: string = 'http://localhost:3000/api/users';

  private userUpdated = new Subject<User[]>();

  getUsers(){
    
    return this.http.get<any>(`http://localhost:3000/api/users`,{headers:this.head});
  }
  getTechniciens() {
    return this.http.get<any>(`http://localhost:3000/api/users/gettechniciens`,{headers:this.head});
  }




  getTickets(){
    
    return this.http.get<any>(`http://localhost:3000/api/users/tickets`,{headers:this.head});
  }

  addUser(user:User){
    const userData = new FormData();
    userData.append('name',user.name);
    userData.append('email',user.email);
    userData.append('password',user.password);
    userData.append('type',user.type);
    userData.append('user_img',user.user_img);

  //  userData.append('club_id',JSON.parse(localStorage.getItem('user')).club_id);

    //console.log(userData);
     this.http.post(`http://localhost:3000/api/users/addUser`,userData,{headers:this.head})
     .subscribe(res=>{
       console.log(res);


    });
  }
  getUser(id:String){
    return this.http.get(`http://localhost:3000/api/users/${id}/getuser`,{headers:this.head});
    
    }
  
  EditUser(user:User,id:string){

    const userData = new FormData();
    userData.append('name',user.name);
    userData.append('email',user.email);
    userData.append('type',user.type);
    // userData.append('password',user.password);
    userData.append('user_img',user.user_img);

  //  userData.append('club_id',JSON.parse(localStorage.getItem('user')).club_id);

    //console.log(userData);
     this.http.put(`http://localhost:3000/api/users/${id}/editUser`,userData,{headers:this.head})
     .subscribe(res=>{
       console.log(res);


    }); 
  }



  DeleteUser(id:string){
    this.http.delete(`http://localhost:3000/api/users/${id}/deleteuser`,{headers:this.head})
    .subscribe(res=>{
      console.log(res);
  
  
   }); 
  }
  
  DeleteTicket(id:string){
    this.http.delete(`http://localhost:3000/api/tickets/${id}/deleteticket`,{headers:this.head})
    .subscribe(res=>{
      console.log(res);
  
  
   }); 
  }


  addTicket(description:string,priorite:string,id:string){
   // const ticketData = new FormData();
   const ticketData = {description:description,priorite:priorite}
  //  ticketData.append('description',description);
    //ticketData.append('priorite',priorite);

  //console.log(description);
    //console.log(userData);
     this.http.post(`http://localhost:3000/api/tickets/${id}/addticket`,ticketData,{headers:this.head})
     .subscribe(res=>{
       console.log(res);


    });
  }

  EditTicket(description:string,priorite:string,id:string){
    // const ticketData = new FormData();
    const ticketData = {description:description,priorite:priorite}
   //  ticketData.append('description',description);
     //ticketData.append('priorite',priorite);
 
   //console.log(description);
     //console.log(userData);
      this.http.put(`http://localhost:3000/api/tickets/${id}/editticket`,ticketData,{headers:this.head})
      .subscribe(res=>{
        console.log(res);
 
 
     });
   }
   EditCloturer(id:string){

    //  userData.append('club_id',JSON.parse(localStorage.getItem('user')).club_id);
    const ticketData = {}
      //console.log(userData);
       this.http.put(`http://localhost:3000/api/tickets/${id}/clotureticket`,ticketData,{headers:this.head})
       .subscribe(res=>{
         console.log(res);
    
    
      }); 
    }
   
   EditAffecter(assignetech:string,id:string){
    // const ticketData = new FormData();
    const ticketData = {assignetech:assignetech}
   //  ticketData.append('description',description);
     //ticketData.append('priorite',priorite);
 
   //console.log(description);
     //console.log(userData);
      this.http.put(`http://localhost:3000/api/tickets/${id}/affecterautechnicien`,ticketData,{headers:this.head})
      .subscribe(res=>{
        console.log(res);
 
 
     });
   }
 

  getTicketsTech(id:string){
    
    return this.http.get<any>(`http://localhost:3000/api/tickets/${id}/getTechtickets`,{headers:this.head});
  }
  getTicketsUser(id:string){
    
    return this.http.get<any>(`http://localhost:3000/api/tickets/${id}/getUsertickets`,{headers:this.head});
  }
  getStats(){
    return this.http.get(`http://localhost:3000/api/users/stats`,{headers:this.head});

  }

}
