import React, { useEffect,useState } from 'react';
import {Container,Row,Col, Button,Card,CardBody,
    CardHeader,CardFooter,Modal, ModalHeader,
     ModalBody, ModalFooter,Form, FormGroup, Label, Input,CustomInput} from 'reactstrap'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
import './address.css'
import $ from 'jquery';
function address(props){
    const [Cart,setCardProduct]=useState([])
    const [ newAddress, setNewAddress]=useState({})
    const [AddressOne, setAddressOne]=useState([])
    const [ AddressDel, setAddressDel]=useState({})
    // const [Getaddress, setGetaddress]=useState([])
    const [orderDetails,setOrderDetails]=useState({})
    let Total=0;
    let Bagprice=0;
    let Totalprice=0;
    let TotalDis=0;
    let Charge=25;
    let FinalTotal=0;
    let count=0
    let items=0;
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    console.log(decoded._id)
    var user=decoded._id
    const today = new Date()
    const initiateDate = new Date(today)
    const deliveryDate = new Date(today)
    initiateDate.setDate(initiateDate.getDate() + 5);
    deliveryDate.setDate(deliveryDate.getDate() + 10);
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    
    const {buttonLabel,className} = props;
    const [modal, setModal] = useState(false);
    const toggle = () =>{ setModal(!modal),
      setNewAddress({
        userId: user,
        name: AddressDel.name,
        address: AddressDel.address,
        pincode: AddressDel.pincode,
        phone: AddressDel.phone,
        state:AddressDel.state,
        city:AddressDel.city,
        locality:AddressDel.locality,
        type:AddressDel.type
      })
      
    };

    const {addressUpdate,edit} = props;
    const [modalUpdate, setModalUpdate] = useState(false);
    const toggleUpdate = () => {
        setModalUpdate(!modalUpdate)
        setModal(modal)
       };
    
    useEffect(()=>{
        axios.post('http://localhost:5000/users/card',{user})
        .then((res)=>{
            console.log(res)
            setCardProduct(res.data)
            
        })
        .catch((err)=>{
          console.log(err)
        })
      },[user]);
    useEffect(() => { 
      axios.post('http://localhost:5000/users/addaddress',newAddress)
          .then(res => {
            console.log(res.data)
            
      })
  },[newAddress]);

  useEffect(() => { 
    axios.post('http://localhost:5000/users/getaddress',{user})
        .then(res => {
          console.log(res.data)
          setAddressOne(res.data)
          
    })
},[user]);
useEffect(() => { 
  axios.post('http://localhost:5000/users/postorder',{...orderDetails})
      .then(res => {
        console.log(res.data)
        
  })
},[user]);
 
   
    function addressItems(){
      return AddressOne.map(data=>{
          return(
              <Col xs="6">
                  <Card className="addressDetails" >
                  <div className="add1"style={{"lineHeight":"8px"}}>
                  <FormGroup>
                        <CustomInput type="radio" id={data._id} name="address" value={data._id}  onClick={(e)=>{setOrderDetails({...orderDetails,[e.target.name]:e.target.value})}} ></CustomInput>
                   </FormGroup>
                      <p><h2>{data.name}</h2></p>
              
                      <p>{data.address}</p>
                      <p>{data.locality}</p>
                      <p>{data.city}-{data.pincode}</p>
                      <p>{data.state}</p><br />
                      <p>Mobile <b>{data.phone}</b></p>
                      <hr />
                      {/* <div style={{"color":"silver","fontWeight":"900px"}} ><span onClick={()=>{setDeleteAddress({...deleteAddress,id:data._id});remove()}}>REMOVE</span>
                      <div style={{"marginLeft":"130px",display: "inline-block"}} onClick={()=>{setUpdateAddress({...updateAddress,id:data._id,name:data.name,address:data.address,phone:data.phone,pincode:data.pincode,state:data.state,locality:data.locality,city:data.city,type:data.type});{toggleUpdate()};}}>{addressUpdate} EDIT</div>
                      </div> */}
                      </div>
                      
                  </Card>
              </Col>
          )
      })
  } 

          function order(){
          if(orderDetails.address=='' || orderDetails.address==undefined)
          alert("Plese Select Address")
          else if(orderDetails.paymentMode=='' || orderDetails.paymentMode==undefined)
          alert("Please slelect Payment Mode")
          else
          setOrderDetails({...orderDetails,id : user,deliveryDate:deliveryDate})
          }
          
      return(
        <Container >
          <Row>
              <Col xs="6">
                         <h5>Select Delevery Address</h5>
                         <Container>
                         <Row>
                         {addressItems()}
                             <Col xs="6">
                             <Card onClick={toggle} className="newAddress">{buttonLabel}
                                <center>
                                    {/* <img src={plus} height="70px" width="70px" /> */}
                                    <p><b>Add New Address</b></p>
                                </center>
                                <div>
                                     <Modal isOpen={modal} toggle={toggle} className={className}>
                                        <ModalHeader toggle={toggle}>Add New Address</ModalHeader>
                                             <ModalBody>
                                             {/* <p style={{"color":"red"}}>{error}</p> */}
                                             <Form className="container">
                                                <FormGroup>
                                                    <Label for="Name">Name</Label>
                                                        <Input type="text" name="name" id="name"   onChange={(e)=>{setAddressDel({...AddressDel,[e.target.name] : e.target.value})}} />
                                                 </FormGroup>
                                                 
                                            <FormGroup>
                                                <Label for="Address">Address</Label>
                                                 <Input type="text" name="address" id="address"  onChange={(e)=>{setAddressDel({...AddressDel,[e.target.name] : e.target.value})}} />
                                             </FormGroup>
                                                 <FormGroup>
                                                    <Label for="mobile">Mobile Number</Label>
                                                        <Input type="number"name="phone" id="phone"  onChange={(e)=>{setAddressDel({...AddressDel,[e.target.name] : e.target.value})}} />
                                                </FormGroup>
                                             <FormGroup>
                                                    <Label for="Pincode">Pincode</Label>
                                                     <Input type="number" name="pincode" id="pincode"  onChange={(e)=>{setAddressDel({...AddressDel,[e.target.name] : e.target.value})}} />
                                            </FormGroup>
                                            <FormGroup>
                                                <Label for="State">State</Label>
                                                 <Input type="text" name="state" id="state"   onChange={(e)=>{setAddressDel({...AddressDel,[e.target.name] : e.target.value})}} />
                                             </FormGroup>
                                             <FormGroup>
                                                 <Label for="Locality">Locality</Label>
                                                  <Input type="text" name="locality" id="locality" onChange={(e)=>{setAddressDel({...AddressDel,[e.target.name] : e.target.value})}}/>
                                            </FormGroup>
                                            <FormGroup>
                                                 <Label for="City">City</Label>
                                                  <Input type="text" name="city" id="city"  onChange={(e)=>{setAddressDel({...AddressDel,[e.target.name] : e.target.value})}} />
                                            </FormGroup>
                                            <FormGroup tag="fieldset">
                                          <legend>Delivery Type</legend>
                                               <FormGroup check>
                                                    <Label check>
                                                    <Input type="radio" name="type" value="Home"  onChange={(e)=>{setAddressDel({...AddressDel,[e.target.name] : e.target.value})}} />
                                                        Home
                                                     </Label>
                                                 </FormGroup>
                                                 <FormGroup check>
                                                      <Label check>
                                                 <Input type="radio" name="type" value="Office"  onChange={(e)=>{setAddressDel({...AddressDel,[e.target.name] : e.target.value})}}/>
                                                    Office
                                                 </Label>
                                                  </FormGroup>
                                              </FormGroup>
                                    </Form>

                                             </ModalBody>
                                                  <ModalFooter>
                                                    <Button color="danger" refresh="true" block onClick={toggle}>Save</Button>
                                              </ModalFooter>
                                         </Modal>
                                 </div>
                             </Card>
                             </Col>
                         </Row>
    
                         </Container>
                    </Col>


            {/* Sample */}
           
          <Col lg="6">
                  <Container>
                      {Cart.map(data=>{
                          <p key={data._id}>{data.product_id.map(x=>{
                            let price = Math.floor((x.Rate - ((x.Rate / 100) * x.offer)));
                            Totalprice =Math.floor(x.Rate - price)
                            TotalDis =Math.floor(TotalDis + Totalprice)
                            Bagprice=Math.floor(Bagprice + price)
                            Total=Math.floor(TotalDis + Bagprice)
                            FinalTotal=Math.floor(Total + Charge )
                            count=count + 1
                            items=count
                          })}</p>
                      })}

        <Card className="summary">
        <CardHeader className="Addcardh">Order Summary</CardHeader>
        <CardBody>
          <div className="lg-12">
            <Row>
           
            <div>


                            <CustomInput type="checkbox" id="buy" inline>
                            <h6>Try And Buy Not Available</h6></CustomInput>
                            <p>Orders below ₹1199 are not eligible</p>
                            <p style={{"color":"blue"}}><b>HOW IT WORKS</b></p>
                        </div><hr />
                        <div>
                            <p style={{"color":"silver"}}><b>CHOOSE DELIVERY SPEED</b></p>
                            <div>
                                <CustomInput type="radio" name="delivery" id="delivery"><b>Standard Delivery</b></CustomInput>
                                <p>Get it by {initiateDate.getDate()} {monthNames[initiateDate.getMonth()]} - {deliveryDate.getDate()} {monthNames[deliveryDate.getMonth()]} | Delivery Charge</p>
                                <p>₹150</p>
                                <FormGroup>
                                   <Label for="exampleSelect">Payment Mode</Label>
                                   <Input type="select" name="paymentMode" id="paymentMode" onChange={(e)=>{setOrderDetails({...orderDetails,[e.target.name] : e.target.value})}}>
                                      <option value="Online">Online</option>
                                      <option value="Cash on Delivery">Cash on Delivery</option>
                                      <option value="Card on Delivery">Card on Delivery</option>
                                    </Input>
                                 </FormGroup>
                            </div><hr />
                        </div>   
                        <div>
                        <p style={{"color":"silver"}}><b>ESTIMATED DELIVERY DATES</b></p>
                        {/* {bagItems()} */}
                        </div>        
            <Col lg={8}>
            <b>Bag Total</b><br/>
              <b>Bag Discount</b><br/>
              <b>Order Total</b><br/>
              <b>Merchandise</b><br/>
              <b>Delivery Charge</b><br/><br/>
              <b>Total</b>
            </Col>
            <Col lg={4}>
                <p><i class="fa fa-inr"> {Total}</i> <br/>
              - {TotalDis}<br/>
              <i class="fa fa-inr"> {Bagprice}</i><br/>
                {count} items<br/>
                    <i class="fa fa-inr"> {Charge}</i><br/><br/>
                    <i class="fa fa-inr"> {FinalTotal}</i>
                </p>
            </Col>
            </Row>
          </div>
        </CardBody>
       
        <CardFooter>
        <Button color="danger" size="lg" block onClick={order}>CONTINUE</Button>
          </CardFooter>
      </Card>
                  </Container>
                  </Col>
              </Row>
          </Container>
      )
}

export default address;