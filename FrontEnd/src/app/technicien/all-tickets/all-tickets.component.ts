import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket.model';
import { tickets } from './tickets-list';
@Component({
  selector: 'app-all-tickets',
  templateUrl: './all-tickets.component.html',
  styleUrls: ['./all-tickets.component.css']
})
export class AllTicketsComponent implements OnInit {
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

  }
  onClickCloseForm2(){
    this.showTicketDetails = false;
  }
}
