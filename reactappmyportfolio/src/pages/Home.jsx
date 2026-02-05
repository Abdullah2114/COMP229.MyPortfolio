import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="card">
      <h1 style={{ marginTop: 0 }}>Hi, I’m Abdullah Madani </h1>
      <p style={{ color: "rgba(233,238,247,0.75)" }}>
        I am a Software Engineering student focused on building clean and responsive web applications.
      </p>

      <div className="grid2">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Mission Statement</h2>
          <p style={{ color: "rgba(233,238,247,0.75)" }}>
            My goal is to build simple, user-friendly web apps and continuously improve my skills in React and JavaScript.
          </p>
          <Link to="/projects" className="btn">View My Projects</Link>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Quick Links</h2>
          <p style={{ color: "rgba(233,238,247,0.75)" }}>
            Learn more about me and how to contact me.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/about" className="btn">About Me</Link>
            <Link to="/contact" className="btn">Contact</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
