import { Link, useNavigate, useLocation } from "react-router-dom";
import '../App.css';


function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      const interval = setInterval(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          clearInterval(interval);
        }
      }, 50);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <a href='/'> <img className="footer-logo" src="/logo.svg" alt="Little Lemon Logo" /> </a>
          <p className="footer-heading-descr">Traditional recipes with a modern twist</p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Navigation</h3>
          <ul className="footer-links">
            <li><button className="footer-link nav-button" onClick={() => scrollToSection("home")}>Home</button></li>
            <li><button className="footer-link nav-button" onClick={() => scrollToSection("about")}>About Us</button></li>
            <li><button className="footer-link nav-button" onClick={() => scrollToSection("specials")}>Specials</button></li>
            <li><Link className="footer-link" to="/reservations">Reservations</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">123 Lemon Street</p>
          <p className="footer-text">Chicago, IL 60616</p>
          <p className="footer-text">Phone: +1 (312) 555-1234</p>
          <p className="footer-text">Email: info@littlelemon.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Little Lemon. All rights reserved.</p>
        <p>
          Developed by{" "}
          <a href="https://www.linkedin.com/in/olha-chumbash-597568269/" target="_blank" rel="noreferrer">
            Olha Chumbash
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;