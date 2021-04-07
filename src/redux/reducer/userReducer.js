export default (state = {}, action) =>  {
    switch (action.type) {
      case "SET_USER":
        return action.payload || {}
      case "CLEAR_USER":
        return ({})
      case "SET_INCOME":
        return action.payload || {}
        case "CLEAR_INCOME":
          return ({})
        case "SET_BUDGET":
          return action.payload || {}
        case "CLEAR_BUDGET":
            return ({})
      default:
        return state
    }
  }