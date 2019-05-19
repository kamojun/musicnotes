import React from 'react'
import {render} from 'react-dom'
import './style.css'

import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducer'

import Test from './container/test'

// render(<Timer/>, document.getElementById('app'));
// render(<App/>, document.getElementById('app'));
// render(<Fquestion ans='あ' option={'あいうえお'.split('')}/>, document.getElementById('app'));
// render(<Fquestion ans="ド" />, document.getElementById('app'));

render(
  <Provider store={createStore(reducer)}>
    <Test />
  </Provider>,
  document.getElementById('app')
)
