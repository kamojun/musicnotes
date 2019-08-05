import { combineReducers } from 'redux'
import question from './question.js'
import timer from './timer.js'
import ui from './ui.js'

export default combineReducers({ question, timer, ui })
