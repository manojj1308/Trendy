const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id:{
        type:String
    },
    Code:{
           type:String 
    },
    Title:{
        type:String
    },
    images:{
        type:Array  
     },
     description:{
        type:String
    },
    Category:{
        type:String
    },
     Size:{
        type:Array
     },
     Color:{
         type:String
     },
     price:{
         type:Number
     },
     Rate:{
         type: String
     },
     offer:{
         type:String
     }

    
});
module.exports = User = mongoose.model('productfilters',UserSchema);