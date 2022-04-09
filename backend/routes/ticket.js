const express = require('express');
const router = express.Router();
const User=require('./../models/User');
const Ticket=require('./../models/Ticket');
const bcrypt = require('bcrypt');
const userController = require('../controllers/admin/users');
const ticketController = require('../controllers/admin/tickets');
const auth=require('../middlewares/auth');

const multer = require('multer');
const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};
const storageEvents = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './../FrontEnd/src/assets/images');
    },
    filename: function (req, file, cb) {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext= MIME_TYPE_MAP[file.mimetype];
        cb(null, Date.now()+ '-' +name);
    }
});


router.get('/:id/getTechtickets',auth,ticketController.getTechtickets);
router.get('/:id/getUsertickets',auth,ticketController.getUsertickets);
router.get('/ticketscloturer',ticketController.getTicketscloturer);
 
router.delete('/:id/deleteticket',auth,ticketController.delete)


router.post('/:id/addticket' ,auth,(req, res, next) => {
    
   
      const ticket = new Ticket({
        description: req.body.description,
        priorite: req.body.priorite,
        demandeur: req.params.id,
        assignetech:'',
        etat:'non cloturer',
        specialite:req.body.specialite,
        Datecreaation:new Date(),
        Datecloturation:'',
      });
    
      ticket.save()
        .then(() => res.status(201).json({
          message: 'Ticket created !',
          status: 201
        }))
        .catch(error => res.status(400).json({
          error
        }));
    })
    
    router.put('/:id/affecterautechnicien',auth,(req, res, next) => {
      const id=req.params.id;
      const ticket = new Ticket({
         
          
          assignetech:req.body.assignetech,
       
          
        });  
     
           Ticket.updateOne({"_id":id},{"$set":{"assignetech":req.body.assignetech}})
           .then(resultat=> console.log(resultat)) 
           
           // .then(() => res.status(201).json({
             //   message: 'User modified !',
             //   status: 201
             // }))
             .catch(error => res.status(400).json({
               error
             }));
     
     
     });
      
     router.put('/:id/clotureticket',auth,(req, res, next) => {
      const id=req.params.id;
     
     
           Ticket.updateOne({"_id":id},{"$set":{"etat":'cloturer',"Datecloturation":new Date(),"note":req.body.note}})
           .then(resultat=> console.log(resultat)) 
           
           // .then(() => res.status(201).json({
             //   message: 'User modified !',
             //   status: 201
             // }))
             .catch(error => res.status(400).json({
               error
             }));
     
     
     });
      
    
     







    router.put('/:id/editticket',auth,(req, res, next) => {
    
   
        const id=req.params.id;
      
        const ticket = new Ticket({
            description: req.body.description,
            priorite: req.body.priorite,
            demandeur: req.params.id,
            assignetech:'',
            etat:'non cloturer',
            opened:'closed',
            Datecreaation:new Date(),
            Datecloturation:'',
          });  
       
             Ticket.updateOne({"_id":id},{"$set":{"description":req.body.description,"priorite":req.body.priorite}})
             .then(resultat=> console.log(resultat)) 
             
             // .then(() => res.status(201).json({
               //   message: 'User modified !',
               //   status: 201
               // }))
               .catch(error => res.status(400).json({
                 error
               }));
       
       
       });
        
      
       




    // description: {type: String, required: false},
    // priorite: {type: String, required: false},
    // demandeur: {type: String, required: false},
    // assignetech:{type: String, required: false},
    // etat:{type: String, required: false},
    // opened:{type: String, required: false},
    // Dateopening:{type: Date, required: false},
    // Datecloturation:{type: Date, required: false},
//////////////////////////////////////// Stats ////////////////////////////////////////
//router.get('/stats',auth, userController.getStats);
router.get('/statsalltickets', auth,ticketController.getTicketsnumber);
router.get('/:id/statstechtickets',auth, ticketController.getTicketstechnumber);
module.exports = router;