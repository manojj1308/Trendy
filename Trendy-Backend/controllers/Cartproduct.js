const cart=require('../models/cart')
const jwt=require("jsonwebtoken");
process.env.SECRET_KEY ='secret'
module.exports.getcart=(req,res)=>{
console.log( req.body.user)
// var user=req.body.token
// var userid=user._id
// var user=req.body.decoded
cart.find({Userid:req.body.user})
.populate('product_id')
.then(data =>{
     console.log(data)
     res.json(data)

})
.catch(err=>{
     console.log(err)
})
}
module.exports.deletecart=(req,res)=>{
     console.log("response"+req.body)
     cart.deleteOne(req.body)
     .then(data=>{
          res.json(data)
     })
     
}