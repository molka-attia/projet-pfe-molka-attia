import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket.model';
import { tickets } from './tickets-list';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  public ticketsList : Ticket[] = tickets;
  public showTicketDetails = false;
  public showTicketaffectation = false;
  public currentticket=tickets[0];
  constructor() { }

  ngOnInit(): void {
  }
  onClickShowForm2(ticket:Ticket){
    this.showTicketDetails = true;
    this.currentticket=ticket;
ticket.opened="opened";
  }
  onClickCloseForm2(){
    this.showTicketDetails = false;
  }

  onClickShowAffecter(){
    this.showTicketaffectation = true;
   

  }
  onClickCloseAffecter(){
    this.showTicketaffectation = false;
  }

}
