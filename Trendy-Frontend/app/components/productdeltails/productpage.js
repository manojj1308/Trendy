import React, { useState,useEffect } from 'react';
import {Row,Col,Container,Button,Breadcrumb, BreadcrumbItem} from 'reactstrap';
import axios from 'axios'
import './productdtlsl.css'
import jwt_decode from 'jwt-decode'

const ProductPage=props=> {
  const { match } = props;
  let {Code} = match.params; 
  const [product, setProduct] = useState([]);
  const [Cartid, Setid] = useState([]);
  const token = localStorage.usertoken
  const decoded = jwt_decode(token)
  var User= decoded._id

   useEffect(() => {
      console.log(Code);
      axios.get(`http://localhost:5000/users/filterproduct/${Code}`)
        .then(res => {
          setProduct(res.data);
          console.log(res.data)
        })
        .catch(err => console.log(err));
     },[Code]);
    console.log(product)
     
    function addcart(){
      if(Cartid.Size != undefined){
    
        console.log(`Token ${token}`);
       if(token == undefined || token == 'undefined'  || token == '' || token == null){
        props.history.push('/login');
       }
       else{
         props.history.push('/cart')
       }
      }
       else{
         alert("  please select size")
       }
      
        }
    

    useEffect(() => {
         axios.post("http://localhost:5000/users/cardproduct",{ ...Cartid})
            .then(res => {
              console.log(res.data)
            
            })
            .catch(err => console.log(err));
     },[Cartid]);
 
    //  var user=decoded._id

    return (
    
          <React.Fragment>
              <Container fluid={true}>
            <p>Select Size{JSON.stringify(Cartid)}</p>
               <Row>
                <Col lg={"7"}>
               
                        <Container fluid={true} className="productImageContainer">
                          {product.map(x=>
                             <Row className="path" key={x._id}>
                             <Col lg={12}>
                         <Breadcrumb className="paths">
                          <BreadcrumbItem >Home</BreadcrumbItem>
                          <BreadcrumbItem>Mens</BreadcrumbItem>
                          <BreadcrumbItem >{x.Title}</BreadcrumbItem>
                          <BreadcrumbItem active>{x.description}</BreadcrumbItem>
                          </Breadcrumb>
                          </Col>
                          </Row>
                            )}
                          
                        <Row >
                        {product.map((data,i)=>{
                          return(
                            <React.Fragment>
                            {data.images.map(x => (
                              <Col md={"6"} className="productImageCol">
                                <div className="hover04">
                              <figure><img className="productDelImage" src={x} alt='' /></figure>
                              </div>
                              </Col>
                            ))}
                          </React.Fragment>
                          )
                        })}
                        </Row>
                        </Container>
                </Col>


              <Col lg="5">
                  <Container fluid={true} className="productDelContainer">
                         <Row>
                         {product.map((data,i)=>{
                           let price = Math.floor((data.Rate - ((data.Rate / 100) * data.offer)));
                         
                          
                           return(
                            <React.Fragment key={data.id}>
  
                              <div className="lg-12 productdes">
                                <div className="producttitle">
                              <h3>{data.Title}</h3>
                              {data.description}
                              
                              </div>
                        < div className="productdesprice">
                            <span className="spanprice">Rs.{price}</span><span className="spanrate">Rs.{data.Rate}</span> <span className="spanprice">({data.offer}% Off)</span><br/>
                         </div>
                         <p className="taxes">inclusive all taxes</p>
                          <div className="productsizespan">
                            <p>Select Size</p>
                  {/* mapped */}
                              {data.Size.map(x => (
                                   
                             <Button className="btnsizes" onClick={()=>{
                              
                              
                               Setid({...Cartid,Size:x,ProductCode:data._id,Userid:User})
                              }} >{x}</Button>
                              ))}
                             

                              </div> 
                              <br/>
                              <div className="cartdiv">
                              <span className="cartspan"><Button className="cartbtn" onClick={async function(){
                             await addcart() 
                            }} >Add to Cart</Button></span>
                              <span className="cartorder"><Button className="cartbtn"> Place Order</Button></span>
                              </div>
                              </div>

                          </React.Fragment>


                          )
                        })}
                         
                         </Row>
                         </Container>
                     </Col>
                      
                    </Row>
                    
              </Container>
    </React.Fragment>);
}


export default ProductPage;
