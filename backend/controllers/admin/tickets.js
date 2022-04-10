const mongoose = require('mongoose');
const tickets = require('../../models/Ticket');

// exports.getTickets = (req, res, next) =>{
//     tickets.find({},{_id:1,description:1,priorite:1,demandeur:1,assignetech:1,etat:1,opened:1})
//     .then(ticketResults => {res.json(ticketResults);console.log(ticketResults)});
// }

// exports.getTickets = (req, res, next) =>{
// tickets.aggregate([
//     {$project: {_id:1,description:1,priorite:1,demandeur:1,assignetech:1,etat:1,opened:1,Datecreaation:1,Datecloturation:1}},
    
//     {
//       $lookup:{
//         from:"users",
//         localField:"demandeur",
//         foreignField:"_id",
//         as:"user"
//       }
//     },{ $sort: {priorite:- 1,Datecreaation:1 } },
//   ])
//   .then(ticketResults => {res.json(ticketResults);console.log(ticketResults)});
//    }

exports.getTickets= (req, res, next) => {
  tickets.find({'etat': { $ne: 'cloturer'}},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'_id':1}).sort({priorite:- 1,Datecreaation:1})
  .then(events => res.json(events));
}




exports.getavailabletechnicien= (req, res, next) => {
  tickets.find({'specialite':req.body.specialite},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'_id':1},{ $sortByCount:"$assignetech" })
  .then(events => res.json(events));
}








   exports.delete= (req, res, next) =>{
    tickets.deleteOne({_id:req.params.id})
    .then(userResults => res.json("succes"));
    }
    exports.getTechtickets = (req, res, next) => {
      tickets.find({'assignetech':req.params.id},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'_id':1}).sort({priorite:- 1,Datecreaation:1})
      .then(events => res.json(events));
  }

  exports.affecterautechnicien = (req, res, next) => {
    tickets.updateOne({'id':req.params.id},
    {'$set':{
        'assignetech':req.body.specialite,
             
    }})
    .then(post => res.json(post));
}





    exports.getTicketscloturer = (req, res, next) => {
      tickets.find({'etat':'cloturer'},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'note':1,'_id':1}).sort({priorite:- 1,Datecreaation:1})
      .then(events => res.json(events));
  }

  exports.getUsertickets = (req, res, next) => {
    tickets.find({'demandeur':req.params.id},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'_id':1}).sort({priorite:- 1,Datecreaation:1})
    .then(events => res.json(events));
}
  
// description?:string;
// priorite?:string;
// demandeur?:string;
// assignetech?:string;
// etat?:string;
// opened?:string;
exports.getTicketsnumber = (req, res, next) => {
  // users.find({},{_id:1})
//    users.size().then(stats => {
//                 res.json(stats);      
//             });

    tickets.aggregate([
        // {$match:{_id :mongoose.Types.ObjectId()}},
        // {$project : {"users" : {$size :"$users"},_id:0}}
        {$match:{etat:"non cloturer"}},
       { $group:{_id:null, tickets:{$sum:1}}}
        ])
        .then(stats => {
            res.json(stats[0]);      
        });

   }

   exports.getTicketstechnumber= (req, res, next) => {
    // users.find({},{_id:1})
  //    users.size().then(stats => {
  //                 res.json(stats);      
  //             });
  
      tickets.aggregate([
           {$match:{assignetech:req.params.id}},
          // {$project : {"users" : {$size :"$users"},_id:0}}
         { $group:{_id:null, tickets:{$sum:1}}}
          ])
          .then(stats => {
              res.json(stats[0]);      
          });
  



     }