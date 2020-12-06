import React, { useEffect,useState } from 'react';
import {Container,Row,Col, Button,Card,CardBody,CardHeader,CardTitle,CardFooter,CardText} from 'reactstrap'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import {Link} from 'react-router-dom';
// import Cart from '../Cart/cartdesign.js'
import '../Cart/cart.css'
function CartPage(){

    const [ Cart, setCardProduct]=useState([])
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    let Total=0;
    let Bagprice=0;
    let Totalprice=0;
    let TotalDis=0;
    let Charge=25;
    let FinalTotal=0;
    let count=0;
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    var user=decoded._id
    console.log(user)

    useEffect(()=>{
        axios.post('http://localhost:5000/users/card',{user})
        .then((res)=>{
            console.log(res)
            setCardProduct(res.data)
            
        })
        .catch((err)=>{
          console.log(err)
        })
      },[user])

      function deletecart(e){
        axios.post('http://localhost:5000/users/deletecart',{_id:e.target.value})
        window.location.reload();
      }
    return(
  
   
  // <p>no items</p>
  <Container>
   
       <Row >
       <Col lg={8}>
       
       <div className="lg-12 bag">
    <h3>Your Bag  </h3>
         </div>
       <div className="lg-12">
       {Cart.map((data)=>{
           return(
      <div className="lg-12" key={data._id}>
          {data.product_id.map((x,i)=>{
               let price = Math.floor((x.Rate - ((x.Rate / 100) * x.offer)))
               Totalprice =Math.floor(x.Rate - price)
               TotalDis =Math.floor(TotalDis + Totalprice)
               Bagprice=Math.floor(Bagprice + price)
               Total=Math.floor(TotalDis + Bagprice)
               FinalTotal=Math.floor(Bagprice + Charge )
               count=count + 1
            
            return(
              
        <div className="lg-12 productcart2" key={x._id}>

            <Row className="prt">

            <Col lg={3}>
                <img className="image"src={x.images[0]}></img>
                <div className="lg-12">
                <Button className="remove" color="primary" value={data._id} onClick={deletecart}>Remove</Button>
                </div>
       
            </Col> 
            <Col lg={6}>
                 <div className="prtdes">
                 <h5>{x.Title}</h5>
                <p>{x.description}<br/>
      
                </p>
                 </div>
                 <div className="lg-5">
                 <span><label > Size
                 <select className="sizelabel" name="Size" onClick={toggle} >
                   {x.Size.map(x=>
                     <option  className="sizenum" value={x}>{x}</option>
                    )}
                    </select>                     
                    </label>
                    </span>
                    <span>
                    <label > qty
                      <select className="sizelabel" name="qty" onChange={
                        (e) => { Total = Math.floor(price * e.target.value)
                        return Total
                      }
                        } >
                           <option  className="sizeselect" value="1">1</option>
                            <option className="sizeselect" value="2">2</option>
                            <option className="sizeselect" value="3">3</option>
                            <option className="sizeselect" value="4">4</option>
                            <option  className="sizeselect"value="5">5</option>
                            <option className="sizeselect" value="6">6</option>
                            <option className="sizeselect" value="7">7</option>
                            <option className="sizeselect" value="8">8</option>
                            <option className="sizeselect" value="9">9</option>
                            <option className="sizeselect" value="10">10</option>
                        </select>
                    </label>
                 
                    </span>
                 </div>
            </Col>
            <Col lg={3}>
              <div className="lg-12 pricecart">
              <b>Rs.{price}</b>
              <p><span className="prtrate">Rs.{x.Rate}</span><span className="prtoff">({x.offer}% OFF)</span></p>
              </div>
            </Col>
          </Row>
       </div> 
)
})}
     </div>
)
})}
       </div>
       </Col>
     <Col lg={4}>
     <Card className="summary">
        <CardHeader className="cardh">Order Summary</CardHeader>
        <CardBody>
          <div className="lg-12">
            <Row>
            <Col lg={8}>
              
              <b>Bag Total</b><br/>
              <b>Bag Discount</b><br/>
              <b>Order Total</b><br/>
              <b>Merchandise</b><br/>
              <b>Delivery Charge</b><br/><br/>
              <b>Total</b>
            </Col>
            <Col lg={4}>
              <p>Rs.{Total}<br/>
              - {TotalDis}<br/>
             Rs.{Bagprice}<br/>
                {count} items<br/>
                Rs.50<br/><br/>
                Rs.{FinalTotal}
                </p>

            </Col>
            </Row>
          </div>
        </CardBody>
        <CardFooter>
         <Link to="/address"><Button className="ord" color="primary" size="lg" block>Place Order</Button></Link> 
          </CardFooter>
      </Card>
      </Col>
   </Row>
</Container>
    )}
export default CartPage;






