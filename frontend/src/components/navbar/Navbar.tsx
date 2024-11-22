// src/components/Navigation/Navigation.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from "../../assets/logo.svg";
import { AuthContext } from '../../context/AuthContext'; // Import the AuthContext

const Navigation = () => {
  const authContext = useContext(AuthContext); // Get the auth context

  return (
    <nav>
      <div className='navbar glassEffect'>
        <div className="logo">
          <img src={Logo} alt="" />
          <Link to="/">PixelForge Studio</Link>
        </div>
        <div className='links'>
          <Link to="/About">O nás</Link>
          <Link to="/Work">Projekty</Link>
          {/* Conditionally render the Link */}
          {authContext?.user ? (
            <Link to="/UserPanel">User Panel</Link> // Show "User Panel" if logged in
          ) : (
            <Link to="/Login">BETA Testing</Link> // Show "Login" link if not logged in
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
