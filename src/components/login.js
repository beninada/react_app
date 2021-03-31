import React from 'react'
import { authRequest } from '../services/api'
import { connect } from 'react-redux'

class Login extends React.Component {

  state = {
    username: '',
    password: '',
    message: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    const { username, password } = this.state

    authRequest({username, password})
    .then(res => {
      if (res.error) {
        this.setState({message: res.error})
      } else {
        localStorage.setItem('jwt', res.jwt)
        console.log(localStorage)

        this.props.history.push('/Signup')
      }
    })
  }

  handleChangeUsername = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>

          <p style={{color: 'blue'}}>{this.state.message}</p>

          <input type="text"
          name="username"
          onChange={this.handleChangeUsername}
          value={this.state.username}
          />

          <input type="password"
          onChange={this.handleChangePassword}
          value={this.state.password}
          />

          <input type="submit"
          value="Login"
          />

        </form>

      </div>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    setUser: user => dispatch({type: 'SET_USER', payload: user})
  }
}

export default connect(null, mapDispatchToProps)(Login)