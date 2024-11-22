import { Link } from 'react-router-dom';
import './footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-sections glassEffect">
        <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Work">Our Work</Link>
            <Link to="/News">News</Link>
        </div>
        <div className="footer-socials">
        <h3>Follow Us</h3>
            <div><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
              </a></div>
              <div><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                YouTube
              </a></div>
        </div>
      </div>
      <div className="footer-bottom glassEffect">
        <p>&copy; 2024 PixelForge Studios. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
