 const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const db=require("./config/config").url;
const Users = require('./routes/users')
const app = express();

//Defining the PORT
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));

mongoose
  .connect(db,{useNewUrlParser:true,useUnifiedTopology: true})
  .then(()=>console.log("Database Connected"))
  .catch(err =>console.log(err))
  app.use('/users',Users);

app.listen(PORT,()=>{
    console.log('Server started on Port ',PORT);
});