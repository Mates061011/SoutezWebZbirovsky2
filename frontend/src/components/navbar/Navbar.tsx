import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from "../../assets/logo.svg";
const Navigation = () => {
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
          <Link to="/Login">BETA Testing</Link>
        </div>
      </div>
    </nav>
  );
}
export default Navigation;