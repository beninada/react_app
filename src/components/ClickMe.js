
// 1. It has to be it’s own class component
// 2. No Redux involved, react only.
// 3. You can google, but only syntax. No how to make an incrementer in redux.
// 4. You can render anywhere.
// 

import React, { Component } from 'react'

class ClickMe extends Component{

    state = {
        word: "",
        count: 0
    }
   

    handleChange = (event) =>{
       this.setState({word:event.target.value});

    }
  
    clickMeButton = (event) =>{
        event.preventDefault()
        this.setState({count: this.state.count + this.state.word.length
        })
       console.log(this.state.word)
       console.log(this.state.count + this.state.word.length)
      this.setState({word: ""});
      
    }
   
   
    render(){
        
        return(
            <div>
             <input type="text" value={this.state.word} onChange={this.handleChange}/>
             <p>{this.state.word.length} Characters!</p>
             <button onClick={this.clickMeButton}>CLICK ME!</button>
             <p>{this.state.count}</p>
            </div>
         
        )
    }

}

export default ClickMe


