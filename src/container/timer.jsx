import React from 'react'
import {connect} from 'react-redux'

function Timer({text, stopped, onStart, onStop, onReset}){return(
  <div>
    <p>{text}</p>
    <button onClick={stopped ? onStart : onStop}>{stopped ? "スタート" : "ストップ"}</button>
    <button onClick={onReset}>リセット</button>
  </div>
)}

function mapStateToProps({timer:{start_time, elapsed_time}}) {return(
  start_time===null ?
    elapsed_time===null ?
     {text: '測ってみよう', stopped: true} :
     {text: `${Math.floor((elapsed_time)/1000)}秒`, stopped: true} :
    {text: '計測中', stopped: false}
)}

function mapDispatchToProps(dispatch) {
  return {
    onStart: () => dispatch({ type: 'START' }),
    onStop: () => dispatch({ type: 'STOP' }),
    onReset: () => dispatch({ type: 'RESET'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);

//
// function mapStateToProps({start_time, elapsed_time}) {
//   if (start_time===null){
//     if (elapsed_time===null){
//       return {text: '測ってみよう', stopped: true}
//     }
//     else {
//       return {text: `${Math.floor((elapsed_time)/1000)}秒`, stopped: true}
//     }
//   }
//   else {
//     return {text: '計測中', stopped: false}
//   }
//
//   }
// }
