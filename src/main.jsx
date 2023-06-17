import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './main.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import api from './apis/serverApi';

const store = configureStore({
  reducer:allReducers,
  // enhancer: composeEnhancer(applyMiddleware(thunk)),
})


const user = JSON.parse(localStorage.getItem('userData'));

if (user !== null) {
  api.defaults.headers.common['Authorization'] = `Bearer ${user.token}`;
}

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
