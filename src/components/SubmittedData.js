import React from 'react';
import { connect } from 'react-redux';



class SubmittedData extends React.Component{

render(){
    console.log(this.props)
   return ( 
    <div>
    {/* <label>INCOME</label>
    <span><li>{this.props.submittedData.income}</li></span>
    <label>BUDGET</label>
    <span><li>{this.props.submittedData.budget}</li></span>
    <label>MONTHLY</label>
    <span><li>{this.props.submittedData.monthly ? "true" : "false"}</li></span>
    <label>YEARLY</label>
    <span><li>{this.props.submittedData.yearly ? "true" : "false"}</li></span> */}
   </div>
   )
}




}
const mapStateToProps = state =>{
    return {
        submittedData: state.submittedData
    }
}
export default connect(mapStateToProps)(SubmittedData)