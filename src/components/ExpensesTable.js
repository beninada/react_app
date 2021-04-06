import React, { Component } from 'react';
import { connect } from 'react-redux'
import Expenses from './Expenses'
import Table from 'react-bootstrap/Table'



class ExpensesTable extends Component{
   
   
     render(){
        const items =  this.props.items
       return(
            <div id="ExpensesTable">
                <Table>
                <tbody>
                    <tr>
                       {this.props.items.map(item => {
                            return (
                                <tr>
                                <th><h1>Income:</h1></th>
                                <td>{item.income}</td>
                                <th><h1>Type of Expenses:</h1></th>
                                <td>{item.typeOfExpense}</td>
                                <th><h1>Price:</h1></th>
                                <td>{item.price}</td>
                                <th><h1>Budget:</h1></th>
                                <td>{item.budget}</td>
                                </tr>
                                
                                );
                            })}
                    </tr>
                </tbody>

                </Table>

            </div>
        );

    }


}


const mapDispatchToProps= dispatch =>{
    return {
    
        addExpense: expense => dispatch({type: "ADD_EXPENSE", payload:expense}),
        removeExpense: expense => dispatch({type: "REMOVE_EXPENSE", payload:expense})
    }
}


export default connect(state => state, mapDispatchToProps)(ExpensesTable)