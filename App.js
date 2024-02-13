import React, { useState } from 'react'
import { Provider } from 'react-redux';
import Login from './modules/login/components/screen/Login';
import store from './modules/store/rootReducer.js';

export default function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>

  )
}