import React from 'react'
import {connect} from 'react-redux'

function Timer({text, started, onStart, onReset}){return(
  <div id='timer'>
    <button onClick={started ? onReset : onStart}>{started ? "リセット" : "スタート"}</button>
    &nbsp;<span>{text}</span>
  </div>
)}

function mapStateToProps({timer:{start_time, elapsed_time}}, {defaultText}) {return(
  start_time===null ?
    elapsed_time===null ?
     {text: defaultText, started: false} :
     {text: `${Math.floor((elapsed_time)/1000)}秒`, started: false} :
    {text: '計測中', started: true}
)}

function mapDispatchToProps(dispatch) {
  return {
    onStart: () => dispatch({ type: 'START' }),
    // onStop: () => dispatch({ type: 'STOP' }),
    onReset: () => dispatch({ type: 'RESET'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
