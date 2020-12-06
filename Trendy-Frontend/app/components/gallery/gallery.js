
import React, { Component } from 'react';
import { Container,Card, Button, CardTitle, CardText,CardBody, Row, Col } from 'reactstrap';

import "../../components/gallery/gallery.css";
import {Link} from 'react-router-dom';
class Home extends Component {
constructor(props)
 {    super(props);
    this.state = {
      product: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:5000/users/readgly', {
      method: 'get',
    }).then(res=>res.json())
      .then(product=>{
        return this.setState({ product });
      })
  }
card(){
  return this.state.product.map(data =>{
    return (
      
<Col lg="3">
        <Link to="/product"><img className="images" alt="" src={data.images} /></Link>
</Col>
    )
  });
}
  render() {
return(
  <Container fluid={true}>
  <Row>
    
    {this.card()}
   </Row>
   </Container>
)
  }
}
export default Home;