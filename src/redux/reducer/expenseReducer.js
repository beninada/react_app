const expenseReducer = (state = [], action) => {
    switch (action.type){
        case "SET_EXPENSE":
        return action.payload.expense || state
        case "ADD_EXPENSE":
            return [...state,action.payload]
         case "REMOVE_EXPENSE":
            return state.filter(expense => expense !== action.payload)
        default: 
        return state
        
    }    
};
export default expenseReducer

