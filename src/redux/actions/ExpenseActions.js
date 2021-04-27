import {deleteExpense} from '../../services/api'



  export const removeExpense = () => {
    return (dispatch) => {
       deleteExpense().then(response => {
        dispatch({type: 'REMOVE_EXPENSE', payload: response})
      })
    }
  }