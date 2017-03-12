import React from 'react'

import { render } from 'react-dom'
import { createStore } from 'react-redux'
import { Provider } from 'react-redux'

import App6 from './App6.jsx'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('app')

render(

   <Provider store = {store}>
      <App6 />
   </Provider>,
	
   rootElement
)