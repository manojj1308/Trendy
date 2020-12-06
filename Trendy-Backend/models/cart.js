const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = {
        type: Schema.Types.ObjectId, 
        ref: 'productfilters',
        required: true
  }

const UserSchema = mongoose.Schema({
    Userid:{
        type:String
    },
    product_id: [Product],
    Size:{
         type:String
     }
});

module.exports = User = mongoose.model('cartdetails',UserSchema);