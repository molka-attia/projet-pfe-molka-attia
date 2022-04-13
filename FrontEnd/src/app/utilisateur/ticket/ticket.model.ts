export interface Ticket {
  _id?: string;
  description?:string;
  priorite?:string;
  demandeur?:string;
  assignetech?:string;
  etat?:string;
  specialite?:string;
  Dateopening?:Date;
  Datecloturation?:Date;
  note?:string;
}

//  Dateopening:{type: Date, required: false},
//Datecloturation:{type: Date, required: false},