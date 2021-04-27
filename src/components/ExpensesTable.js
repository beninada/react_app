import React from 'react';
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'




class ExpensesTable extends React.Component{
    
    render(){       
        return(
          <div>
            <Table>
                <tbody>
                    {this.props.items.map((item, i,idx1, idx2) => {
                        return (
                            <>
                            <tr key={i}>
                            <th><h1>TYPE OF EXPENSE:</h1></th>
                            <td>{item.typeOfExpense}</td>
                            <th><h1>PRICE:</h1></th>
                            <td>{item.price}</td>
                            <td><button key={`button-${i}`} onClick={() =>this.props.onDelete(item)}>X</button></td>
                            </tr> 
                            </>
                        );}
                        
                    )}

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


// make a constant for rows and give rows a key