import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

interface PrivateRouteProps {
  children: JSX.Element; // Očekává podřízený element
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const authContext = useContext(AuthContext);

  // Pokud uživatel není přihlášen, přesměrujte na stránku Login
  if (!authContext?.user) {
    return <Navigate to="/Login" replace />;
  }

  // Pokud je přihlášen, renderujte děti
  return children;
};

export default PrivateRoute;
