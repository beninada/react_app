import {combineReducers} from 'redux'
import userReducer from './userReducer'
import expenseReducer from './expenseReducer'
import dataReducer from './dataReducer'



export default combineReducers({
    user: userReducer,
    expenses: expenseReducer,
     submittedData: dataReducer,
    
})
