import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  users() {
    this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
