import React, { Component } from 'react';
import {connect} from 'react-redux'
import { ExpenseRequest } from '../services/api';
import ExpensesTable from './ExpensesTable'



class Expenses extends Component {
    
    state = {
        income:'',
        typeOfExpense: '',
        price: '',
        budget: '',
        items: [],
        showTable: false
    }
// const datetime 
// set income/budget once - edit - display
// always display the table 
// make a hash of month, year dropdown
// purchase - name and price 


    // componentDidMount(){
    //     this.state.income
    // }
    datetime = () => {
        this.datetime =(this.datetime.now)
    }

    handleChangeIncome= event=>{
        this.setState({income: event.target.value})
    }

    handleChangeTypeOfExpense= event =>{
        this.setState({typeOfExpense: event.target.value})
    }

    handleChangePrice= event=>{
        this.setState({price:event.target.value})
    }

    handleChangeBudget= event=>{
        this.setState({budget:event.target.value})
    }
    
    handleSubmit = (event) =>{
        event.preventDefault()
        alert(`A ${this.state[0]} was submitted: ` + this.state);
        ExpenseRequest(this.props.user.id)
        const {income, typeOfExpense, price, budget} = this.state
        let items = [...this.state.items][0]
         this.state.items.push({
            typeOfExpense: this.state.typeOfExpense,
            price: this.state.price,
            budget: this.state.budget,
            income: this.state.income,
        })
        this.setState({typeOfExpense:'',price:'',budget:'',income: ''})
        // this.dispatch({type: "REMOVE_EXPENSE", payload: this.state})
       
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
            <form onSubmit={this.handleSubmit}>
                <h1>EXPENSE TRACKER:</h1>
                <label>Type of Expense:
                <table items= {this.state.items}/>
                <textarea value={this.state.typeOfExpense} onChange={this.handleChangeTypeOfExpense}/>
                </label>
                <label>Price:
                <textarea value={this.state.price} onChange={this.handleChangePrice}/>
                </label>
                <label>Monthly Budget:
                <textarea value={this.state.budget} onChange={this.handleChangeBudget}/>
                </label>

                <label>Income:
                <textarea value={this.state.income} onChange={this.handleChangeIncome}/>
                </label>
                
                 <input type="submit" value="Submit"/>

        
            </form>

            <div>
            <button onClick={this.handleClick}>Show Table</button>
            <span>{this.getComponent()}</span>
            <button onClick={this.removeExpense}>REMOVE</button>
            
            </div>
            </>
        );
    }

}

const mapStateToProps= state =>{
  const {user, income, typeOfExpense, price, budget} = state 
    return{
       user, income, typeOfExpense, price, budget
    }
}


export default connect(mapStateToProps)(Expenses)



// dispatch
// make a fetch with the variable's values 
// import delete from fetch services/api

 

