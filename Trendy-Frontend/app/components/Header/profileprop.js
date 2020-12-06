import React from 'react';
import { CardBody,Card, Button } from 'reactstrap'
import Jwt_decode from 'jwt-decode';
import {Link} from 'react-router-dom';
import './profileprop.css';

function Profile(){
    const token= localStorage.usertoken
    if(token == undefined || token == 'undefined'  || token == '' || token == null){
        return(
            <Card className="plog">
            <CardBody>
                <h4>Welcome to Trendy</h4>
              <span> <Link to="/register"><Button>Sign Up</Button></Link></span> 
               <span> <Link to="/login"><Button>Login</Button></Link></span>
            </CardBody>
        </Card>
        )
    }  
    else{
        var decoded= Jwt_decode(token)
        var user=decoded.first_name
        return(
            <Card className="pprofile">
            <CardBody>
    <p>Welcome {user}</p>
    <div >
       <p><a className="plist" href="/profile">My Profile</a></p>
        <p><a className="plist" href="/Cart">Your Orders </a></p>
       <p><a className="plist" href="">Offers</a></p> 
    </div>
    <Button onClick={()=>{ localStorage.removeItem('usertoken')
    window.location.reload();
}}>Logout</Button>
            </CardBody>
        </Card>
        )
    }

}
export default Profile;
