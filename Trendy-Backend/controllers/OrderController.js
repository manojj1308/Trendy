const Cart =require('../models/cart')
const Address =require('../models/address')
const Order =require('../models/order')
process.env.SECRET_KEY ='secret'
module.exports.Create=(req,res)=>{
console.log("address id is "+req.body.address)
var userId = req.body.id;   
if(address=='' || address==undefined )
res.send("Please Select Shipping Address")
if(userId!='' || userId!="undefined" ){
    Address.findOne({_id:req.body.address}).then(location=>{
        let address ={
            address:location.address,
            phone:location.phone,
            pincode:location.pincode,
            state:location.state,
            locality:location.locality,
            city:location.city,
            type:location.type,
            name:location.name
}
        if(address!=null){
            Cart.find({Userid:userId}).then(data=>{
                let order=data.map(x=>{return {product:x.product_id,Size:x.Size}});
                let total=new Order({
                    user:userId,
                    Address:address,
                    Product:order,
                    total:req.body.total,
                    paymentStatus:req.body.paymentmode,
                    deliveryDate:req.body.deliverydate
                }).save().then(docs=>{
                    res.status(200).json({message:"Order Created",data:docs})
                }).catch(err=>{
                    res.status(400).json({error:err})
                })
            }).catch(err=>{
                res.status(400).json({error:err})
            })
        }else{
            res.status(400).json({warning:"please add your address"})
        }
    })
}else{
    res.status(404).json({message:"invalid process"})
}
}
 module.exports.getorder=(req,res)=>{
        var userId=req.body.user;
        Order.find({user:userId})
        .populate('Product.product')
        .then(data=>{
            res.status(200).json({message:"Order Got Successfully By UserId",data:data});
        }).catch(err=>{
            res.status(401).json({error:err});
        })
 }
module.exports.deletemany=(req,res)=>{
//     .then(data=>{
//         Cart.deleteMany({user:userId}).then(data=>{
//             res.status(200).json({message:"cart deleted",data:data})
//         }).catch(err=>res.json(err))
//     })        
}
