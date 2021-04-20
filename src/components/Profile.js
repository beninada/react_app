import React from 'react'
import { connect } from 'react-redux'
 import { getToken } from '../services/localStorage'
import { Redirect } from 'react-router-dom'
import { setIncome } from '../redux/actions/userActions'
import {setBudget} from '../redux/actions/userActions'
import {setData} from '../redux/actions/userActions'
import SubmittedData from './SubmittedData'
import {NavLink} from 'react-router-dom'



class Profile extends React.Component {
  
  
  
  // initialState = {
  //   income: '',
  //   budget: '',
  //   yearly: true, 
  //   monthly: false,
   
  // }
  state ={
    income: '',
    budget: '',
    yearly: true, 
    monthly: false,
   

  }

   handleChangeIncome= event=>{
      const income = event.target.value.replace(/[^0-9.]/g, "")
      this.setState({
        income
      })
     
    }


    handleChangeBudget= event=>{
      const budget = event.target.value.replace(/[^0-9.]/g, "")
      this.setState({
        budget
      })
    }

    handleChangeMonthly = (event) =>{
      this.setState({
        monthly:event.target.value
      })
    }
    handleChangeYearly = (event) =>{
      this.setState({
        yearly:event.target.value
      })
    }
    
    handleSubmit = (event) =>{
      event.preventDefault()
      console.log(this.props.user.id)
      const {income,budget, monthly,yearly} = this.state
      // updateRequest(this.props.user.id,income,budget,monthly,yearly)
      this.props.setData(this.props.user.id,{user: {income, budget, monthly,yearly}})
      this.setState({income: '', budget: '', monthly: '',yearly: ''})
    }
   
    
    // handleClick = () =>{
    //   this.setState({
    //     listOfSubmissions: this.state.listOfSubmissions
    //   });
    // }
    // handleClickDelete = () =>{
    //  this.setState({
    //   ...this.initialState 
    //  })
    // }

  render() {
      console.log(getToken())
    return (
     
      <div>
        
         {!getToken() ? <Redirect to="/login" /> : null}

         {this.props.user.username ? <h1>{this.props.user.username}'s Profile</h1> : <h1>Loading...</h1>}
         <NavLink to="/expenses">EXPENSES</NavLink>

         <form onSubmit={this.handleSubmit}>
                <label>INCOME:
                <textarea value={this.state.income} onChange={this.handleChangeIncome}/>
                </label>
                <label>BUDGET:
                <textarea value={this.state.budget} onChange={this.handleChangeBudget}/>
                </label>
                <label> YEARLY:
                 <select name="yearly" value={this.state.yearly}onChange={this.handleChangeYearly}>
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
               
                <input type="submit" value="SUBMIT"/>
              </form> 
                 
              <SubmittedData />
              
              {/* <button onClick={this.handleClickDelete}>REMOVE</button> */}
          </div>
    )
  }
}

const mapStateToProps = state => {
  const {user,expenses, submittedData} = state
  return {
    user, expenses, submittedData
  }
}
const mapDispatchToProps = dispatch =>{
  return{
    setIncome: income => dispatch(setIncome(income)),
    setBudget: budget => dispatch(setBudget(budget)),
    setData: (user_id,data)=> dispatch(setData(user_id,data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)