import React from 'react';
import {connect} from 'react-redux'



class SubmittedData extends React.Component{

render(){
   return ( 
    <div>
    <label>INCOME</label>
    <span><li>{this.props.listOfSubmissions.income}</li></span>
    <label>BUDGET</label>
    <span><li>{this.props.listOfSubmissions.budget}</li></span>
    <label>MONTHLY</label>
    <span><li>{this.props.listOfSubmissions.monthly ? "true" : "false"}</li></span>
    <label>YEARLY</label>
    <span><li>{this.props.listOfSubmissions.yearly ? "true" : "false"}</li></span>
   </div>
   )
}




}

const mapDispatchToProps= (dispatch) =>{
    return {

    }
}

export default connect(mapDispatchToProps)(SubmittedData)