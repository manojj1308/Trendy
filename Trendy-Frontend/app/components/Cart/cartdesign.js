import React from 'react';
import {Container,Row,Col} from 'reactstrap'
import '../Cart/cart.css'
function cart(props){
return(
    <Row key={props.key}>
        <Col lg={3}>
            
            <div className="lg-12 ">
            <img className="image" src={props.src}></img>
            </div>
            
        </Col>
        <Col lg={9}>
            <h3>{props.Title}</h3>
            <p>{props.Description}</p>
            <span><b>Rs.{props.price}</b></span>
            <span><b>{props.offer}% OFF</b></span><br/>
            <label > Size
                      <select className="sizelabel" name="Size" onChange={props.ChangedSize} >
                           <option  className="sizeselect" value="All"></option>
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
        </Col>
    </Row>
)

}
export default cart;
