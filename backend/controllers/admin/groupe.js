const mongoose = require('mongoose');
const Groupe = require('../../models/Groupe');


exports.getGroupes = (req, res, next) =>{
    Groupe.find({},{_id:1,specialite:1})
    .then(userResults => {res.json(userResults);console.log(userResults)});
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
    