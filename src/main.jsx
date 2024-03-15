import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './components/loginPage/Register';
import HomePage from './pages/home.jsx'
import Login from './components/loginPage/Login.jsx'
import Cart from './components/cart/Cart.jsx'
const router = new createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <h1>404</h1>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cart',
    element: <Cart />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
