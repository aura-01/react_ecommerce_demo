//import React, { useState } from 'react';
//import './App.css';
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

export function LoginPage(){
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/home');
  };
  return (
    <div className="login-page">
      <div className="login-card">
        <h1 style={{marginBottom: '10px'}}>E-commerce Website</h1>
        <h2 style={{marginBottom: '25px', color: '#007bff'}}>Login Page</h2>
        <form className="login-form" onSubmit={e => { e.preventDefault(); handleLogin(); }}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <div className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </div>
      </div>
    </div>
  );
}

export function HomePage(){
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get('http://localhost:8000/api/products').then(res => {
      let products = res.data;
      return products;
    }).catch(err => {
      console.error(err);
    });
    return [];
  }
  return(
    <div>
    <h1>Admin Dashboard</h1>
    <h2>Here you can manage your products</h2>
    <ProductForm />
    <button style={{background: 'white', color: 'black'}} onClick={()=>{window.location.href='/'}}>Logout</button>
    </div>
  )
}

function AppNavigator(){
  return <Routes>
    <Route path='/' element={<LoginPage/>}></Route>
    <Route path='/home' element={<HomePage/>}></Route>
  </Routes>;
}

export function Ecommerce(){
  return <AppNavigator></AppNavigator>
}

