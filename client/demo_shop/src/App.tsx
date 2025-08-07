import React from 'react';
import AppRouter from './routes'
import { Provider } from 'react-redux';
import { store } from '@/features/store';
import './App.css'

function App() {

  return (
     <Provider store={store}>
      <React.StrictMode>
        <AppRouter />
      </React.StrictMode>      
    </Provider>
  )
}

export default App
