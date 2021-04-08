import  { profileRequest } from '../../services/api'
import {updateRequest} from '../../services/api'
import {deleteUserData} from '../../services/api'


export const getUser = () => {
  return (dispatch) => {
      profileRequest().then(response => {
      dispatch({type: 'SET_USER', payload: response})
    })
  }
}

export const setIncome = () =>{
  return (dispatch) => {
    updateRequest().then(response =>{
      dispatch({type: 'SET_INCOME', payload: response})
    })
  }
}

export const setBudget = () =>{
  return (dispatch) => {
    updateRequest().then(response =>{
      dispatch({type: 'SET_BUDGET', payload: response})
    })
  }
}

export const deleteUser = () =>{
  return (dispatch) => {
    deleteUserData().then(response =>{
      dispatch({type: 'DELETE_DATA', payload: response})
    })
  }
}