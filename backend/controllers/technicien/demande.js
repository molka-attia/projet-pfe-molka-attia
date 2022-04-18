const mongoose = require('mongoose');
const Demande = require('../../models/Demande');
const users = require('../../models/User');


exports.getDemandes = (req, res, next) =>{
    Demande.find({'recepteur_id':req.params.id},{_id:1,contenu:1,recepteur_id:1,emetteur_id:1,ticket_id:1,Datecreaation:1,Datereponse:1,etat:1})
    .then(userResults => {res.json(userResults);console.log(userResults)});
}

exports.repondredemande = (req, res, next) => {
    Demande.updateOne({'_id':req.params.id},
    {'$set':{
        'etat':req.body.etat,
        'Datereponse':new Date()
             
    }})
    .then(post => res.json(post));
}



//////////////////////////////////statistiques///////////////////////////////////
exports.getStats = (req, res, next) => {
    Demande.aggregate([
           {$match:{
               recepteur_id :req.params.id}},
          // {$project : {"users" : {$size :"$users"},_id:0}}
         { $group:{_id:null, demandes:{$sum:1}}}
          ])
          .then(stats => {
              res.json(stats[0]);      
          });
  
     }

     exports.getStatsemetteur = (req, res, next) => {
        Demande.aggregate([
              // {$match:{emetteur_id :req.params.id}},
              { $match: { $and: [ { emetteur_id:req.params.id}, { etat: 'pending'} ] } },
              // {$project : {"users" : {$size :"$users"},_id:0}}
             { $group:{_id:null, demandes:{$sum:1}}}
              ])
              .then(stats => {
                  res.json(stats[0]);      
              });
      
         }   