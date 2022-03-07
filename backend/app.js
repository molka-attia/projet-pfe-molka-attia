const express = require('express');


const app = express();
app.get('/api/users',(req,res)=>{const users = [
    {
      id:"1",
      name: 'John Doe',
      user_img:"4c.jpg",
      email: 'john.doe.gmail.com',
      type:'admin',
    
    },
    {
      id:"2",
      name: 'John Doe2',
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