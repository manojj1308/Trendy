const cart=require('../models/cart')
process.env.SECRET_KEY ='secret'
module.exports.getcart=(req,res)=>{
console.log( req.body.user)
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