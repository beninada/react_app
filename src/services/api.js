const URL = 'http://localhost:3000/'



const parseJSON = res => res.json()

const authHeaders = () => ({
  'Authorization': `Bearer ${localStorage.getItem('jwt')}`
})

const headers = () => ({
  'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
  "Accepts":"application/json", 
  "Content-Type": "application/json"
})

const loginHeaders = {
  'Accepts': 'application/json',
  'Content-Type': 'application/json'
}

export function authRequest(credentials) {
  return fetch(URL + 'login', {
    method: "POST",
    headers: loginHeaders,
    body: JSON.stringify({user: credentials})
  })
  .then(parseJSON)
}

export function signupRequest(credentials) {
  return fetch(URL + 'users', {
    method: "POST",
    headers: loginHeaders,
    body: JSON.stringify({user: credentials})
  })
  .then(parseJSON)
}
export function profileRequest() {
    console.log(authHeaders())
    return fetch(URL + 'profile', {
      headers: authHeaders()
    })
    .then(parseJSON)
  }

  // UPDATE 
  export function updateRequest(user_id, income,budget, monthly, year){
    return fetch(URL + `users/${user_id}`,{
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify({user:{income, budget, monthly, year } })
    })
    .then(parseJSON)
  }
  // export function deleteUserData(user_id){
  //   return fetch(URL + `users/${user_id}`),{
  //     method: "DELETE",
  //     headers: headers(),
  //     body: JSON.stringify()
  
  //   }
  //   .then(parseJSON)
  // }
 
  export function ExpenseRequest(user_id){
    return fetch(URL + `users/${user_id}/expenses`,{
      headers: headers(),
    })
    .then(parseJSON)
}


export function expenseTableRequest(user_id){
  return fetch(URL + `users/${user_id}/expensesTable`,{
    method: "POST",
    headers: headers(),
    body: JSON.stringify()
  })
  .then(parseJSON)
}

export function deleteExpense(user_id){
  return fetch(URL + `users/${user_id}/expensesTable/DELETE`),{
    method: "DELETE",
    headers: headers(),
    body: JSON.stringify()

  }
  .then(parseJSON)
}