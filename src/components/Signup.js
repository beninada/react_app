import React, { Component } from "react";
import {connect} from "react-redux";
import {signupRequest} from '../services/api'
import {getUser} from '../redux/actions/userActions'
class Signup extends React.Component {
//  sign up is not working
    state = {
        username: '',
        password: '',
        message: ''
      }
    
    handleSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state

    signupRequest({username, password})
    .then(res => {
        if (res.error) {
        this.setState({message: res.error})
        } else {
        localStorage.setItem('jwt', res.jwt)
        this.props.getUser(res.user)
        this.props.history.push('/profile')
        
        }
    })
    this.setState({username: '', password:''})
    }
    
    handleChangeUsername = event => {
        this.setState({[event.target.name]: event.target.value})
    }
    
    handleChangePassword = event => {
        this.setState({password: event.target.value})
    }
        render(){
            return (
                <div>
        
                <form onSubmit={this.handleSubmit}>
        
                    <p style={{color: 'pink'}}>{this.state.message}</p>
                    <h3>SIGN UP:</h3>
                    <input type="text"
                    name="username"
                    onChange={this.handleChangeUsername}
                    placeholder="Username"
                    value={this.state.username}
                    />
        
                    <input type="password"
                    onChange={this.handleChangePassword}
                    placeholder="Password"
                    value={this.state.password}
                    />
        
                    <input type="submit"
                    value="Signup"
                    />
        
                </form>
        
                </div>
            )
        }
}
const mapDispatchToProps = dispatch => {
    return {
      getUser: user => dispatch(getUser(user))
    }
  }
  
export default connect(null, mapDispatchToProps)(Signup)