import { Groupe } from "../groupe/groupe.model";

export interface User {
  _id?: string;
  name?:string;
  password?:string;
  user_img?:string;
  email?:string;
  type?:string;
  technicien_groupe?:Groupe;
}


