// src/components/Navigation/Navigation.tsx
import  { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';
import Logo from "../../assets/logo.svg";
import { AuthContext } from '../../context/AuthContext'; // Import the AuthContext

const Navigation = () => {
  const authContext = useContext(AuthContext); // Get the auth context
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from localStorage and reset the user context
    localStorage.removeItem('token');
    if (authContext) {
      authContext.setUser(null); // Reset user context to null
    }
    navigate('/Login'); // Redirect to Login page after logout
  };

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
        {/* Render logout button if the user is logged in */}
        {authContext?.user && (
          <button onClick={handleLogout} className="logoutButton">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
