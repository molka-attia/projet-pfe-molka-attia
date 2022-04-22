const express = require('express');
const router = express.Router();
const User=require('./../models/User');
const Ticket=require('./../models/Ticket');
const bcrypt = require('bcrypt');
const userController = require('../controllers/admin/users');
const ticketController = require('../controllers/admin/tickets');
const auth=require('../middlewares/auth');
const nodemailer = require("nodemailer");

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

router.get('/:id/getuser',auth,userController.getOneUser);

router.get('/:id/getUserName',auth,userController.getUserName);
// router.get('/',(req,res)=>{
//     User.find().then(users=>res.status(200).json(users)).catch(err=>res.status(400).json('Eror')); 
//    })

   router.get('/',auth,userController.getUsers);

   router.get('/gettechniciens',auth,userController.getTechniciens);

   router.get('/getadmin',auth,userController.getadmin);

   
   router.get('/gettechniciensofthesamegroupe',auth,userController.gettechniciensofthesamegroupe);



   router.get('/tickets',ticketController.getTickets);


router.put('/:id/editUser',auth,multer({storage:storageEvents}).single("user_img") ,(req, res, next) => {
  const id=req.params.id;  
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      type:"utilisateur",
      user_img:req.file.filename,
    });
  
    User.updateOne({"_id":id},{"$set":{"name":req.body.name,"email":req.body.email,"password":user.password,"type":req.body.type,"user_img":req.file.filename}})
  //      .then(resultat=> console.log(resultat)) 
      .then(() => res.status(201).json({
        message: 'User created !',
        status: 201
      }))
      .catch(error => res.status(400).json({
        error
      }));
  })
  .catch(error => res.status(500).json({
    error
  }));

  // const id=req.params.id;
  // console.log(id);
  //      const user = new User({
  //        name: req.body.name,
  //        email: req.body.email,
  //        type:req.body.type,
  //        user_img:req.file.filename,
  //      });
 
  //      User.updateOne({"_id":id},{"$set":{"name":req.body.name,"email":req.body.email,"type":req.body.type,"user_img":req.file.filename}})
  //      .then(resultat=> console.log(resultat)) 
       
  //      // .then(() => res.status(201).json({
  //        //   message: 'User modified !',
  //        //   status: 201
  //        // }))
  //        .catch(error => res.status(400).json({
  //          error
  //        }));
 
 
 });
  


 router.put('/:id/affectertechnicien' ,auth,(req, res, next) => {
    
   
  const id=req.params.id;
  console.log(id);
       const user = new User({
        groupe_id: req.body.groupe_id,
        
       });
 
       User.updateOne({"_id":id},{"$set":{"groupe_id":req.body.groupe_id}})
       .then(resultat=> console.log(resultat)) 
       
       // .then(() => res.status(201).json({
         //   message: 'User modified !',
         //   status: 201
         // }))
         .catch(error => res.status(400).json({
           error
         }));
 
 
 });
  




   
  
   router.post('/addUser',auth,multer({storage:storageEvents}).single("user_img") ,(req, res, next) => {
    console.log(req.file);
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        type:"utilisateur",
        user_img:req.file.filename,
      });
    
      user.save()
        .then(() => res.status(201).json({
          message: 'User created !',
          status: 201
        }))
        .catch(error => res.status(400).json({
          error
        }));
    })
    .catch(error => res.status(500).json({
      error
    }));


});


router.post('/ajouterTechnicien',multer({storage:storageEvents}).single("user_img") ,(req, res, next) => {
  console.log(req.file);
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      type:"technicien",
      user_img:req.file.filename,
      groupe_id:req.body.groupe_id,
    });
  
    user.save()
      .then(() => res.status(201).json({
        message: 'User created !',
        status: 201
      }))
      .catch(error => res.status(400).json({
        error
      }));
  })
  .catch(error => res.status(500).json({
    error
  }));


});




async function sendMail(user, callback) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: details.email,
      pass: details.password
    }
  });

  let mailOptions = {
    from: '"Fun Of Heuristic"<example.gimail.com>', // sender address
    to: "pfemolka@gmail.com", // list of receivers
    subject: "Wellcome to Fun Of Heuristic 👻", // Subject line
    html: `<h1>Hi </h1><br>
    <h4>Thanks for joining us</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

router.post('/addUser2',multer({storage:storageEvents}).single("user_img") ,(req, res, next) => {
  console.log(req.file);
  bcrypt.hash(req.body.password, 10)
  .then(hash => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      type:req.body.type,
     // user_img:req.file.filename,
    });
  
    user.save()
      .then(() => res.status(201).json({
        message: 'User created !',
        status: 201
      }))
      .catch(error => res.status(400).json({
        error
      }));
  })
  .catch(error => res.status(500).json({
    error
  }));


});


router.put('/:id/editTechnicien',auth,multer({storage:storageEvents}).single("user_img") ,(req, res, next) => {
    
   
  const id=req.params.id;
  console.log(id);
       const user = new User({
         name: req.body.name,
         email: req.body.email,
         type:"technicien",
         user_img:req.file.filename,
         groupe_id:req.body.groupe_id,
       });
 
       User.updateOne({"_id":id},{"$set":{"name":req.body.name,"email":req.body.email,"type":"technicien","user_img":req.file.filename,"groupe_id":req.body.groupe_id}})
       .then(resultat=> console.log(resultat)) 
       
       // .then(() => res.status(201).json({
         //   message: 'User modified !',
         //   status: 201
         // }))
         .catch(error => res.status(400).json({
           error
         }));
 
 
 });











router.put('/:id/editUser',auth,multer({storage:storageEvents}).single("user_img") ,(req, res, next) => {
    
   
  const id=req.params.id;
  console.log(id);
       const user = new User({
         name: req.body.name,
         email: req.body.email,
         type:req.body.type,
         user_img:req.file.filename,
       });
 
       User.updateOne({"_id":id},{"$set":{"name":req.body.name,"email":req.body.email,"type":req.body.type,"user_img":req.file.filename}})
       .then(resultat=> console.log(resultat)) 
       
       // .then(() => res.status(201).json({
         //   message: 'User modified !',
         //   status: 201
         // }))
         .catch(error => res.status(400).json({
           error
         }));
 
 
 });
  
 router.get('/:id/getmembreofspecialite',userController.getTechniciensofthegroupe )
 
router.delete('/:id/deleteuser',auth,userController.delete)

router.get('/:id/getequipe',userController.getequipe )

//////////////////////////////////////// Stats ////////////////////////////////////////
//router.get('/stats',auth, userController.getStats);
router.get('/stats',auth, userController.getStats);


module.exports = router;