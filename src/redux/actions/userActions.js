import { signupRequest } from '../../services/api'


export const getUser = () => {
  return (dispatch) => {
    signupRequest().then(response => {
      dispatch({type: 'SET_USER', payload: response})
    })
  }
}