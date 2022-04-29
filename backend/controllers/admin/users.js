const mongoose = require('mongoose');
const users = require('../../models/User');
const tickets = require('../../models/Ticket');


exports.getUsers = (req, res, next) =>{
    users.find({'type': { $ne: 'technicien'}},{_id:1,name:1,email:1,password:1,type:1,user_img:1})
    .then(userResults => {res.json(userResults);console.log(userResults)});
}







exports.getTechniciens = (req, res, next) =>{
    users.find({type:"technicien" },{_id:1,name:1,email:1,password:1,type:1,user_img:1})
    .then(userResults => {res.json(userResults);console.log(userResults)});
}

exports.getadmin = (req, res, next) =>{
    users.find({type:"admin" },{_id:1,name:1,email:1,password:1,type:1,user_img:1})
    .then(userResults => {res.json(userResults);console.log(userResults)});
}

// exports.getOneUser = (req, res, next) =>{
//     users.find({_id:req.params.id},{_id:1,name:1,email:1,password:1,type:1,user_img:1})
//     .then(userResults => res.json(userResults[0]));
// }

exports.delete= (req, res, next) =>{
users.deleteOne({_id:req.params.id})
.then(userResults => res.json("succes"));
}


exports.getTechniciensofthegroupe = (req, res, next) =>{
    users.find({groupe_id:req.params.id },{_id:1,name:1,email:1,password:1,type:1,user_img:1})
    .then(userResults => {res.json(userResults);console.log(userResults)});
}


exports.getequipe= (req, res, next) =>{
    users.findOne({_id:req.params.id },{_id:0,groupe_id:1})
    .then(userResults => {res.json(userResults);console.log(userResults)});
}





// exports.getStats = (req, res, next) => {
//   // users.find({},{_id:1})
// //    users.size().then(stats => {
// //                 res.json(stats);      
// //             });

//     users.aggregate([
//         // {$match:{_id :mongoose.Types.ObjectId()}},
//         // {$project : {"users" : {$size :"$users"},_id:0}}
//        { $group:{_id:null, users:{$sum:1}}}
//         ])
//         .then(stats => {
//             res.json(stats[0]);      
//         });

//    }
//    exports.getStatsclubs = (req, res, next) => {
//     // users.find({},{_id:1})
//   //    users.size().then(stats => {
//   //                 res.json(stats);      
//   //             });
  
//       clubs.aggregate([
//           // {$match:{_id :mongoose.Types.ObjectId()}},
//           // {$project : {"users" : {$size :"$users"},_id:0}}
//          { $group:{_id:null, clubs:{$sum:1}}}
//           ])
//           .then(stats => {
//               res.json(stats[0]);      
//           });
  
//      }

exports.getStats = (req, res, next) => {
    // users.find({},{_id:1})
  //    users.size().then(stats => {
  //                 res.json(stats);      
  //             });
  
      users.aggregate([
          // {$match:{_id :mongoose.Types.ObjectId()}},
          // {$project : {"users" : {$size :"$users"},_id:0}}
         { $group:{_id:null, users:{$sum:1}}}
          ])
          .then(stats => {
              res.json(stats[0]);      
          });
  
     }



exports.getStatsnombreTechnicien= (req, res, next) => {
    // users.find({},{_id:1})
  //    users.size().then(stats => {
  //                 res.json(stats);      
  //             });
  
      users.aggregate([
          {$match:{type:"technicien"}},
          // {$project : {"users" : {$size :"$users"},_id:0}}
         { $group:{_id:null, techniciens:{$sum:1}}}
          ])
          .then(stats => {
              res.json(stats[0]);      
          });
  
     }









     exports.getOneUser = (req, res, next) =>{
        users.find({_id:req.params.id},{_id:1,name:1,email:1,password:1,type:1,user_img:1,groupe_id:1})
        .then(userResults => res.json(userResults[0]));
    }
    exports.getUserName = (req, res, next) =>{
        users.find({_id:req.params.id},{_id:0,name:1})
        .then(userResults => res.json(userResults[0]));
    }


    exports.gettechniciensofthesamegroupe= (req, res, next) =>{
        users.find({_id:req.params.id},{_id:0,name:1})
        .then(userResults => res.json(userResults[0]));
    }



    exports.getnombredeticketpertechnicien  =  (req, res, next) =>{
     users.aggregate([
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
          "foreignField": "assignetech",
          "as": "user_ticket",
          pipeline: [
            { $match: { "etat":"non cloturer" } }
         ],
        }},
        {$match:{type:"technicien"}},
        {$project: {
            name:1,
            email:1,
            user_img:1,
            user_ticket: 1,
            groupe_id:1,
            numberOftickets: { $size: "$user_ticket"  }
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
exports.getnombredeticketcloturerpertechnicien  =  (req, res, next) =>{
    users.aggregate([
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
         "foreignField": "assignetech",
         "as": "user_ticket",
         pipeline: [
           { $match: { "etat":"cloturer" } }
        ],
       }},
       {$match:{type:"technicien"}},
       {$project: {
           name:1,
           email:1,
           user_img:1,
           user_ticket: 1,
           groupe_id:1,
           numberOftickets: { $size: "$user_ticket"  }
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

exports.getnombredetickettotalpertechnicien  =  (req, res, next) =>{
    users.aggregate([
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
         "foreignField": "assignetech",
         "as": "user_ticket",
        //  pipeline: [
        //    { $match: { "etat":"non cloturer" } }
        // ],
       }},
       {$match:{type:"technicien"}},
       {$project: {
           name:1,
           email:1,
           user_img:1,
           user_ticket: 1,
           groupe_id:1,
           numberOftickets: { $size: "$user_ticket"  }
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
