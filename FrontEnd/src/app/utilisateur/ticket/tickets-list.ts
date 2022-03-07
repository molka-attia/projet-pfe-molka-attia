import { Ticket } from "./ticket.model";


export const tickets: Ticket[] = [
  {
    id:"1",
    description: 'my laptop is not working',
    priorite:"urgent",
    demandeur: 'John Doe',
    assignetech:'Emily',
    etat:"non cloture",
    opened:"closed"
  },
  {
    id:"2",
    description: 'the mouse is not working',
    priorite:"moyenne",
    demandeur: 'John Doe2',
    assignetech:'Emily',
    etat:"non cloture",
    opened:"closed"
  },  
  {
    id:"3",
    description: 'the mouse is not working',
    priorite:"faible",
    demandeur: 'John Doe2',
    assignetech:'Emily',
    etat:"non cloture",
    opened:"closed"
  },  
];
