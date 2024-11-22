import React, { useState } from 'react';
import LoginForm from '../../components/login/Login';
import RegisterForm from '../../components/register/Register';
import './login.css';
const Login: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='loginCont'>
      <h1>{isLogin ? 'Login' : 'Register'} to your account</h1>
      
      {/* Conditionally render the Login or Register form */}
      {isLogin ? <LoginForm /> : <RegisterForm />}

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Create an account' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default Login;
