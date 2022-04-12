import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {
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
