import  { profileRequest } from '../../services/api'


export const getUser = () => {
  return (dispatch) => {
      profileRequest().then(response => {
      dispatch({type: 'SET_USER', payload: response})
    })
  }
}

export const setIncome = () =>{
  return (dispatch) => {
    profileRequest().then(response =>{
      dispatch({type: 'SET_INCOME', payload: response})
    })
  }
}