import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/signin");
  }

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

          {!token ? (
            <>
              <Link to="/add-user">Sign Up</Link>
              <Link to="/signin">Sign In</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="btn"
                style={{ padding: "8px 14px" }}
              >
                Sign Out
              </button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}