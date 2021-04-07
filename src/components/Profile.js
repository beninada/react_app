import React from 'react'
// import { getUser } from '../redux/actions/userActions'
import { connect } from 'react-redux'
 import { getToken } from '../services/localStorage'
import { Redirect } from 'react-router-dom'
import { setIncome } from '../redux/actions/userActions'
import {setBudget} from '../redux/actions/userActions'
import { profileRequest } from '../services/api'
import {updateRequest} from '../services/api'



class Profile extends React.Component {
 
  state ={
    income: '',
    budget: '',
    year: '', 
    monthly: ''
  }
// create NAV BAR 
// const datetime 
// set income/budget once - edit - display
// always display the table 
// make a hash of month, year dropdown
// purchase - name and price 


   
    datetime = () => {
        this.datetime =(this.datetime.now)
    }


    handleChangeIncome= event=>{
      this.setState({income: event.target.value})
    }


    handleChangeBudget= event=>{
      this.setState({budget:event.target.value})
    }

    handleChangeMonthly = (event) =>{
      this.setState({monthly:event.target.value})
    }
    handleChangeYear = (event) =>{
      this.setState({year:event.target.value})
    }
    
    handleSubmit = (event) =>{
      event.preventDefault()
      updateRequest(this.props.user_id)
      const {income,budget, monthly,year} = this.state
      this.setState({income:'', budget: '', monthly: '',year: ''})
    }
    
   

  render() {
      console.log(getToken())
    return (
      

      <div>
     
         {!getToken() ? <Redirect to="/login" /> : null}

         {this.props.user.username ? <h1>{this.props.user.username}'s Profile</h1> : <h1>Loading...</h1>}
         <form onSubmit={this.handleSubmit}>
                <label>INCOME:
                <textarea value={this.state.income} onChange={this.handleChangeIncome}/>
                </label>
                <label>BUDGET:
                <textarea value={this.state.budget} onChange={this.handleChangeBudget}/>
                </label>
                <label> YEAR:
                 <select name="year" value={this.state.year}onChange={this.handleChangeYear}>
                   <option value= "true">true</option>
                   <option value= "false">false</option>
                 </select>  
                </label>
                <label> MONTHLY:
                <select name="Montlhy" value={this.state.monthly}onChange={this.handleChangeMonthly}>
                   <option value= "true">true</option>
                   <option value= "false">false</option>
                 </select>  
                </label>
               
                <input type="submit" value="Submit"/>

        
            </form>       
        
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
const mapDispatchToProps = dispatch =>{
  return{
    setIncome: user => dispatch(setIncome(this.state.income)),
    setBudget: user => dispatch(setBudget(this.state.budget))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)