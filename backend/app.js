const express = require('express');


const app = express();
app.use((req,res)=>{res.json("hello mimi")});

module.exports = app;