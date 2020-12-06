     import React from 'react'
import { Container,Row,Col,Button} from 'reactstrap'

const productDetail = (props) => {
    return (
        <React.Fragment>
            <Container fluid={true} className="productImageContainer">
                <Row>
                    <Col md={"12"}>
                        <h1 className="productName">{props.ProName}</h1>
                        <p className="productDes">{props.ProSubName}</p>
                        <Row>
                            <Col>
                                
                            </Col>
                        </Row>
                        <div>
                            <span className="priceText">Rs.{props.price}</span>
                            <strike className="RateText">Rs.{props.rate}</strike>
                            <span className="offerText">({props.offer}% OFF)</span>
                        </div>
                        <br />
                        <div>
                            <p className="includeTax">inclusive of all taxes</p>
                        </div>  
                        <br />
                        <h4 className="productName">SELECT SIZE</h4>
                        <br />
                        <div className="SizeContainer">{props.SizeButtons}</div>
                        <br />
                        <Container>
                            <Row>
                                <h1>hello</h1>
                                <Col md={"7"}>
                                    <Button className="AddCartButton">
                                        {/* <Icon className="fa fa-shopping-bag addIcon" /> */}
                                    <span className="addText">ADD TO BAG</span>
                                    </Button>
                                </Col>
                                <Col md={"5"}>
                                    <Button className="WhislistButton">
                                        {/* <Icon className="fa fa-bookmark" /> */}
                                    <span className="addText">WISHLIST</span>
                                    </Button>
                                </Col>
                            </Row>
                        </Container>                 
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default productDetail;
