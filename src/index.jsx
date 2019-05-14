import React from 'react'
import {render} from 'react-dom'
import Timer from './timer'
// import wow from './wowwow.js'

class App extends React.Component {
  render(){return(
    <p> Hello React!</p>
  )}
}

render(<Timer/>, document.getElementById('app'));
// render(<App/>, document.getElementById('app'));
