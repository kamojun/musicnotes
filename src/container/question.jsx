import React from 'react'
import {connect} from 'react-redux'
import KeyBoard from '../component/keyboard'

class Question extends React.Component{
  render(){return(
    <div>
      <p>{this.props.ans}</p>
      <KeyBoard onClick={this.props.handleClick} />
    </div>
  )}
}

function Fquestion(props){return(
  <div>
    <p>{props.ans}</p>
    <KeyBoard />
  </div>
)}

function mapStateToProps(state) {
  return state
}
function handleClick(index){
  return {type: "CLICKED", index: index}
}
function mapDispatchToProps(dispatch) {
  return {
    handleClick: () =>{
       dispatch({ type: 'CORRECT' })
     }    // これで、propsにhandleClickが追加されるのかな
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Question);

// export default Fquestion
