import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// REDUX
import { connect } from 'react-redux'
import { getUser } from './redux/actions/userActions'
// COMPONENTS
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/Signup"
 import Profile from "./components/Profile"
 import Expenses from "./components/Expenses"
 import ExpensesTable from "./components/ExpensesTable"
// CSS
import './App.css';
// SERVICES
import { clearToken, getToken } from './services/localStorage'

class App extends React.Component{
   
  
  handleLogout = () => {
    clearToken()
    this.props.clearUser()
  }

  componentDidMount() {
    this.props.getUser()
  }
  
  render() {
    return (
      <Router>
      <div className="App">

      <Switch>

      <Route exact path="/" render={routerProps => <Home {...routerProps}/>} />

      <Route path="/login" render={routerProps => <Login {...routerProps} />} />

      <Route path="/Signup" render={routerProps => <Signup {...routerProps} />} />

      <Route path="/profile" render={() => <Profile />} />

      <Route exact path="/expenses" render={() => <Expenses />} />

      <Route path="/expenses/expensesTable" render={() => <ExpensesTable/>}/>

      </Switch>

      {this.props.user.username ? <button onClick={this.handleLogout}>Logout</button> : null}

      </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser()),
    clearUser: () => dispatch({type: "CLEAR_USER"})
  }
}

export default connect(state => state, mapDispatchToProps)(App)


