const mongoose = require('mongoose');
const Groupe = require('../../models/Groupe');
const users = require('../../models/User');
const tickets = require('../../models/Ticket');

// exports.getGroupes = (req, res, next) =>{
//     Groupe.find({},{_id:1,specialite:1})
//     .then(userResults => {res.json(userResults);console.log(userResults)});
// }


exports.getGroupes=  (req, res, next) =>{
    
    Groupe.aggregate([
        // {$set: {groupe_id: {$toObjectId: "$groupe_id"} }},
        // {
        //     $lookup: {
        //         from: 'users',
        //         localField: '_id',
        //         foreignField: 'groupe_id',
        //         as: 'user_groupe'
        //     }
        { "$addFields": { "_id": { "$toString": "$_id" }}},
        { "$lookup": {
          "from": "users",
          "localField": "_id",
          "foreignField": "groupe_id",
          "as": "membre_groupe"
        }},
        { "$lookup": {
            "from": "tickets",
            "localField": "_id",
            "foreignField": "specialite",
            "as": "ticket_groupe"
          }},
          {$project: {
            specialite:1,
           
            membre_groupe: 1,
            ticket_groupe:1,
            numberOftickets: {$size: "$ticket_groupe"  },
            // numberOfticketscloturer: { $cond: { if: {'etat':"non cloturer" }, then: {$sum: 1 }, else: 0 } }
         }}
        //])
        //,
        // {$sort:{
        //     Datecreaation:-1}},
        // {
        //     $match: {
        //         'emetteur_id': req.params.id
        //     }
        // }
    
    ])
    .then(userResults => {res.json(userResults);console.log(userResults)});
}



exports.getGroupescloturer=  (req, res, next) =>{
    
    Groupe.aggregate([
        // {$set: {groupe_id: {$toObjectId: "$groupe_id"} }},
        // {
        //     $lookup: {
        //         from: 'users',
        //         localField: '_id',
        //         foreignField: 'groupe_id',
        //         as: 'user_groupe'
        //     }
        { "$addFields": { "_id": { "$toString": "$_id" }}},
      
        { "$lookup": {
            "from": "tickets",
            "localField": "_id",
            "foreignField": "specialite",
            "as": "ticket_groupe",
            pipeline: [
                { $match: { "etat":"cloturer" } }
             ],
          }},
        //    {
        //     $match: {
        //         'ticket_groupe.etat': "/cloturer/"
        //     }
        // },
          {$project: {
            specialite:1,
           
         
            ticket_groupe:1,
            numberOftickets: {$size: "$ticket_groupe"  },
            // numberOfticketscloturer: { $cond: { if: {'etat':"non cloturer" }, then: {$sum: 1 }, else: 0 } }
         }},
        //])
        //,
        // {$sort:{
        //     Datecreaation:-1}},
       
    
    ])
    .then(userResults => {res.json(userResults);console.log(userResults)});
}








exports.getTechnicienspecialite = (req, res, next) => {
    Groupe.findOne({'_id':req.params.id},{_id:1,'specialite':1})
    .then(events => res.json(events));
}





exports.deleteGroupe= (req, res, next) =>{
    Groupe.deleteOne({_id:req.params.id})
    .then(userResults => res.json("succes"));
    }

    exports.updateGroupe = (req, res, next) => {
        Groupe.updateOne({'_id':req.params.id},
        {'$set':{
            'specialite':req.body.specialite,
                 
        }})
        .then(post => res.json(post));
    }
    

    exports.getGroupesnumber= (req, res, next) => {
        // users.find({},{_id:1})
      //    users.size().then(stats => {
      //                 res.json(stats);      
      //             });
      
          Groupe.aggregate([
            //    {$match:{assignetech:req.params.id}},
              // {$project : {"users" : {$size :"$users"},_id:0}}
             { $group:{_id:null, groupes:{$sum:1}}}
              ])
              .then(stats => {
                  res.json(stats[0]);      
              });
      
         }



         exports.ticketspergroupe= (req, res, next) => {
            // users.find({},{_id:1})
          //    users.size().then(stats => {
          //                 res.json(stats);      
          //             });
          
              tickets.aggregate([
                   //{$match:{demandeur:req.params.id}},
                  // {$project : {"users" : {$size :"$users"},_id:0}}
                 { $group:{"tickets.specialite":1, tickets:{$sum:1}}}
                  ])
                  .then(stats => {
                      res.json(stats);      
                  });
          
             
        
        
             }