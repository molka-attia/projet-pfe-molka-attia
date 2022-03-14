const mongoose = require('mongoose');
const tickets = require('../../models/Ticket');

// exports.getTickets = (req, res, next) =>{
//     tickets.find({},{_id:1,description:1,priorite:1,demandeur:1,assignetech:1,etat:1,opened:1})
//     .then(ticketResults => {res.json(ticketResults);console.log(ticketResults)});
// }

exports.getTickets = (req, res, next) =>{
tickets.aggregate([
    {$project: {_id:1,description:1,priorite:1,demandeur:1,assignetech:1,etat:1,opened:1}},
    {
      $lookup:{
        from:"users",
        localField:"demandeur",
        foreignField:"_id",
        as:"user"
      }
    }
  ])
  .then(ticketResults => {res.json(ticketResults);console.log(ticketResults)});
   }

// description?:string;
// priorite?:string;
// demandeur?:string;
// assignetech?:string;
// etat?:string;
// opened?:string;