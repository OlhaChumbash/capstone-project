import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import '../App.css';

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
        setActive(id);
      }, 150); // чуть больше времени, чтобы секции точно отрендерились
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  useEffect(() => {
    if (location.pathname === "/reservations") {
      setActive("reservations");
    } else if (location.pathname === "/") {
      const handleScroll = () => {
        const about = document.getElementById("about");
        const specials = document.getElementById("specials");
        const scrollPos = window.scrollY + 100;

        if (specials && scrollPos >= specials.offsetTop) {
          setActive("specials");
        } else if (about && scrollPos >= about.offsetTop) {
          setActive("about");
        } else {
          setActive("home");
        }
      };

      setTimeout(handleScroll, 200);

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [location]);

  return (
    <div className="Nav">
      <ul>
        <li className={active === "home" ? "active" : ""}><Link to="/">Home</Link></li>
        <li className={active === "about" ? "active" : ""}>
          <button className="nav-button" onClick={() => scrollToSection("about")}>About us</button>
        </li>
        <li className={active === "specials" ? "active" : ""}>
          <button className="nav-button" onClick={() => scrollToSection("specials")}>Specials</button>
        </li>
        <li className={active === "reservations" ? "active" : ""}><Link to="/reservations">Reservations</Link></li>
      </ul>
    </div>
  );
}

export default Nav;
