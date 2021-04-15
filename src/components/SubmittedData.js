import React from 'react';
import { connect } from 'react-redux';



class SubmittedData extends React.Component{

render(){
    // console.log(this.props)
   return ( 
    <div className="expenses">
    <ul>
        <li>INCOME</li>
        <li>{this.props.user.income}</li>
    </ul>
    <ul>
        <li>BUDGET</li>
        <li>{this.props.user.budget}</li>
    </ul>
    <ul>
        <li>MONTHLY</li>
        <li>{this.props.user.monthly ? "true" : "false"}</li>
    </ul>
    <ul>
        <li>YEARLY</li>
        <li>{this.props.user.yearly ? "true" : "false"}</li>
    </ul>
   </div>
   )
}

  


}
const mapStateToProps = state =>{
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(SubmittedData)