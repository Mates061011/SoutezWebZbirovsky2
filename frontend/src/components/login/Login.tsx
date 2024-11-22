// src/pages/Login/Login.tsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext
import './loginRegister.css';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  // Get context value (might be null, so we handle it carefully)
  const authContext = useContext(AuthContext);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://soutezweb.onrender.com/api/users/login', {
        username,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('token', token);

      // If AuthContext is available (not null), update the user
      if (authContext) {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        authContext.setUser({
          userId: decodedToken.userId,
          username: decodedToken.username,
        });
      }

      navigate('/Work'); // Redirect on successful login
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleLogin} className='loginForm glassEffect'>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
