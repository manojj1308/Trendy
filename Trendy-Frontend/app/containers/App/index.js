/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Header from '../../components/Header/header';
 import Footer from '../../components/Footer/footer';
import Slick from '../../components/Slick/slick';
import Register from '../../components/registaration/Register';
import Edit from '../../components/registaration/editpf';
import Login from '../../components/registaration/login';
import Profile from "../../components/registaration/Profile";
import Gallery from "../../components/gallery/gallery";
import Product from "../../components/productdel/product";
import Example from "../../components/productdel/dropdown"
import productpage from '../../components/productdeltails/productpage';
import CartPage from '../../components/Cart/cart';
import Address from '../../components/Cart/address'
import Order from '../../components/Order/order'
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 

// import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
// import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

// import GlobalStyle from '../../global-styles';

// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
// `;

export default function App() {
  return (
    <Router>
    <Header/>
    <Switch>
      
<Route path='/' exact render={props =>
      <div> 
        <Slick />
        <Gallery/>
      </div>
}/> 
<Route  path='/register' component={Register}/>
<Route  path='/edit' component={Edit} />
<Route  path='/login' component={Login}/>
<Route  path="/profile" component={Profile} />
<Route  path="/product" component={Product} />
<Route  path="/mens/:Code" component={productpage } />
<Route  path="/Example" component={Example} />
<Route  path="/Cart" component={CartPage} />
<Route  path="/address" component={Address} />
<Route  path="/orders" component={Order} />

</Switch>
<Footer/> 
</Router>
  );
}