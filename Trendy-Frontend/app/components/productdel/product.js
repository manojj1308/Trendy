import React, { useState, useEffect } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Container, Button,Row,Col
  } from 'reactstrap';
  import './productdel.css';
  import axios from 'axios';
  import $ from 'jquery';
  

  function Product(){
       const [ size, setSize]=useState([])
       const [ filterData, setFilterData]=useState([])
       
  function ChangedSize (e)
  {
        setFilterData({...filterData,[e.target.name]:e.target.value})
  };
    
     function clearAll( e){
        setFilterData({})
        
        $('input[type="radio"]').prop('checked', false);
        $('input[type="checkbox"]').prop('checked', false);
        $('.sizeselect').prop('selected', false);
       }
      useEffect(()=>{
        axios.post('http://localhost:5000/users/productfilter',{...filterData})
        .then((res)=>{
            console.log(res)
            setSize(res.data)
            
        })
        .catch((err)=>{
          console.log(err)
        })
      },[filterData])
      
        return ( 

      <Container fluid={true}>
         <Row>
           <Col  lg="2">

             <div className="clearbtn" >
            <Button onClick={clearAll}>ClearAll</Button>
            </div>

            {/* filter By Size */}
                <div className="col-md-12 productcol">
                    <label > Filter By Price <br/>
                        <label>
                        <input type="radio" className="radioValue" name="price" onChange={(e) => { setFilterData({...filterData, price:{'$gte':100,'$lte':500}})}}/> 100 to 500
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="price" onChange={(e) => { setFilterData({...filterData, price:{'$gte':500,'$lte':1000}})}}/>  500 to 1000
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="price" onChange={(e) => { setFilterData({...filterData, price:{'$gte':1000,'$lte':2000}})}}/> 1000 to 2000
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="price" onChange={(e) => { setFilterData({...filterData, price:{'$gte':2000,'$lte':3000}})}}/> 2000 to 3000
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="price" onChange={(e) => { setFilterData({...filterData, price:{'$gte':3000,'$lte':4000}})}}/> 3000 to 4000
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="price" onChange={(e) => { setFilterData({...filterData, price:{'$gte':4000}})}}/> 4000 
                        </label><br/>
                    </label>
                
            </div>

            {/* filter By Category */}

            <div className="col-md-12 productcol">
              <label > Category<br/>
                        <label>
                        <input type="radio" className="radioValue" name="Category" onChange={(e) => { setFilterData({...filterData, Category:"Shirt"})}}/> Shirts
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="Category" onChange={(e) => { setFilterData({...filterData, Category:"T-Shirt"})}}/> T-Shirt
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="Category" onChange={(e) => { setFilterData({...filterData, Category:"Jeans"})}}/> Jeans
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="Category" onChange={(e) => { setFilterData({...filterData, Category:"Sneakers"})}}/> Sneakers
                        </label><br/>
                        
               </label>
                
            </div>


            {/* filter by colors */}

            <div className="col-md-12 productcol">
            <label > Filter By Color <br/>
                        <label>
                        <input type="radio" className="radioValue" name="Color"  onChange={(e) => { setFilterData({...filterData, Color:"white"})}}/> White
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="Color" onChange={(e) => { setFilterData({...filterData, Color:"Orange"})}}/> Orange
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="Color" onChange={(e) => { setFilterData({...filterData, Color:"Red"})}}/> Red
                        </label><br/>
                        <label>
                        <input type="radio" className="radioValue" name="Color" onChange={(e) => { setFilterData({...filterData, Color:"Blue"})}}/> Blue
                        </label> 
            </label>   
            </div>
           </Col>



           <Col lg="10" className="productcol">
             <Row>
          <Col lg="6">
           <div className="row"> 
                <div className="col-md-4">
                    <label  >  Filter By Size
                       <select  name="Size" onChange={ChangedSize} >
                           <option  className="sizeselect" value="All">ALL</option>
                            <option className="sizeselect" value="XS">XS</option>
                            <option className="sizeselect" value="S">S</option>
                            <option className="sizeselect" value="M">M</option>
                            <option  className="sizeselect"value="L">L</option>
                            <option className="sizeselect" value="XL">XL</option>
                            <option className="sizeselect" value="XXL">XXL</option>
                            <option className="sizeselect" value="28">28</option>
                            <option className="sizeselect" value="32">32</option>
                            <option className="sizeselect" value="36">36</option>
                            <option className="sizeselect" value="40">40</option>
                        </select>
                    </label>
                </div>
            </div>
           {/* <p> select size is {JSON.stringify(filterData)} </p> */}
           </Col>
           
           </Row>
           <p> Current Filter Applied {JSON.stringify(filterData)} </p>
           <Row>
           <Col lg="12">


  <Row className="prorow">
  {size.map(data =>
     <Col lg="3" className="productcard" key={data.Code}>
      <Card className="protlist" >
        <a className="productcart" href={`mens/${data.Code}`}>
      <CardImg className="procardimg" width="40%" src={data.images[0]} alt="Card image cap" />
      <CardBody style={{color: "black"}} className="cartdel">
     <CardTitle><b>{data.Title}</b></CardTitle>
     <CardSubtitle><b>{data.description}</b></CardSubtitle>
     <CardText >
       
     {/* {data.Category}<br/> */}
     <div className="lg-12 cartbtn">
       <span><Button >Add To Cart</Button></span><span><Button>Wishlist</Button></span><br/>
     </div>
    <b>Size</b> {data.Size.map(x=>(
            <span className="productSize">{x},</span>
          ))}
     <p><b>Rs.{data.price}</b></p>
     </CardText>
      </CardBody>
      </a>
     </Card>
    
     </Col>)}
</Row>
</Col>
           </Row>
           </Col>
         </Row>
         
          </Container>
          );
      }
      

      
export default Product;