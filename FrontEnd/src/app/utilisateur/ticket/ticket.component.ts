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
 
  constructor() { }

  ngOnInit(): void {
  }

}
