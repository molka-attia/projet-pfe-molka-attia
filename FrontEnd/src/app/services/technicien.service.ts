import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Ticket } from '../admin/ticket/ticket.model';
import { User } from '../admin/user/user.model';
import { Groupe } from '../admin/groupe/groupe.model';
import { Publication } from '../technicien/publication/publication.model';

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {

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


///:id

  
  getPublications(){
    
    return this.http.get<any>(`http://localhost:3000/api/publication/getpublications`,{headers:this.head});
  }


  getPublicationsgroupe(id:String){
    ///:id/getpublicationsgroupe
    return this.http.get<any>(`http://localhost:3000/api/publication/${id}/getpublicationsgroupe`,{headers:this.head})
  }

  getCommentaires(id:String){
    return this.http.get(`http://localhost:3000/api/commentaire/${id}/getCommentaires`,{headers:this.head});
    
    }




    addCommentaire(contenu:String,user_id:String,publication_id:String) {
      const CommentaireData = {contenu:contenu,user_id:user_id,publication_id:publication_id}
    
  
       this.http.post(`http://localhost:3000/api/commentaire/ajoutercommentaire`,CommentaireData,{headers:this.head})
       .subscribe(res=>{
         console.log(res);
  
  
      });
   
    }



    addPublication(contenu:String,user_id:String,groupe_id:String) {
      const PublicationData = {contenu:contenu,user_id:user_id,groupe_id:groupe_id}
    
  
       this.http.post(`http://localhost:3000/api/publication/ajouterpublication`,PublicationData,{headers:this.head})
       .subscribe(res=>{
         console.log(res);
  
  
      });
   
    }





}
