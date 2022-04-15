import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicationgroupe',
  templateUrl: './publicationgroupe.component.html',
  styleUrls: ['./publicationgroupe.component.css']
})
export class PublicationgroupeComponent implements OnInit {
  public show=0;
  constructor() { }

  ngOnInit(): void {
  }
  onshow(){
    if(this.show==0){
     this.show=1;
    }
    else{
      this.show=0;
    }
  }
}
