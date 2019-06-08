import './style.css'
import React from 'react'
import {render} from 'react-dom'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'

import KeyBoard from './container/keyboard'
import Problem from './container/problem'
import Timer from './container/timer'

// const SomeUI = ({ dispatch }) => (
//   <button onClick={ () => dispatch({type:"REPLY", response: 1}) }>do something</button>
// )
// import { connect } from 'react-redux'
// const Connected = connect()(SomeUI)
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    {/* <Question /> */}
    {/* <Connected /> */}
    <Timer />
    <Problem />
    <KeyBoard />
  </Provider>,
  document.getElementById('app')
)
