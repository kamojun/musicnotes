import React from 'react'
import {render} from 'react-dom'
import './style.css'
// import wow from './wowwow.js'
import Timer from './timer'
import Fquestion from './question'
import KeyBoard from './keyboard'

class App extends React.Component {
  render(){return(
    <p> Hello React!</p>
  )}
}

// render(<Timer/>, document.getElementById('app'));
// render(<App/>, document.getElementById('app'));
// render(<Fquestion ans='あ' option={'あいうえお'.split('')}/>, document.getElementById('app'));
render(<Fquestion ans="ド" />, document.getElementById('app'));
