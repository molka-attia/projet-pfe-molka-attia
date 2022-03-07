import { Component, OnInit } from '@angular/core';
import { Ticket } from './ticket.model';
import { tickets } from './tickets-list';
@Component({
  selector: 'app-tech-tickets',
  templateUrl: './tech-tickets.component.html',
  styleUrls: ['./tech-tickets.component.css']
})
export class TechTicketsComponent implements OnInit {
  public ticketsList : Ticket[] = tickets;
  constructor() { }

  ngOnInit(): void {
  }

}
