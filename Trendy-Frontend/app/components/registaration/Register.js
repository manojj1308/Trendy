import React, { Component } from 'react'
import { register } from '../../../ApiService'
import "./register.css";
class Register extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone:'',
      Dob:'',
      location:'',
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

    const newUser = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      Dob:this.state.Dob,
      phone:this.state.phone,
      location:this.state.location
    }

    register(newUser).then(res => {
      this.props.history.push(`/login`)
    })
  }

  render() {
    return (
      <div className="total">  
      <div className="container" >
      <div className="card"  id="cs1">
        <div className="row">
          <div className="col-md-8 mt-5 mx-auto signcard">
            <form noValidate onSubmit={this.onSubmit}>
            <div>
          <p class="reg-title">Signup with Trendy</p>
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
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
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
                  placeholder="Enter DOB"
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
                className="btn btn-lg btn-primary btn-block b1 "
              >
                Register
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

export default Register
