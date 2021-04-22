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
  export function updateRequest(user_id, user){
    return fetch(URL + `users/${user_id}`,{
      method: "PATCH",
      headers: headers(),
      body: JSON.stringify(user)
    })
    .then(parseJSON)
  }
  export function deleteUserData(){
    return fetch(URL + `users`,{
      method: "DELETE",
      headers: headers(),
      body: JSON.stringify()
  
    })
    .then(parseJSON)
  }

  export function getExpenses(){
    return fetch(URL + 'expenses', {
      headers: headers()
    })
    .then(parseJSON)
  }
 
  export function addExpenseRequest(expenseData){
    return fetch(URL + `expenses`,{
      method: "POST",
      headers: headers(),
      body: JSON.stringify(expenseData)
    })
    .then(parseJSON)
}




export function deleteExpense(expenseId){
  console.log(expenseId)
  return fetch(URL + `expenses/${expenseId}`,{
    method: "DELETE",
    headers: headers(),
    body: JSON.stringify()

  })
  .then(parseJSON)
}