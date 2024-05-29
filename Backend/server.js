require('dotenv').config();
const express = require('express');
const connectDB = require('./config/dbCONN');
const app = express();



// app.get('/',(req,res)=>{
//   res.send(req);
//   console.log("Inside home page");
// })

app.get('/ping',(req,res)=>{
  res.send("pong");
})

app.listen(3000,()=>{
  connectDB();
  console.log("listening")});