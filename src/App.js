import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// REDUX
import { connect } from 'react-redux'
import { getUser } from './redux/actions/userActions'
// COMPONENTS
import Home from "./components/Home"
import Login from "./components/Login"
 import Profile from "./components/Profile"
// CSS
import './App.css';
// SERVICES
import { clearToken, getToken } from './services/localStorage'
class App extends React.Component{
   
  
  handleLogout = () => {
    clearToken()
  }

  componentDidMount() {
    this.props.getUser()
  }
  
  render() {
    return (
      <Router>
      <div className="App">

      <Switch>

      <Route exact path="/" render={() => <Home />} />

      <Route path="/login" render={routerProps => <Login {...routerProps} />} />

      <Route path="/Signup" render={() => <Profile />} />

      </Switch>

      {getToken() ? <button onClick={this.handleLogout}>Logout</button> : null}

      </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser())
  }
}

export default connect(null, mapDispatchToProps)(App)


