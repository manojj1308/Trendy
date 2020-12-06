const express = require('express');
const users = express.Router();
 const controllers = require('../controllers/controllers');
 const ProductControl= require('../controllers/ProductController')
 const CartControl= require('../controllers/CartController')
 const Cartproduct= require('../controllers/Cartproduct')
  const AddressController= require('../controllers/AddressController')
  const OrderController=require('../controllers/OrderController')
 
process.env.SECRET_KEY ='secret'
//create slick 
users.post('/image',controllers.create);
 //read slick
users.get('/readimg',controllers.read);
// create user register
users.post('/register',controllers.users)
// //user read
// users.get('/getregister',controllers.getreg)
// create user login
users.post('/login',controllers.login)
//user profile update
users.put('/profileupdate',controllers.update)
// read user profile
users.get('/profile',controllers.profile)
//create gellery
users.post('/imagegly',controllers.gallery); 
 //read gellery
users.get('/readgly',controllers.readgly);
//create product Details
users.post('/productgly',controllers.productgly);
// read
users.get('/readproduct',controllers.readproduct);
//post
users.post('/productfilter',controllers.filterproduct);

users.get('/filterproduct/:Code',ProductControl.getProductByCode)
 
users.post('/cardproduct',CartControl.CartPage)

users.get('/getcardproduct',CartControl.getCartPage)

users.post('/card',Cartproduct.getcart)

users.post('/deletecart',Cartproduct.deletecart)
users.post('/addaddress',AddressController.create)
// users.post('/Address/:token',AddressController.create);
// get address
users.post('/postorder',OrderController.Create)
users.post('/getorder',OrderController.getorder)
users.post('/getaddress',AddressController. getAddress)

users.get('/getalladdress',AddressController. getAllAddress)

users.delete('/deladdress',AddressController. delAddress)

module.exports=users;

        
 