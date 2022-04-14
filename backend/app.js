const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
 const User= require('./models/User');
 const Groupe= require('./models/Groupe');
 const nodemailer = require("nodemailer");
 

const details = require("./details.json");

const app = express();

const adminRouter=require('./routes/admin');
const authRouter = require('./routes/auth');
const ticketRouter = require('./routes/ticket');
const groupeRouter = require('./routes/groupe');
//connecting to database
mongoose.connect('mongodb://localhost:27017/Pfe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));




app.use((req,res,next)=>{
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content, Accept ,Content-Type,Authorization');
res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PATCH,OPTIONS');
next();
});
app.use(bodyParser.json());


// CORS Middleware
//app.use(cors());
app.use(cors({ origin: "*" }));
app.use('/api/auth', authRouter);
app.use('/api/users',adminRouter);
app.use('/api/tickets',ticketRouter);
app.use('/api/groupe',groupeRouter);


app.post("/api/sendmail", (req, res) => {
  console.log("request came");
  
  let user = req.body;
  sendMail(user, info => {
    console.log(req.body.email);
    res.send(info);
  });
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
    from: 'Carte assurance', // sender address
    to: 'molkaattia3@gmail.com', // list of receivers
    subject: "Welcome our newest Technicien", // Subject line
    html: `<h1>Hi</h1><br>
    <h4>Thanks for joining us</h4>`
  };

  // send mail with defined transport object
  let info = await transporter.sendMail(mailOptions);

  callback(info);
}

module.exports = app;