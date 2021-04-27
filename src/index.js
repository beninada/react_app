import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import reducer from './redux/reducer/index'
import thunk from 'redux-thunk'
import { Navbar } from 'react-bootstrap';


const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store= {store}>
    <App />
    <Navbar/>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
