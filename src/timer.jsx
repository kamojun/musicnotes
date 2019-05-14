import React from 'react'

export default class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {...this.props, text: "測ってみよう", isRecording: false};
    this.recordTime = null;
  }
  _changeText(e){
    this.setState({text: e.target.value});
  }
  _startButton(e){
    let timelapse = null;
    if(this.state.isRecording){
      timelapse = ((new Date()).getTime()) - this.recordTime
    } else {
      this.recordTime = (new Date()).getTime()
    }
    this.setState({
      text: this.state.isRecording ? `${Math.floor(timelapse/1000)}秒` : "計測中",
      isRecording: !this.state.isRecording,
    });
  }
  _resetButton(e){
    this.setState({
      text: "測ってみよう",
      isRecording: false,
    })
  }
  render(){return(
    <div>
      <p>{this.state.text}</p>
      <button onClick={this._startButton.bind(this)}>{this.state.isRecording ? "ストップ" : "スタート"}</button>
      <button onClick={this._resetButton.bind(this)}>リセット</button>
    </div>
  )}
}
