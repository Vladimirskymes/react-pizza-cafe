import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./scss/app.scss";
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./Redux/store"
import setPizzas from "./Redux/Actions/pizzas"



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store = {store}>
    <App>
      </App>
    </Provider>
     
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

