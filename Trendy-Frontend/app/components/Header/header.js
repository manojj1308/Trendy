import React, { useState } from 'react';
import "./style.css";
import trendy from './images/trendyy.png';
import profile from './images/profile.png';
import bookmark from './images/bookmark.png';
import bag from './images/bag.jpg';
import Profile from '../Header/profileprop'
// import search from './images/search.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardLink,
  Button,
  Badge
} from 'reactstrap';



const header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
return (
    <div>
      <Navbar  expand="md" className="na1">
        <NavbarBrand href="/"><img src={trendy} style={{width:95, marginTop: -5}} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto " navbar>
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav ><NavLink href="#" className="link1 men">MEN</NavLink></DropdownToggle>
              <DropdownMenu>
              <Container>
              <Row>
                <Col>
                <DropdownItem className="menh">Top Wear</DropdownItem>
                <DropdownItem>T-Shirt</DropdownItem>
                <DropdownItem>Casual Shirts</DropdownItem>
                <DropdownItem>Formal Shirts</DropdownItem>
                <DropdownItem>Sweatshirts</DropdownItem>
                <DropdownItem>Sweaters</DropdownItem>
                <DropdownItem>Jackets</DropdownItem>
                <DropdownItem>Blazers & Coats</DropdownItem>
                <DropdownItem>Suits</DropdownItem>
                <DropdownItem>Rain Jackets</DropdownItem>
                 <DropdownItem divider />
                <DropdownItem className="menh">Indian & Festive Wear</DropdownItem>
                <DropdownItem>Sherwanis</DropdownItem>
                <DropdownItem>Kurtas & Kurta Sets</DropdownItem>
                <DropdownItem>Nehru Jackets</DropdownItem>
                <DropdownItem>Dhotis</DropdownItem>
                </Col>
                <Col className="even">
                <DropdownItem className="menh">Bottomwear</DropdownItem>
                <DropdownItem>Jeans</DropdownItem>
                <DropdownItem>Casual Trousers</DropdownItem>
                <DropdownItem>Formal Trousers</DropdownItem>
                <DropdownItem>Shorts</DropdownItem>
                <DropdownItem>Track Pants & Joggers</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="menh">Innerwear & Sleepwear</DropdownItem>
                <DropdownItem>Briefs & Trunks</DropdownItem>
                <DropdownItem>Boxers</DropdownItem>
                <DropdownItem>Vests</DropdownItem>
                <DropdownItem>Sleepwear & Loungewear</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="menh">Plus Size</DropdownItem>
                </Col>
                <Col>
                <DropdownItem className="menh">Footwear</DropdownItem>
                <DropdownItem>Casual Shoes</DropdownItem>
                <DropdownItem>Sports Shoes</DropdownItem>
                <DropdownItem>Formal Shoes</DropdownItem>
                <DropdownItem>Sneakers</DropdownItem>
                <DropdownItem>Sandals & Floaters</DropdownItem>
                <DropdownItem>Flip Flops</DropdownItem>
                <DropdownItem>Socks</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="menh">Personal Care & Grooming</DropdownItem>
                <DropdownItem className="menh">Sunglasses & Frames</DropdownItem>
                <DropdownItem className="menh">Watches</DropdownItem>
                </Col>
                <Col className="even">
                <DropdownItem className="menh">Sports & Active Wear</DropdownItem>
                <DropdownItem>Sports Shoes</DropdownItem>
                <DropdownItem>Sports Sandals</DropdownItem>
                <DropdownItem>Active T-Shirts</DropdownItem>
                <DropdownItem>Tracksuits</DropdownItem>
                <DropdownItem>Track Pants & Joggers</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="menh">Gadgets</DropdownItem>
                <DropdownItem>Smart Wearables</DropdownItem>
                <DropdownItem>Fitness Gadgets</DropdownItem>
                <DropdownItem>Headphones</DropdownItem>
                <DropdownItem>Speakers</DropdownItem>
                </Col>
                <Col>
                <DropdownItem className="menh">Fashion Accessories</DropdownItem>
                <DropdownItem>Wallets</DropdownItem>
                <DropdownItem>Belts</DropdownItem>
                <DropdownItem> Perfumes & Body Mists</DropdownItem>
                <DropdownItem>Trimmers</DropdownItem>
                <DropdownItem>Deodorants</DropdownItem>
                <DropdownItem>Ties, Cufflinks & Pocket Squares</DropdownItem>
                <DropdownItem>Caps & Hats</DropdownItem>
                <DropdownItem>Accessory Gift Sets</DropdownItem>
                <DropdownItem>Mufflers, Scarves & Gloves</DropdownItem>
                <DropdownItem>Phone Cases</DropdownItem>
                <DropdownItem>Rings & Wristwear</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="menh">Helmets</DropdownItem>
                <DropdownItem className="menh">Bags & Backpacks</DropdownItem>
                <DropdownItem className="menh">Luggages & Trolleys</DropdownItem>
                </Col>
                </Row>
                </Container>
              </DropdownMenu>
             </UncontrolledDropdown>
            </NavItem>
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav ><NavLink href="#" className="link1">WOMEN</NavLink></DropdownToggle>
              <DropdownMenu>
              <Container>
              <Row>
                <Col>
                <DropdownItem className="womenh">Indian & Fusion Wear</DropdownItem>
                <DropdownItem>Kurtas & Suits</DropdownItem>
                <DropdownItem>Kurtis, Tunics & Tops</DropdownItem>
                <DropdownItem>Ethnic Dresses</DropdownItem>
                <DropdownItem>Leggings, Salwars & Churidars</DropdownItem>
                <DropdownItem>Skirts & Palazzos</DropdownItem>
                <DropdownItem>Sarees & Blouse</DropdownItem>
                <DropdownItem>Lehenga Cholis</DropdownItem>
                <DropdownItem>Dupattas & Shawls</DropdownItem>
                <DropdownItem>Jackets & Waistcoats</DropdownItem>
                 <DropdownItem divider />
                <DropdownItem className="womenh">Belts, Scarves & More</DropdownItem>
                <DropdownItem className="menh">Watches & Wearables</DropdownItem>
               </Col>
                <Col className="even">
                <DropdownItem className="womenh"> Western Wear</DropdownItem>
                <DropdownItem>Dresses & Jumpsuits</DropdownItem>
                <DropdownItem>Tops, T-Shirts & Shirts</DropdownItem>
                <DropdownItem>Trousers & Capris</DropdownItem>
                <DropdownItem>Shorts</DropdownItem>
                <DropdownItem>Shorts & Skirts</DropdownItem>
                <DropdownItem>Sweaters & Sweatshirts</DropdownItem>
                <DropdownItem>Jackets & Coats</DropdownItem>
                <DropdownItem>Blazers & Waistcoat</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="womenh">Sunglasses & Frames</DropdownItem>
                </Col>
                <Col>
                <DropdownItem className="womenh"> Footwear</DropdownItem>
                <DropdownItem>Flats</DropdownItem>
                <DropdownItem>Heels</DropdownItem>
                <DropdownItem>Boots</DropdownItem>
                <DropdownItem>Sports Shoes & Floaters</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="womenh">Sports & Active Wear</DropdownItem>
                <DropdownItem>Clothing</DropdownItem>
                <DropdownItem>Footwear</DropdownItem>
                <DropdownItem>Sports Accessories</DropdownItem>
                <DropdownItem>Sports Equipment</DropdownItem>
                <DropdownItem>Track Pants & Joggers</DropdownItem>
                </Col>
                <Col className="even">
                <DropdownItem className="womenh"> Lingerie & Sleepwear</DropdownItem>
                <DropdownItem>Bras & Lingerie Sets</DropdownItem>
                <DropdownItem>Briefs</DropdownItem>
                <DropdownItem>Shapewear</DropdownItem>
                <DropdownItem>Sleepwear & Loungewear</DropdownItem>
                <DropdownItem>Swimwear</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="womenh"> Beauty & Personal Care</DropdownItem>
                <DropdownItem>Makeup</DropdownItem>
                <DropdownItem>Skincare</DropdownItem>
                <DropdownItem>Lipsticks</DropdownItem>
                <DropdownItem>Fragrances</DropdownItem>
               </Col>
               <Col>
                <DropdownItem className="womenh">  Gadgets</DropdownItem>
                <DropdownItem>Smart Wearables</DropdownItem>
                <DropdownItem>Fitness Gadgets</DropdownItem>
                <DropdownItem>Headphones</DropdownItem>
                <DropdownItem>Speakers</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="womenh"> Backpacks</DropdownItem>
                <DropdownItem className="womenh">Handbags, Bags & Wallets</DropdownItem>
                <DropdownItem className="womenh">Luggages & Trolleys</DropdownItem>
                </Col>
                </Row>
                </Container>

              </DropdownMenu>
              </UncontrolledDropdown>
            </NavItem>
             
<NavItem>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav ><NavLink href="#" className="link1">KIDS</NavLink></DropdownToggle>
              <DropdownMenu>
              <Container>
              <Row>
                <Col>
                <DropdownItem className="kidsh">Boys Clothing</DropdownItem>
                <DropdownItem>T-Shirt</DropdownItem>
                <DropdownItem>Shirts</DropdownItem>
                <DropdownItem>Shorts</DropdownItem>
                <DropdownItem>Jeans</DropdownItem>
                <DropdownItem>Trousers</DropdownItem>
                <DropdownItem>Clothing Sets</DropdownItem>
                <DropdownItem>Ethnic Wear</DropdownItem>
                <DropdownItem>Jacket, Sweater & Sweatshirts</DropdownItem>
                <DropdownItem>Innerwear & Sleepwear</DropdownItem>
                </Col>
                <Col className="even">
                <DropdownItem className="kidsh">Girls Clothing</DropdownItem>
                <DropdownItem>Dresses</DropdownItem>
                <DropdownItem>Tops</DropdownItem>
                <DropdownItem>Tshirts</DropdownItem>
                <DropdownItem>Clothing Sets</DropdownItem>
                <DropdownItem>Ethnic wear</DropdownItem>
                <DropdownItem>Dungarees & Jumpsuits</DropdownItem>
                <DropdownItem>Skirts & shorts</DropdownItem>
                <DropdownItem>Tights & Leggings</DropdownItem>
                <DropdownItem>Jeans, Trousers & Capris</DropdownItem>
                <DropdownItem>Jacket, Sweater & Sweatshirts</DropdownItem>
                <DropdownItem>Innerwear & Sleepwear</DropdownItem>
                </Col>
                <Col>
                <DropdownItem className="kidsh">Boys Footwear</DropdownItem>
                <DropdownItem>Casual Shoes</DropdownItem>
                <DropdownItem>Sports Shoes</DropdownItem>
                <DropdownItem>Sandals</DropdownItem>
                <DropdownItem>Flip flops</DropdownItem>
                <DropdownItem>School Shoes</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="kidsh">Girls Footwear</DropdownItem>
                <DropdownItem>Flats</DropdownItem>
                <DropdownItem>Casual Shoes</DropdownItem>
                <DropdownItem>Heels</DropdownItem>
                <DropdownItem>Flip flops</DropdownItem>
                <DropdownItem>Sandals</DropdownItem>
                <DropdownItem>School Shoes</DropdownItem>
                </Col>
                <Col className="even">
                <DropdownItem className="kidsh">Infants</DropdownItem>
                <DropdownItem>Rompers & Onesies</DropdownItem>
                <DropdownItem>Clothing Sets</DropdownItem>
                <DropdownItem>Tshirts & Tops</DropdownItem>
                <DropdownItem>Dresses</DropdownItem>
                <DropdownItem>Bottom wear</DropdownItem>
                <DropdownItem>Winter Wear</DropdownItem>
                <DropdownItem>Innerwear & Sleepwear</DropdownItem>
                <DropdownItem>Infants Accessories </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="kidsh">Kids Accessories</DropdownItem>
                <DropdownItem>Bags & Backpacks</DropdownItem>
                <DropdownItem>Watches</DropdownItem>
                <DropdownItem>Jewellery & Hair Accessories</DropdownItem>
                <DropdownItem>Eyewear</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="kidsh">Home & Bath</DropdownItem>
                </Col>
                <Col>
                <DropdownItem className="kidsh">Brands</DropdownItem>
                <DropdownItem>H&M</DropdownItem>
                <DropdownItem>United Colors of Benetton</DropdownItem>
                <DropdownItem>Yk</DropdownItem>
                <DropdownItem>U.S. Polo Assn. Kids</DropdownItem>
                <DropdownItem>GAP Kids</DropdownItem>
                <DropdownItem>Gini & Jony</DropdownItem>
                <DropdownItem>Peppermint</DropdownItem>
                <DropdownItem>next</DropdownItem>
                <DropdownItem>Allen Solly Junior</DropdownItem>
                <DropdownItem>Nike</DropdownItem>
                <DropdownItem>Pepe Jeans</DropdownItem>
                </Col>
                </Row>
                </Container>
              </DropdownMenu>
             </UncontrolledDropdown>
            </NavItem>
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav ><NavLink href="#" className="link1">HOME&LIVINGS</NavLink></DropdownToggle>
              <DropdownMenu>
              <Container>
              <Row>
                <Col>
                <DropdownItem className="menh">Bed Linen & Furnishing</DropdownItem>
                <DropdownItem>Bedsheets</DropdownItem>
                <DropdownItem>Bedding Sets</DropdownItem>
                <DropdownItem>Blankets, Quilts & Dohars</DropdownItem>
                <DropdownItem>Pillows & Pillow Covers</DropdownItem>
                <DropdownItem>Bed Covers</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="menh">Flooring</DropdownItem>
                <DropdownItem>Carpets</DropdownItem>
                <DropdownItem>Floor Mats & Dhurries</DropdownItem>
                <DropdownItem>Door Mats</DropdownItem>
               </Col>
              <Col className="even">
                <DropdownItem className="menh">Bath</DropdownItem>
                <DropdownItem>Bath Towels</DropdownItem>
                <DropdownItem>Hand & Face Towels</DropdownItem>
                <DropdownItem>Beach Towels</DropdownItem>
                <DropdownItem>Towels Set</DropdownItem>
                <DropdownItem>Bath Rugs</DropdownItem>
                <DropdownItem>Bath Robes</DropdownItem>
                <DropdownItem>Bathroom Accessories</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="menh">Lamps & Lighting</DropdownItem>
                <DropdownItem>Floor Lamps</DropdownItem>
                <DropdownItem>Table Lamps</DropdownItem>
                <DropdownItem>Wall Lamps</DropdownItem>
                </Col>
                <Col>
                <DropdownItem className="menh">Home Décor</DropdownItem>
                <DropdownItem>Plants & Planters</DropdownItem>
                <DropdownItem>Aromas & Candles</DropdownItem>
                <DropdownItem>Clocks</DropdownItem>
                <DropdownItem>Mirrors</DropdownItem>
                <DropdownItem>Wall Décor</DropdownItem>
                <DropdownItem>Wall Shelves</DropdownItem>
                <DropdownItem>Fountains</DropdownItem>
                <DropdownItem>Showpieces & Vases</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="menh">Cushions & Cushion Covers</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="menh">Curtains</DropdownItem>
                </Col>
                <Col className="even">
                <DropdownItem className="menh">Kitchen & Table</DropdownItem>
                <DropdownItem>Tableware & Serveware</DropdownItem>
                <DropdownItem>Bar & Drinkware</DropdownItem>
                <DropdownItem>Cookware & Kitchen Tools</DropdownItem>
                <DropdownItem>Kitchen Storage</DropdownItem>
                <DropdownItem>Table Covers & Furnishings</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="menh">Storage</DropdownItem>
                <DropdownItem>Organisers</DropdownItem>
                <DropdownItem>Hooks & Holders</DropdownItem>
                </Col>
                <Col>
                <DropdownItem className="menh">Brands</DropdownItem>
                <DropdownItem>Bombay Dyeing</DropdownItem>
                <DropdownItem>Spaces</DropdownItem>
                <DropdownItem>Decor</DropdownItem>
                <DropdownItem>Portico New York</DropdownItem>
                <DropdownItem>Pure Home & Living</DropdownItem>
                <DropdownItem>Swayam</DropdownItem>
                <DropdownItem>Raymond Home</DropdownItem>
                <DropdownItem>Maspar</DropdownItem>
                <DropdownItem>Corelle</DropdownItem>
                <DropdownItem>Trident</DropdownItem>
                <DropdownItem>Cortina</DropdownItem>
                <DropdownItem>Story@Home</DropdownItem>
                <DropdownItem>Random</DropdownItem>
                <DropdownItem>Home Sparkle</DropdownItem>
                <DropdownItem>ROMEE</DropdownItem>
                <DropdownItem>SEJ by Nisha Gupta</DropdownItem>
                </Col>
                </Row>
                </Container>
              </DropdownMenu>
             </UncontrolledDropdown>
            </NavItem>
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav ><NavLink href="#" className="link1">DISCOVER</NavLink></DropdownToggle>
              <DropdownMenu>
              <Container>
              <Row>
                <Col>
                <DropdownItem className="dish">Brands For Him</DropdownItem>
                <DropdownItem>H&M</DropdownItem>
                <DropdownItem>  W</DropdownItem>
                <DropdownItem>Forever21</DropdownItem>
                <DropdownItem>Marks & Spencer</DropdownItem>
                <DropdownItem>Dorothy Perkins</DropdownItem>
                <DropdownItem>Mango</DropdownItem>
                <DropdownItem>Hidesign</DropdownItem>
                <DropdownItem>MAC</DropdownItem>
                <DropdownItem>Pretty Secrets</DropdownItem>
                <DropdownItem>Wildcraft</DropdownItem>
                <DropdownItem>Accessorize</DropdownItem>
                <DropdownItem>Arrow</DropdownItem>
                <DropdownItem>Anouk</DropdownItem>
                <DropdownItem>all about you</DropdownItem>
                <DropdownItem>HRX by Hrithik Roshan</DropdownItem>
                <DropdownItem>House Of Pataudi</DropdownItem>
                </Col>
                <Col className="even">
                <DropdownItem className="dish">Brands For Her</DropdownItem>
                <DropdownItem>H&M</DropdownItem>
                <DropdownItem>Roadster</DropdownItem>
                <DropdownItem>United Colors of Benetton</DropdownItem>
                <DropdownItem>Nike</DropdownItem>
                <DropdownItem>Adidas</DropdownItem>
                <DropdownItem>GAP</DropdownItem>
                <DropdownItem>Tommy Hilfiger</DropdownItem>
                <DropdownItem>Marks & Spencer</DropdownItem>
                <DropdownItem>Louis Philippe</DropdownItem>
                <DropdownItem>Wildcraft</DropdownItem>
                <DropdownItem>Puma</DropdownItem>
                <DropdownItem>Blackberry</DropdownItem>
                <DropdownItem>INVICTUS</DropdownItem>
                <DropdownItem>WROGN</DropdownItem>
                <DropdownItem>HRX by Hrithik Roshan</DropdownItem>
                </Col>
                <Col>
                <DropdownItem className="dish"> Trends For Him</DropdownItem>
                <DropdownItem>Denim Destinations</DropdownItem>
                <DropdownItem>Athleisure</DropdownItem>
                <DropdownItem>Military Inspiration</DropdownItem>
                <DropdownItem>Monochrome</DropdownItem>
                <DropdownItem>Street</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="dish">Trends For Her</DropdownItem>
                <DropdownItem>Retro</DropdownItem>
                <DropdownItem>Indi</DropdownItem>
                <DropdownItem>Soft Romantic</DropdownItem>
                <DropdownItem>Summer Pastels</DropdownItem>
                <DropdownItem>Denim Destinations</DropdownItem>
                </Col>
                <Col className="even">
                <DropdownItem className="dish">Premium For Him</DropdownItem>
                <DropdownItem>American Eagle</DropdownItem>
                <DropdownItem>Superdry</DropdownItem>
                <DropdownItem>Lacoste</DropdownItem>
                <DropdownItem>Polo Ralph Lauren</DropdownItem>
                <DropdownItem>Calvin Klein</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="dish"> Premium For Her</DropdownItem>
                <DropdownItem>Forever New</DropdownItem>
                <DropdownItem>Aldo</DropdownItem>
                <DropdownItem>Guess</DropdownItem>
                <DropdownItem>Bobbi Brown</DropdownItem>
                <DropdownItem>Swarovski</DropdownItem>
                </Col>
                <Col>
                <DropdownItem className="dish">  Myntra Benefits</DropdownItem>
                <DropdownItem>Myntra Insider</DropdownItem>
                <DropdownItem>Try & Buy</DropdownItem>
                <DropdownItem>Easy Returns & Exchanges</DropdownItem>
                <DropdownItem>Customer Care</DropdownItem>
                <DropdownItem>Quick Guide</DropdownItem>
                <DropdownItem>Gift Card</DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="dish">Contest</DropdownItem>
                <DropdownItem>Myntra Fashion Superstar</DropdownItem>
                </Col>
                  </Row>
                </Container>
              </DropdownMenu>
             </UncontrolledDropdown>
            </NavItem>
              <NavItem>
               <div class="input-group search">
               <div class="input-group-btn">
                <img  className="icon2" type="submit"src="" style={{marginTop:10}}></img>
               </div>
        <input type="text" class="form-control" placeholder="Search the product, Brand and More" name="search" id="search"style={{marginTop:10}} />
      </div>
            </NavItem>
            <NavItem className="profile" style={{marginTop:10}}>
            <img className="icon1" src={profile}/><br/><span className="sp1">Profile</span>
            <div className="profileCard">
                <Profile/>
            </div>
            </NavItem>
            <NavItem>
            <img className="icon1" src={bookmark} style={{marginTop:8}}/><br/><span className="sp1">Wishlist</span>
            </NavItem>
            <NavItem>
            <img className="icon1" src={bag} style={{marginTop:8}}/><br/><span className="sp1"style={{marginLeft:59}}>Bag</span>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default header;