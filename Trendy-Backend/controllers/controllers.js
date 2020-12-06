const express= require('express')
const bcrypt = require('bcryptjs');
const User = require('./../models/User');
const Gly = require('../models/gallery');
const register = require('./../models/register');
const productdel=require('./../models/productdel')
const gregister=require('./../models/register')
const jwt=require("jsonwebtoken");


//SlicK Control
const create = async function(req,res){
    const userData ={
        image:req.body.image,
     }
      User.create(userData)
         .then(user =>{
             res.json(req.body)
                     // res.send({status:'Images stored Successfully!'})
         })
         .catch(err =>{
              res.send('error:'+err)
          })
     }
     const imageslick = require('../models/User');
const read=async(req,res)=>{
    await imageslick.find()
        .then(image =>{res.json(image)})
        .catch(err =>{res.status(400).json('Error'+err)});
    }



      //user registration control
    const users = async (req, res) => {
       
        const userData = {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: req.body.password,
          phone:req.body.phone,
          Dob:req.body.Dob,
          location:req.body.location
        } 
        register.findOne({
          email: req.body.email
        })
          .then(user => {
            if (!user) {
              bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                register.create(userData)
                  .then(user => {
                    res.json({ status: user.email + 'Registered!' })
                  })
                  .catch(err => {
                    res.send('error: ' + err)
                  })
              })
            } else {
              res.json({ error: 'User already exists' })
            }
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      }
  //     module.exports.getreg=(req,res)=>{
  //       console.log(req.body)
  //       gregister.find()
  //       .then(data=>{
  //            res.json(data)
  //       })
        
  //  }



   //user login control 
      const login = async (req, res) => {
        register.findOne({
          email: req.body.email
        })
          .then(user => {
            if (user) {
              if (bcrypt.compareSync(req.body.password, user.password)) {
                // Passwords match
                const payload = {
                  _id: user._id,
                  email: user.email,
                  first_name:user.first_name,
                  last_name:user.last_name,
                  phone:user.phone,
                  Dob:user.Dob,
                  location:user.location
                }
                let token = jwt.sign(payload, process.env.SECRET_KEY, {
                  expiresIn: 1440
                })
                console.log(token);
                res.send(token)
              } else {
                // Passwords don't match
                res.json({ error: 'User does not exist' })
              }
            } else {
              res.json({ error: 'User does not ' })
            }
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      }


      //user profile control
      const profile = async (req, res) => {
        var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
      
        register.findOne({
          _id: decoded._id
        })
          .then(user => {
            if (user) {
              res.json(user)
            } else {
              res.send('User does not exist')
            }
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      }



       //user EDITprofile control
       const update = async (req, res) => {
         console.log(req.body.token)
        var decoded = jwt.verify(req.headers['authorization']||req.body.token, process.env.SECRET_KEY)
        register.findOne({
          _id: decoded._id
        }).then(user => {
            if (user) {
              register.updateOne({ _id: decoded._id}, {$set: req.body}).then(user=>{
                res.json(req.body)
              })
              .catch(err => {
                res.send('error: ' + err)
              })
            } else {
              res.send('User does not exist')
            }
          })
          .catch(err => {
            res.send('error: ' + err)
          })
      }


      // gallery Control
      const gallery = async function(req,res){
        const userData =new Gly({
            images:req.body.images,
         })
        userData.save()
             .then(user =>{
                 res.json(req.body)
                         // res.send({status:'Images stored Successfully!'})
             })
             .catch(err =>{
                  res.send('error:'+err)
              })
            }
    const readgly=async(req,res)=>{
        await Gly.find()
            .then(image =>{
             const product=image
              res.json(product)
            }).catch(err =>{res.json(err)});
        }


             //productgly
        const productgly = async function(req,res){
          const userData =new productdel({
              id:req.body.id,
              Code:req.body.Code,
              Title:req.body.Title,
              images:req.body.images,
              description:req.body.description,
              Size:req.body.Size,
              Color:req.body.Color,
              Rate:req.body.Rate,
              offer:req.body.offer,
              price:req.body.price,
           })
          userData.save()
               .then(user =>{
                   res.json(req.body)
                           
               })
               .catch(err =>{
                    res.send('error:'+err)
                })
              }
      const readproduct=async(req,res)=>{
          await productdel.find(req.body)
              .then(image =>{
               const product=image
                res.json(product)
              }).catch(err =>{res.json(err)});
          }


          const filterproduct=async(req,res)=>{
              console.log(req.body)
              productdel.find(req.body)
              .then(image =>{
               const product=image
                res.json(product)
              }).catch(err =>{res.json(err)});
            }




    module.exports = {
        create:create,
        read:read,
        users:users,
        login:login,
        profile:profile,
        update:update,
        gallery:gallery,
        readgly:readgly,
        productgly:productgly,
        readproduct:readproduct,
        filterproduct:filterproduct
    }  