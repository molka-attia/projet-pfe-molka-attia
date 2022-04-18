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
  tickets.find({'etat': { $ne: 'cloturer'}},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'Datecreaation':1,'_id':1}).sort({priorite:- 1,Datecreaation:1})
  .then(events => res.json(events));
}





// exports.getavailabletechnicien= (req, res, next) => {
//   tickets.find({'specialite':req.body.specialite},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'_id':1},{ $sortByCount:"$assignetech" })
//   .then(events => res.json(events));
// }

exports.getavailabletechnicien= (req, res, next) => {

  tickets.aggregate([
    {$match: {'specialite':req.body.specialite}}   // guessing this is noise so filter out
    // other $match could be used here to further shrink the data...
    ,{$group: {_id:"$assignetech", n:{$sum:1}}}
    ,{$match: {n: {$gt:1}}}  // ignore non-dupes
    ,{$sort: {_id: 1}} // and finally sort.
                ]);

   


   }
  






   exports.delete= (req, res, next) =>{
    tickets.deleteOne({_id:req.params.id})
    .then(userResults => res.json("succes"));
    }
    exports.getTechtickets = (req, res, next) => {
      tickets.find({'assignetech':req.params.id,'etat': { $ne: 'cloturer'}},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'Datecreaation':1,'_id':1}).sort({priorite:- 1,Datecreaation:1})
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
      tickets.find({'etat':'cloturer'},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'note':1,'Datecreaation':1,'Datecloturation':1,'_id':1}).sort({priorite:- 1,Datecreaation:1})
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
       
        { $match: { $and: [ { assignetech:req.params.id}, { etat:{ $ne: 'cloturer'} } ] } },
          // {$project : {"users" : {$size :"$users"},_id:0}}
         { $group:{_id:null, tickets:{$sum:1}}}
          ])
          .then(stats => {
              res.json(stats[0]);      
          });
  
     


     }





////////////////////////////////////////////////////userTicket/////////////////////////////////////////////////



     exports.getUsertickets = (req, res, next) => {
      tickets.find({'demandeur':req.params.id,'etat': { $ne: 'cloturer'}},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'_id':1}).sort({priorite:- 1,Datecreaation:1})
      .then(events => res.json(events));
  }


  exports.getUserticketscloturer = (req, res, next) => {
    tickets.find({'demandeur':req.params.id,'etat': 'cloturer'},{'description':1,'priorite':1,'demandeur':1,'assignetech':1,'etat':1,'specialite':1,'note':1,'_id':1}).sort({priorite:- 1,Datecreaation:1})
    .then(events => res.json(events));
}





     exports.userticketsnumber= (req, res, next) => {
      // users.find({},{_id:1})
    //    users.size().then(stats => {
    //                 res.json(stats);      
    //             });
    
        tickets.aggregate([
             {$match:{demandeur:req.params.id}},
            // {$project : {"users" : {$size :"$users"},_id:0}}
           { $group:{_id:null, tickets:{$sum:1}}}
            ])
            .then(stats => {
                res.json(stats[0]);      
            });
    
       
  
  
       }
        //  
        exports.userticketscloturernumber= (req, res, next) => {
          // users.find({},{_id:1})
        //    users.size().then(stats => {
        //                 res.json(stats);      
        //             });
        
            tickets.aggregate([
              { $match: { $and: [ { demandeur:req.params.id}, { etat:"cloturer" } ] } },
                // {$project : {"users" : {$size :"$users"},_id:0}}
               { $group:{_id:null, tickets:{$sum:1}}}
                ])
                .then(stats => {
                    res.json(stats[0]);      
                });
      
           }
           exports.userticketsnoncloturernumber= (req, res, next) => {
            // users.find({},{_id:1})
          //    users.size().then(stats => {
          //                 res.json(stats);      
          //             });
          
              tickets.aggregate([
                { $match: { $and: [ { demandeur:req.params.id}, { etat:{ $ne: 'cloturer'} } ] } },
                  // {$project : {"users" : {$size :"$users"},_id:0}}
                 { $group:{_id:null, tickets:{$sum:1}}}
                  ])
                  .then(stats => {
                      res.json(stats[0]);      
                  });
        
             }