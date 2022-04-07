const mongoose = require('mongoose');
const Groupe = require('../../models/Groupe');


exports.getGroupes = (req, res, next) =>{
    Groupe.find({},{_id:1,specialite:1})
    .then(userResults => {res.json(userResults);console.log(userResults)});
}



exports.getTechnicienspecialite = (req, res, next) => {
    Groupe.find({'_id':req.params.id},{_id:0,'specialite':1})
    .then(events => res.json(events));
}





exports.deleteGroupe= (req, res, next) =>{
    Groupe.deleteOne({_id:req.params.id})
    .then(userResults => res.json("succes"));
    }

    exports.updateGroupe = (req, res, next) => {
        Groupe.updateOne({'id':req.params.id},
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