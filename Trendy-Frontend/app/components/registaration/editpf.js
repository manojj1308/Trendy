import React, { Component } from 'react'
import { update } from '../../../ApiService'
import jwt_decode from 'jwt-decode'
import "./register.css";
import {withRouter} from 'react-router-dom'
class Update extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      phone:'',
      Dob:'',
      Location:'',
      errors: {}
    }
this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)    
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const updateData = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      Dob: this.state.Dob,
      location: this.state.location,

      token:localStorage.usertoken
    }
    update(updateData).then(res => {
      localStorage.removeItem('usertoken')
      this.props.history.push(`/login`)
    })
  }
  
  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      phone: decoded.phone,
      Dob: decoded.Dob,
      Location: decoded.Location 
    })
  }

  render() {
    return (
      <div className="total">  
      <div className="container" >
      <div className="card"  id="cs1" >
        <div className="row">
         
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate className="eprofile" onSubmit={this.onSubmit}>
            <div>
          <p class="reg-title">Welcome  Trendy</p>
          </div>
          <p class="reg-title2">EASILY USING</p>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.state.first_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.state.last_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                disabled/>
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone No</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Enter phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Dob">Date of Birth</label>
                <input
                  type="text"
                  className="form-control"
                  name="Dob"
                  placeholder="Enter Dob"
                  value={this.state.Dob}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  placeholder="Enter Location"
                  value={this.state.location}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block ">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
      </div>
     </div>
    )
  }
}

export default withRouter(Update)
