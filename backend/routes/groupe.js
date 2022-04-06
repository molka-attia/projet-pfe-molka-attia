const express = require('express');
const router = express.Router();
const User=require('./../models/User');
const Ticket=require('./../models/Ticket');
const Groupe=require('./../models/Groupe');
const bcrypt = require('bcrypt');
const userController = require('../controllers/admin/users');
const GroupeController = require('../controllers/admin/groupe');
const auth=require('../middlewares/auth');

router.get('/getgroupes', GroupeController.getGroupes);
router.post('/ajoutergroupe',(req, res, next) => {
        const groupe = new Groupe({
      specialite: req.body.specialite,
    });
  
    groupe.save()
      .then(() => res.status(201).json({
        message: 'groupe created !',
        status: 201
      }))
      .catch(error => res.status(400).json({
        error
      }));
  })
  router.delete('/:id/deletegroupe',GroupeController.deleteGroupe)
  router.put('/:id/modifiergroupe',GroupeController.updateGroupe)
module.exports = router;