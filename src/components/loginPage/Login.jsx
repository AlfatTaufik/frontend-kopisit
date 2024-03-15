import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import Popup from '../popup/Popup';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [httpCode, setHttpCode] = useState(0);
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false)
      localStorage.removeItem('msg');
    }, 3000);

    return () => clearTimeout(timer);
  }, [])

  const handleLogin = () => {
    const login = async () => {
      const res = await axios.post('http://127.0.0.1:8000/api/auth/login', {
        email: email,
        password: password
      })
        .then(res => {
          setHttpCode(res.status)
          localStorage.setItem('msg', res.data.msg)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('name', res.data.data.name)
          console.log(res)
          navigate('/')
        })
        .catch(err => {
          setError(err.response.data.msg)
          alert('Username atau password salah');
          console.log(err)
        })
    }

    login()

  };

  return (
    <div className="login-container">
      {showPopup && localStorage.getItem('msg') && <Popup />}
      <div className='login__form'>
        <h2>Login Disini</h2>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        <p className="register-link">Belum punya akun? </p>
        <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default Login;
