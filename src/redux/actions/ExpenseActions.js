import {ExpenseRequest} from '../../services/api'

export const getExpense = () => {
    return (dispatch) => {
        ExpenseRequest().then(response => {
        dispatch({type: 'ADD_EXPENSE', payload: response})
      })
    }
  }

  // remove 

  export const removeExpense = () => {
    return (dispatch) => {
        ExpenseRequest().then(response => {
        dispatch({type: 'REMOVE_EXPENSE', payload: response})
      })
    }
  }