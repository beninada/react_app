import React, { Component } from 'react';




class Expenses extends Component {
    
    state = {
        Type: '',
        amount: '',
        budget: ''
    }

    handleChangeType= event =>{
        this.setState({[event.target.type]: event.target.value})
    }

    handleChangeAmount= event=>{
        this.setState({[event.target.amountAvailable]:event.target.value})
    }

    handleChangeBudget= event=>{
        this.setState({[event.target.budget]:event.target.value})
    }
    
    handleSubmit(event){
        alert(`A ${this.state} was submitted: ` + this.state);
        event.preventDefault()
        const {name, amount, budget} = this.state
    }
    
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <h1>EXPENSE TRACKER:</h1>
                    <label>Type:
                     <textarea value={this.state.type} onChange={this.handleChangeType}/>
                       <label>Amount:
                             <textarea value={this.state.amount} onChange={this.handleChangeAmount}/>
                         <label>Budget:
                                <textarea value={this.state.budget} onChange={this.handleChangeBudget}/>
                            </label>
                        </label> 
                    </label>
                 
                  <input type="submit" value="Submit"/>
                </form>
       
            );
        }

    }

export default(Expenses)



