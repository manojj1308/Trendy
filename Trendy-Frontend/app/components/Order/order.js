import React, { useState, useEffect } from "react";
import {Card,CardImg,Row,Col, Button,Input, Container, Modal, ModalHeader, ModalBody, ModalFooter ,CustomInput,Form, FormGroup, Label} from 'reactstrap';
import axios from 'axios';
// import $ from 'jquery'
import  './order.css'
import SideNav from '../Order/sideNav'
import jwt_decode from 'jwt-decode'

function order() {
    const [order,setOrder]=useState([])
    const token = localStorage.usertoken;
    var decoded = jwt_decode(token);
    // const email=decoded.email
    const monthNames = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    var count= 1
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };




    //------------------------------Get Order------------------------------
    if (token != ''){
        useEffect(() => 
        {
            axios.post(`http://localhost:5000/users/getorder`,{decoded})
            .then(res =>
                {
                    console.log(res.data);
                    return setOrder(res.data)
                })
            .catch(err=>
            {
                console.log(err)
            })
        }, [order]);
    }
    else
    {
        return window.location ="./login"
    }

        // function orderDetails(){
        //     return order.map(order=>{
        //         return (
        //             <div className="order">
        //                 <b><span style={{color:"#14cda8"}}>{order.status}</span>&nbsp;<span>Order No:{order.orderId}</span></b>
        //                 <p>Placed on {(new Date(order.date)).toLocaleDateString('en-US', DATE_OPTIONS)} / Rs. {order.Product[0].product.price} / {order.Product[0].quantity} item</p>
        //                 <hr />
        //                 <b style={{display:"flex"}}>Shipment {count++} : {order.Product[0].quantity} item | Delivered on {(new Date(order.deliveryDate)).toLocaleDateString('en-US', DATE_OPTIONS)}
        //                 <a style={{marginLeft:"100px",color:"rgb(52, 177, 199)"}} href={`order/${order.orderId}`}>View Details</a></b><br />
        //                 <a href={`product/${order.Product[0].product.product_code}`}><img src={order.Product[0].product.filterimage[0]} height="100px" /></a>
        //             </div>
        //         )
        //     })
        // }
 
    return (
        <div className="orderDetails">
        <Container>
            <Row>
            <Col xs="1"></Col>
                <Col xs="10">
                    <h4>Account</h4>
                    {/* <small>{email}</small> */}
                    <hr />
                </Col>
                  <Col xs="1"></Col>
            </Row>
            <Row>
            <Col xs="1"></Col>

            <Col xs="2" className="margin">
                <SideNav />
                </Col>
                <Col xs="8">
                    <p>orders</p>
                  {JSON.stringify(order)}
                </Col>
                <Col xs="1"></Col>

            </Row>
            </Container>
        </div>
    )
}

export default order;
