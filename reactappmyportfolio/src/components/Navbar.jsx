import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav style={{display:"flex",justifyContent:"space-between",padding:"15px",background:"#111"}}>
      <Logo />
      <div style={{display:"flex",gap:"15px"}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}
