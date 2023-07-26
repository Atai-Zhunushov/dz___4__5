import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/";
import './index.css';
import {logger} from "redux-logger/src"
import thunk from "redux-thunk";
import App from './App';

const store = createStore(rootReducer , applyMiddleware(logger , thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

