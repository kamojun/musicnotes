import React from 'react'
import {connect} from 'react-redux'

class App extends React.Component {
  render(){return(
    <div>
      <span>{this.props.fuga}</span>
      <button onClick={this.props.handleClick}>増加</button>
    </div>
  )}
}
function Fapp(props){
  return(
    <div>
      <span>{this.props.fuga}</span>
      <button onClick={ () => this.props.handleClick() }>増加</button>
    </div>
  )
}

function mapStateToProps(state) {
  return state
}
function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => dispatch({ type: 'INCREMENT' })    // これで、propsにhandleClickが追加されるのかな
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
