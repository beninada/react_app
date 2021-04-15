import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addExpenseRequest, getExpenses } from '../services/api';
import ExpensesTable from './ExpensesTable'
import SubmittedData from './SubmittedData'
import { setIncome } from '../redux/actions/userActions'
import {setBudget} from '../redux/actions/userActions'
import { getToken } from '../services/localStorage'
import { Redirect } from 'react-router-dom'
import {NavLink} from 'react-router-dom'


class Expenses extends Component {
    
    state = {
        typeOfExpense: '',
        price: '',
        items: [],
        showTable: false
    }

    componentDidMount(expense){
        
        getExpenses().then(expenses => {
            console.log(expense)
            for(let expense of expenses){
                this.state.items.push({
                    typeOfExpense: expense.name,
                    price: expense.amount
                })
            }
        })
    }


    handleChangeTypeOfExpense= event =>{
        this.setState({typeOfExpense: event.target.value})
    }

    handleChangePrice= event=>{
        this.setState({price:event.target.value})
    }


    
    handleSubmit = (event) =>{
        event.preventDefault()

        addExpenseRequest({
            expense: {
                name: this.state.typeOfExpense,
                amount: this.state.price
            }
        }).then(json => {
            const {name, amount} = json
            let items = [...this.state.items][0]
            this.state.items.push({
                typeOfExpense: name,
                price: amount
            })
            this.setState({typeOfExpense:'',price:''})
        }).catch(err => {
            console.log(err)
            alert(err)
        })

        
    }
   
    
    handleClick = () =>{
        this.setState({
            showTable: !this.state.showTable
        });
    }
         
    getComponent = () =>{
        if (this.state.showTable){
            return <ExpensesTable items = {this.state.items}/>;
            
        }else {
            return null;
        }
    }

    renderMoneyRemaining = () => {
        const totalToSpend = this.props.user.budget
        let totalSpent = 0
        for(let item of this.state.items){
            totalSpent += item.price
        }
        return totalToSpend - totalSpent
    }
      
    
    
    render() {
     
        return (
            
            <>
             {!getToken() ? <Redirect to="/login" /> : null}
             <NavLink to="/">HOME</NavLink> <NavLink to="/profile">PROFILE</NavLink>
            <form onSubmit={this.handleSubmit}>
                <h1>EXPENSE TRACKER:</h1>
                <label>TYPE OF EXPENSE:
                <table items= {this.state.items}/>
                <textarea value={this.state.typeOfExpense} onChange={this.handleChangeTypeOfExpense}placeholder={this.state.typeOfExpense} />
                </label>
                <label>PRICE:
                <textarea value={this.state.price} onChange={this.handleChangePrice}placeholder={this.state.price} />
                </label>
                <input type="submit" value="Submit"/>

        
            </form>

            <div>
                <SubmittedData/>

            <button onClick={this.handleClick}>Show Table</button>
            <span>{this.getComponent()}</span>
            <h1>Money Spent</h1>
            <p>{this.props.user.budget - this.renderMoneyRemaining()}</p>
            <h1>Money Remaining!</h1>
            <p>{this.renderMoneyRemaining()}</p>
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





 

