
import { Component } from 'react'
import { Link } from 'react-router-dom'

class NavBar extends Component{
    
    render(){
        return (
            <nav>

            <Link to="/profile">PROFILE</Link>
            <Link to="/expenses">EXPENSES</Link>
            </nav>
        )
    }

}

export default NavBar