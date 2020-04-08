import React from 'react';
import Header from './Header'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes'
import Global from './Styles/globalStyles'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <BrowserRouter>
    <Global />
    <ToastContainer />
    <Header />
    <Routes />
    
    
      
    </BrowserRouter>
  );
}

export default App;
