import { Ticket } from "../ticket/ticket.model";

export interface User {
  _id?: string;
  name?:string;
  password?:string;
  user_img?:string;
  email?:string;
  type?:string;
  groupe_id?:string;
  user_ticket?:Ticket;
  numberOftickets?:number;
}


