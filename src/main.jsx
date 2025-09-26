import React from 'react';
import { createRoot } from 'react-dom/client';
//import { App } from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Ecommerce } from './App.jsx';
import { AuthContextProvider } from './services/context/AuthContext.jsx';
import { Home } from './home.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <Home />

    </AuthContextProvider>
  </BrowserRouter>
)

