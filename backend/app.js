const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
 const User= require('./models/User');
 
const app = express();

const adminRouter=require('./routes/admin');
const authRouter = require('./routes/auth');
const ticketRouter = require('./routes/ticket');
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
app.use(cors());
app.use('/api/auth', authRouter);
app.use('/api/users',adminRouter);
app.use('/api/tickets',ticketRouter);


module.exports = app;