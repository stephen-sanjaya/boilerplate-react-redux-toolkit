import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from '@reduxjs/toolkit'
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';
import {store} from './store'
import { Provider} from  'react-redux'

const stores = createStore(window.__STATE__);
delete window.__STATE__;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={stores}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  
);

