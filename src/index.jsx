import React from 'react'
import {render} from 'react-dom'
import { connect } from 'react-redux'
import './style.css'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer/question'

import Question from './container/question'
import KeyBoard from './component/keyboard'

const SomeUI = ({ dispatch }) => (
  <button onClick={ () => dispatch({type:"REPLY", response: 1}) }>do something</button>
)
const Connected = connect()(SomeUI)

render(
  <Provider store={createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    {/* <Question /> */}
    {/* <Connected /> */}
    <KeyBoard />
  </Provider>,
  document.getElementById('app')
)
