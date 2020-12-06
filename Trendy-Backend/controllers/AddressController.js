const Address = require('../models/address');

 const create = (req,res) =>{
    console.log(req.body)
    console.log("address is"+req.body.userId)
      let id = req.body.userId;
      if(req.body.address=='' || req.body.address==undefined)
      res.json("Please Enter Address")
      else if(req.body.locality=='' || req.body.locality==undefined)
      res.json("Please Enter Locality")
      else if(req.body.name=='' || req.body.name==undefined)
      res.json("Please Enter  Name")
      else if(req.body.phone=='' || req.body.phone==undefined)
      res.json("Please Enter Mobile Number")
      else if(req.body.pincode=='' || req.body.pincode==undefined)
      res.json("Please Enter Pincode")
      else if(req.body.state=='' || req.body.state==undefined)
      res.json("Please Enter State")
      else if(req.body.city=='' || req.body.city==undefined)
      res.json("Please Enter City")
      else if(req.body.type=='' || req.body.type==undefined)
      res.json("Please Select Type")
      else{
        const address = new Address({ 
            userId:id,
              address :req.body.address,
              locality :req.body.locality,
              name:req.body.name,
              phone:req.body.phone,
              pincode:req.body.pincode,
              state:req.body.state,
              city:req.body.city,
              type:req.body.type
          }).save().then(docs=>{
              console.log("successfully stored")
              res.json({message:"Sucess",Address:docs})
          }).catch(err=>res.json(err)) 
     }
 }

// // get address 
// const getDAddress = (req,res) =>{
//     console.log(req.body.user)
//     let id = req.body.user;
//      User.find({_id:id}).then(docs=>{
//         res.status(200).json(docs)
//      }
//      ).catch(err=>res.status(404).json(err))
//  }

// get address 
 const getAddress = (req,res) =>{
    console.log(req.body.user)
    let id = req.body.user;
     Address.find({userId:id}).then(docs=>{
        res.status(200).json(docs)
     }
     ).catch(err=>res.status(404).json(err))
 }
 const getAllAddress = (req,res) =>{
    console.log(req.body.user)
    let id = req.body.user;
     Address.find({}).then(docs=>{
        res.status(200).json(docs)
     }
     ).catch(err=>res.status(404).json(err))
 }  
//  findone address
 const oneAddress = (req,res) =>{
    let id = req.body.id;
    Address.findById({_id:id}).then(docs=>{
        res.status(200).json(docs)
    }).catch(err=>res.json(err))
 }
 const updateAddress = (req,res) =>{
     console.log("update",req.body)
    let id = req.body.id;
    Address.update({_id:id},{$set:req.body}).then(docs=>{
        res.status(200).json(docs)
    }).catch(err=>res.json(err))
 }

//  deladdress
const delAddress = (req,res) =>{
    console.log("delete",req.body)
    let id = req.body.id;
    if(id == '' || id== undefined)
    {
    res.send("id is undefined")
}
else {
    Address.deleteOne({_id:id}).then(docs=>{
        res.json({message:"Sucess"})
    }).catch(err=>res.status(404).json(err))
}
 }
 module.exports = {
    create:create,
    getAddress :getAddress,
    getAllAddress:getAllAddress ,
    oneAddress :oneAddress,
    updateAddress :updateAddress,
    delAddress :delAddress

 }