import '../App.css';

function Footer() {
  return (
    <>
      <style>{`
        .footer {
          color: white;
          margin-top: 40px;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
          background-color: var(--light-primary-color);
          padding: 40px 20px 0px;
          justify-items: center
        }
          
        .footer-heading, .footer-heading-descr {
          font-size: 20px;
          margin-bottom: 10px;
          color: #f4ce14;
        }
.footer-heading-descr{
         font-size: 20px;          
        font-weight: bold;
}
        .footer-logo {
           width: 200px;
      }

        .footer-text {
          font-size: 16px;
          margin: 4px 0;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin: 6px 0;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #f4ce14;
        }

        .footer-bottom {
          border-top: 1px solid #f4ce14;
          padding-top: 8px;
          font-size: 14px;
          text-align: center;
        }

        .footer-bottom a {
          color: #323cff;
          text-decoration: none;
        }

        .footer-bottom a:hover {
          text-decoration: underline;
        }

      .footer-bottom p {
        margin: 0;
  color :#292929;
      }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
          <a href='/'> <img   className="footer-logo" src="/logo.svg" alt="Little Lemon Logo" /> </a>
            <p className="footer-heading-descr">Traditional recipes with a modern twist</p>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Navigation</h3>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="/reservations">Reservations</a></li>
              <li><a href="#">About Us</a></li>
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
            <a
              href="https://www.linkedin.com/in/olha-chumbash-597568269/"
              target="_blank"
              rel="noreferrer"
            >
              Olha Chumbash
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
