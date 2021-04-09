import React from 'react';
import { connect } from 'react-redux';



class SubmittedData extends React.Component{

render(){
    console.log(this.props)
   return ( 
    <div>
    <label>INCOME</label>
    <span><li>{this.props.user.income}</li></span>
    <label>BUDGET</label>
    <span><li>{this.props.user.budget}</li></span>
    <label>MONTHLY</label>
    <span><li>{this.props.user.monthly ? "true" : "false"}</li></span>
    <label>YEARLY</label>
    <span><li>{this.props.user.yearly ? "true" : "false"}</li></span>
    <label>SAVED</label>
   {/* <span><li>{ this.props.user.income ? "" : -  this.props.user.price} </li></span> */}
   </div>
   )
}
// create a ternary for price and submitted data 

// substractData = () =>{

// }


}
const mapStateToProps = state =>{
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(SubmittedData)