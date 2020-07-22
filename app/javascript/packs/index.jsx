// layoutに貼り付けたらreactがrailsで走る Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import App from './components/App'
import { createStore } from 'redux';
import reducer from './reducers/flower-list-reducer';
import { Provider } from 'react-redux';


const store = createStore(reducer);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
