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

   exports.delete= (req, res, next) =>{
    tickets.deleteOne({_id:req.params.id})
    .then(userResults => res.json("succes"));
    }

    exports.getTechtickets = (req, res, next) => {
      tickets.find({'assignetech':req.params.id},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'opened':1,'_id':0})
      .then(events => res.json(events));
  }

  exports.getUsertickets = (req, res, next) => {
    tickets.find({'demandeur':req.params.id},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'opened':1,'_id':0})
    .then(events => res.json(events));
}
  
// description?:string;
// priorite?:string;
// demandeur?:string;
// assignetech?:string;
// etat?:string;
// opened?:string;