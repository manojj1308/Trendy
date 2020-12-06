const Product=require('../models/productdel')

module.exports.getProductByCode = (req,res)=>{
    
    console.log(req.params.Code)
    Product.find({Code:req.params.Code},(err,data)=>{
        const product=data;
        res.json(product)
      }).catch(err=>{
        res.status(500).json(err)
      })
    }