import React, { useState } from 'react';
import axios from 'axios';
import '../login/loginRegister.css';
interface LoginResponse {
  message: string;
  token: string;
}

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post<LoginResponse>('http://localhost:5000/api/users/register', { username, password });
      console.log('Login success:', response.data.message);
      // Store the token (localStorage or context)
      localStorage.setItem('token', response.data.token);
      // Redirect to a protected page
      // window.location.href = '/dashboard'; // example redirect
    } catch (err: any) {
      setError('Invalid username or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}  className='loginForm glassEffect'>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;
