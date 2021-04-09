const dataReducer = (state = {}, action) => {
    switch (action.type){
        case "ADD_DATA":
            console.log(action)
        return action.payload 
         default: 
         return state
        
    }    
  }