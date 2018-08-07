/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from 'react-router-dom';


import generalOverviewReducer from './store/reducers/generalOverview';

import App from './App';

const mainReducer = combineReducers({ generalOverview: generalOverviewReducer });

const store = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

let appElement = (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>);

ReactDOM.render(appElement, document.getElementById('root'));
registerServiceWorker();
