const mongoose = require('mongoose')
const Schema = mongoose.Schema


const AddressSchema = new Schema({
    userId:{
        type:String,
      },
    name:{
        type:String,
           required:true
    },
       address:{
           type:String,
           required:true
       },
       phone:{
           type:Number,
           required:true
       },
       pincode:{
           type:Number,
           required:true
       },
       state:{
        type:String,
        required:true
       },
       locality:{
        type:String,
        required:true
       },
       city:{
        type:String,
        required:true
       },
       type:{
        type:String,
        enum:['Home','Office'],
        default:"Home"
       }
})

module.exports = address = mongoose.model('address',AddressSchema)