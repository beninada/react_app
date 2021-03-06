import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addExpenseRequest,getExpenses,deleteExpense } from '../services/api'
import ExpensesTable from './ExpensesTable'
import SubmittedData from './SubmittedData'
import { setIncome } from '../redux/actions/userActions'
import {setBudget} from '../redux/actions/userActions'
import { getToken } from '../services/localStorage'
import { Redirect } from 'react-router-dom'
import Navbar from "./Navbar"
import ClickMe from './ClickMe'



class Expenses extends Component {
    
    state = {
        typeOfExpense: '',
        price: '',
        items: [],
        showTable: false
    }

    componentDidMount(){
        getExpenses().then(expenses => {
            for(let expense of expenses){
                // console.log(expense)
                this.state.items.push({
                    typeOfExpense: expense.name,
                    price: expense.amount, 
                    id: expense.id
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
                amount: this.state.price,
                
            }
        }).then(json => {
            const {name, amount, id} = json
            this.state.items.push({
                typeOfExpense: name,
                price: amount,
                id
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
            return <ExpensesTable items = {this.state.items} onDelete={this.handleClickDelete}/>;
            // call handleclick =delete 
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


    handleClickDelete = (itemToDelete) =>{

         const newItems = this.state.items.filter(item => {
          return item.id !== itemToDelete.id
          })
          this.setState({items: newItems})
        deleteExpense(itemToDelete.id)
    }
   
    
    
    render() {
       
        const {items, typeOfExpense, price} = this.state
        return (
            <>
          
            {!getToken() ? <Redirect to="/login" /> : null}
             {this.props.user.username ? <h1>{this.props.user.username}'s Expenses</h1> : <h1>Loading...</h1>}
            <Navbar/>
            {/* <ClickMe /> */}
           
            <form onSubmit={this.handleSubmit}>
                <h1>EXPENSE TRACKER:</h1>
                <label>TYPE OF EXPENSE:
                <table items= {items}/>
                <textarea value={typeOfExpense} onChange={this.handleChangeTypeOfExpense} placeholder={typeOfExpense} />
                </label>
                <label>PRICE:
                <textarea value={price} onChange={this.handleChangePrice} placeholder={price} />
                </label>
                <input type="submit" value="Submit"/>
            </form>

            <div>
                <SubmittedData/>
                
            <button onClick={this.handleClick}>Show Table</button>
            <span>{this.getComponent()}</span>
            <h1>Money Spent</h1>
            <p>{this.props.user.budget - this.renderMoneyRemaining()|| null}</p>
            <h1>Money Remaining!</h1>
            <p>{this.renderMoneyRemaining()|| null}</p>
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

// userActions
const mapDispatchToProps= (dispatch) =>{
    return {
        setIncome:  dispatch => dispatch(setIncome(this.props.income)),
        setBudget: dispatch => dispatch(setBudget(this.props.budget))

      }
}

export default connect(mapStateToProps, mapDispatchToProps)(Expenses)





 

