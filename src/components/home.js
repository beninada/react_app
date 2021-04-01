
import React from 'react'
import Login from './Login'


class Home extends React.Component {

  render() {
    return (
      <div id="home">

        <h1>Welcome to Budget Tracker!</h1>
        <h3> "Treat your money like your mind, DON'T WAIST IT!"</h3>
        <h2><Login history={this.props.history}/></h2>
      </div>
    )
  }

}

export default Home