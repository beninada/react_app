import React, { Component } from 'react';




class Expenses extends Component {
    
    state = {
        income:'',
        typeOfExpense: '',
        price: '',
        budget: ''
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
    
    handleSubmit(event){
        alert(`A ${this.state} was submitted: ` + this.state);
        event.preventDefault()
        const {income, typeOfExpense, price, budget} = this.state
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>EXPENSE TRACKER:</h1>
                <label>Type of Expense:
                <textarea value={this.state.typeOfExpense} onChange={this.handleChangeTypeOfExpense}/>
                </label> 
                <label>price:
                <textarea value={this.state.price} onChange={this.handleChangePrice}/>
                </label> 
                <label>Budget:
                <textarea value={this.state.budget} onChange={this.handleChangeBudget}/>
                </label>

                <label>Income:
                <textarea value={this.state.income} onChange={this.handleChangeIncome}/>
                </label>

                 <input type="submit" value="Submit"/>
            </form>
       
        );
    }

}

export default(Expenses)

// do mapstatetoprops 
// dispatch
// make a fetch with the variable's values 


