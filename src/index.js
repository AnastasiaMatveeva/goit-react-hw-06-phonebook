import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/phonebook/store';
import {Provider} from 'react-redux';
import 'modern-normalize/modern-normalize.css';
import './styles.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
