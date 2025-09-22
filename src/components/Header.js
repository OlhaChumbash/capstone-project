import '../App.css';
import Nav from  './Nav'

function Header() {
  return (
    <div className="Header">
        <div className="logo">
        <a href='/'> <img src="/logo.svg" alt="Little Lemon Logo" /> </a>
      </div>
      <Nav />
    </div>
  );
}

export default Header;
