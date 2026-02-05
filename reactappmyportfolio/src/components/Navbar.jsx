import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="header">
      <div className="container navRow">
        <div className="brand">
          <span style={{ color: "#7cf7c3" }}>◆</span> Abdullah Madani
        </div>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
