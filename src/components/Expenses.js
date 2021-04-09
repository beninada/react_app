import React, { Component } from 'react';
import {connect} from 'react-redux'
import { ExpenseRequest } from '../services/api';
import ExpensesTable from './ExpensesTable'
import SubmittedData from './SubmittedData'
import { setIncome } from '../redux/actions/userActions'
import {setBudget} from '../redux/actions/userActions'
import { getToken } from '../services/localStorage'
import { Redirect } from 'react-router-dom'



class Expenses extends Component {
    
    state = {
        typeOfExpense: '',
        price: '',
        items: [],
        showTable: false
    }


    handleChangeTypeOfExpense= event =>{
        this.setState({typeOfExpense: event.target.value})
    }

    handleChangePrice= event=>{
        this.setState({price:event.target.value})
    }


    
    handleSubmit = (event) =>{
        event.preventDefault()
        ExpenseRequest(this.props.user.id)
        const { typeOfExpense, price} = this.state
        let items = [...this.state.items][0]
         this.state.items.push({
            typeOfExpense: this.state.typeOfExpense,
            price: this.state.price
        })
        this.setState({typeOfExpense:'',price:''})
        
       
    }
   
    
        handleClick = () =>{
            this.setState({
               showTable: !this.state.showTable
            });
        }
         
        getComponent = () =>{
            if (this.state.showTable){
                console.log(this.state.items)
                return <ExpensesTable items = {this.state.items}/>;
               
            }else {
                return null;
            }
        }
      
   
    
    render() {
     
        return (
            
            <>
             {!getToken() ? <Redirect to="/login" /> : null}
           
            <form onSubmit={this.handleSubmit}>
                <h1>EXPENSE TRACKER:</h1>
                <label>Type of Expense:
                <table items= {this.state.items}/>
                <textarea value={this.state.typeOfExpense} onChange={this.handleChangeTypeOfExpense}/>
                </label>
                <label>Price:
                <textarea value={this.state.price} onChange={this.handleChangePrice}/>
                </label>
                <input type="submit" value="Submit"/>

        
            </form>

            <div>
                <SubmittedData />
            <button onClick={this.handleClick}>Show Table</button>
            <span>{this.getComponent()}</span>
            <button onClick={this.removeExpense}>REMOVE</button>
            
            </div>
            </>
        );
    }

}

const mapStateToProps= state =>{
  const {user,  typeOfExpense, price} = state 
    return{
       user,  typeOfExpense, price
    }
}

const mapDispatchToProps= (dispatch) =>{
    return {
        setIncome:  dispatch => dispatch(setIncome(this.props.listOfSubmission.income)),
        setBudget: dispatch => dispatch(setBudget(this.props.listOfSubmission.budget))
      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses)





 

