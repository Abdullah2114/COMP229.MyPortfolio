import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Mission: To build clean, efficient software solutions.</p>
      <Link to="/about">
        <button>Learn About Me</button>
      </Link>
    </div>
  );
}
