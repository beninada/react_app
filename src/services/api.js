const URL = 'http://localhost:3000/'



const parseJSON = res => res.json()

const authHeaders = () => ({
  'Authorization': `Bearer ${localStorage.getItem('jwt')}`
})

const ExpenseHeaders = () => ({
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

export function profileRequest() {
    console.log(authHeaders())
    return fetch(URL + 'profile', {
      headers: authHeaders()
    })
    .then(parseJSON)
  }
 
  export function ExpenseRequest(user_id){
    return fetch(URL + `users/${user_id}/expenses`,{
      headers: ExpenseHeaders(),
    })
    .then(parseJSON)
}


export function expenseTableRequest(user_id){
  return fetch(URL + `users/${user_id}/expensesTable`,{
    method: "POST",
    headers: ExpenseHeaders(),
    body: JSON.stringify()
  })
  .then(parseJSON)
}

export function deleteExpense(){
  return 
}