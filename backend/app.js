const express = require('express');


const app = express();
app.use((req,res,next)=>{
res.setHeader('Access-Control-Allow-Origin','*');
res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With,Content, Accept ,Content-Type,Authorization');
res.setHeader('Access-Control-Allow-Methods','GET,POST,DELETE,PATCH,OPTIONS');
next();
});
app.get('/api/users',(req,res)=>{const users = [
    {
      id:"1",
      name: 'Molka',
      user_img:"4c.jpg",
      email: 'john.doe.gmail.com',
      type:'admin',
    
    },
    {
      id:"2",
      name: 'Molka2',
      user_img:"4c.jpg",
      email: 'john.doe.gmail.com2',
      type:'admin',
    },  
    {
      id:"3",
      name: 'Emily',
      user_img:"4c.jpg",
      email: 'john.doe.gmail.com2',
      type:'technicien',
    },  
  ];
  res.json(users);
  });


module.exports = app;