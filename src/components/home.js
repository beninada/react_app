
import React from 'react'
import Login from './Login'
import Signup from './Signup'


class Home extends React.Component {

  render() {
    return (
      <div id="home">

        <h1>Welcome to Budget Tracker!</h1>
        <h3> "Treat your money like your mind, DON'T WASTE IT!"</h3>
        <h2><Login history={this.props.history}/></h2>
        <h2><Signup history={this.props.history}/></h2>
      </div>
    )
  }

}

export default Home