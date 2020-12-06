
import React, { Component } from 'react';
import Slider from 'react-slick';
import  './slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import {getAllSlickImages} from '../../../ApiService'
class Home extends Component {
constructor(props) {    
    super(props);
    this.state = {
      product: []
    }
  }
  componentDidMount(){
    getAllSlickImages().then(product=>
      product)
      .then(product=>this.setState({product}))
  }

  sliders() {
    // eslint-disable-next-line arrow-body-style
     return this.state.product.map(data =>{
      return (
        <div key={data}>
          <img alt="slick image" src={data.image} />
        
        </div>
      )
    });
  }
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      Speed: 900,
      // arrow: true,
      slideToShow:1,
      slideToScroll:1

    }
    return (
      <div className="slick">
        <Slider {...settings}>
          {this.sliders()}
        </Slider>
      </div>
    );
  }
}
export default Home;