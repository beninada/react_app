import React, { Component } from 'react';




class Expenses extends Component {
    
    state = {
        name: '',
        amount: '',
        date: ''
    }

    getDate() {
        let date = { currentTime: new Date().toLocaleString() };
    
        this.setState({
          date: date
        });
    }

    handleChange(event){
        this.setState(event.target.value)
    }

    handleSubmit(event){
        alert(`A ${this.state} was submitted: ` + this.state);
        event.preventDefault()
        const {name, amount, date} = this.state
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <textarea value={this.state} onChange={this.handleChange}/>
                    <label>Amount:
                            <textarea value={this.state} onChange={this.handleChange}/>
                

                        <label>date:
                        
                         <textarea value={this.state.date} onChange={this.handleChange}/>
                            

                
                            <input type="submit" value="Submit"/>
                        </label>

                    </label> 

                </label>
             </form>
       
            );
        }

    }

export default(Expenses)



