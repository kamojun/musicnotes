import React from 'react'
import KeyBoard from './keyboard'

class Question extends React.Component{
  constructor(props){
    super(props)
  }
}

function CorrectAnswer(e){
  console.log(e.target, '正解!')
}

function Fquestion(props){return(
  <div>
    <p>{props.ans}</p>
    <KeyBoard />
  </div>
)}

export default Fquestion
