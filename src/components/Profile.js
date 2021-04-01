import React from 'react'
import { getUser } from '../redux/actions/userActions'
import { connect } from 'react-redux'
 import { getToken } from '../services/localStorage'
import { Redirect } from 'react-router-dom'
import Expenses from './Expenses'

class Profile extends React.Component {




  render() {
      console.log(getToken())
    return (
      <div>
         {!getToken() ? <Redirect to="/login" /> : null}

         {this.props.user.username ? <h1>{this.props.user.username}'s Profile</h1> : <h1>Loading...</h1>}

          <link to="/Expenses"/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {user,expenses} = state
  return {
    user, expenses
  }
}

export default connect(mapStateToProps)(Profile)