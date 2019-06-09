import './style.css'
import React from 'react'
import {render} from 'react-dom'

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'

import KeyBoard from './container/keyboard'
import Problem from './container/problem'
import Timer from './container/timer'

function stopTimer({dispatch, getState}) {
  return next => action => {
    next(action)
    if(getState().question.finished){
      dispatch({type: "STOP"})
    }
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(stopTimer)))
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    {/* <Question /> */}
    {/* <Connected /> */}
    {/* <Timer /> */}
    <Problem />
    <KeyBoard />
  </Provider>,
  document.getElementById('app')
)
