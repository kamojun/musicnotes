import './style.css'
import React from 'react'
import {render} from 'react-dom'

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'

import KeyBoard from './container/keyboard'
import Problem from './container/problem'
import Timer from './container/timer2'
import Notes from './container/notes'

function stopTimer({dispatch, getState}) {
  return next => action => {
    next(action)   // とりあえず正規のreducerを呼び出す
    if(getState().question.hasJustFinished){   // その結果問題が終了した時
      dispatch({type: "STOP"})          // STOPアクション
    }
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancers(applyMiddleware(stopTimer)))
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <Timer defaultText=""/>
    <Notes />
    <KeyBoard keyNums={[2]}/>
    <br/>
    <KeyBoard keyNums={[1]}/>
    <br/>
    <KeyBoard keyNums={[0]}/>
    <br/>
    <KeyBoard keyNums={[-1]}/>
  </Provider>,
  document.getElementById('app')
)
document.getElementById("timer").addEventListener("click", ()=>{window.location.href="#Notes"})
