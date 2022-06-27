import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'

import './index.css';
import App from './App';
import {createStore} from './store/index'
import { Provider} from  'react-redux'

const store = createStore(window.__STATE__);
delete window.__STATE__;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  
);

