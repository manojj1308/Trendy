import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      phone:'',
      Dob:'',
      location:'',
      email: '',
      errors: {}
    }
  }

  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      phone: decoded.phone,
      Dob:  decoded.Dob,
      location: decoded.location,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5" id="git1">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>First Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>{this.state.phone}</td>
              </tr>
              <tr>
                <td>Date of birth</td>
                <td>{this.state.Dob}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{this.state.location}</td>
              </tr>
              <tr>
              <td><a href="/edit">
             <button type="submit" className="btn btn-lg btn-primary btn-block " > Edit! </button></a>
              </td>
                <td>
             <button href=" " onClick={this.logOut.bind(this)}  className="btn btn-lg btn-primary btn-block" style={{ width: "152px"}} > close </button>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Profile
