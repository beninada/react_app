import React from 'react';
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'




class ExpensesTable extends React.Component{

   
  
      
     render(){       
       return(
            <div>
                <Table>
                <tbody>
                    {this.props.items.map(item => {
                            return (
                                <tr key={item.id}>
                                <th><h1>TYPE OF EXPENSE:</h1></th>
                                <td>{item.typeOfExpense}</td>
                                <th><h1>PRICE:</h1></th>
                                <td>{item.price}</td>
                                </tr> 
                                
                            );
                    })}

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