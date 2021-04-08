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
    yearly: true, 
    monthly: false,
    listOfSubmissions: [{income: this.props.user.income,
                        budget: this.props.user.budget,
                        monthly: this.props.user.monthly,
                        yearly: this.props.user.yearly
            }]
  }
// create NAV BAR component
// const datetime 
// set income/budget once - edit - display
// always display the table 
// make a hash of month, yearly dropdown
// purchase - name and price 


   
   


    handleChangeIncome= event=>{
      this.setState({
        income: event.target.value
      })
      // this.datetime =(this.datetime.now)
    }


    handleChangeBudget= event=>{
      this.setState({
        budget:event.target.value
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
      updateRequest(this.props.user.id,income,budget,monthly,yearly)
      let listOfSubmissions = [...this.state.listOfSubmissions][0]
      this.state.listOfSubmissions.push({
        income: this.state.income,
        budget: this.state.budget,
        monthly: this.state.monthly,
        yearly: this.state.yearly
      })
      this.setState({income:'', budget: '', monthly: '',yearly: ''})
    }
    
   
    submittedData = ()=> {
      return this.state.listOfSubmissions.map(data =>{
          return <div>
                <label>INCOME</label>
                <span><li>{data.income}</li></span>
                <label>BUDGET</label>
                <span><li>{data.budget}</li></span>
                <label>MONTHLY</label>
                <span><li>{data.monthly ? "true" : "false"}</li></span>
                <label>YEARLY</label>
                <span><li>{data.yearly ? "true" : "false"}</li></span>
               </div>
      })
      
    }
    

  render() {
      // console.log(getToken())
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
                <label> yearly:
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
               
                <input type="submit" value="Submit"/>
              </form>       
              {this.submittedData()}
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