import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './register.css';
import axios from 'axios';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleRegister = () => {
    const register = async () => {
      const res = await axios.post('http://127.0.0.1:8000/api/auth/register', {
        name: name,
        email: email,
        password: password
      })
        .then(res => {
          localStorage.setItem('msg', res.data.msg)
          console.log(res)
          navigate('/login')
        })
        .catch(err => {
          setError(err.response.data)
          console.log(err)
        })
    }

    register()
  };

  return (
    <div className="register-container">
      <div className='register__form'>
        {error && <p className="error-message">{error.error.name}</p>}
        {error && <p className="error-message">{error.error.email}</p>}
        {error && <p className="error-message">{error.error.password}</p>}
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        {error && <p className="error-message">{error.msg}</p>}
        <button onClick={handleRegister}>Register</button>
        <p className="login-link">Sudah punya akun?</p>
      </div>
    </div>
  );
}

export default Register;
