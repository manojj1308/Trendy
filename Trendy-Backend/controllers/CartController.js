const CartPages=require('../models/cart')
exports.CartPage= (req,res)=>{
console.log(req.body)
 var token=req.body
 console.log(token)
 if(token == undefined || token == 'undefined'  || token == '' || token == null)
 {

 res.json("it's empty")
 
 }
  else{
     
    const cartdata = {
        Userid: req.body.Userid,
        product_id:req.body.ProductCode,
        Size:req.body.Size
    }  
    if(req.body != {}){
    CartPages.create(cartdata)
   .then(doc =>{
       console.log(" it,s created")
       res.json(doc)

   }
    )
    .catch(err=>{
        console.log(err)
        res.json(" it's a empty")
    }
        )
}
res.json("created")
}
}
exports.getCartPage= (req,res)=>{
    console.log(req.body.ProductCode)
    CartPages.find()
   .then(doc =>{
   
    res.json(doc);
   }
    )
    .catch(err=>{
        console.log(err)
    }
        )
}