import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Dashboard</h1>
      <p style={{ color: "rgba(233,238,247,0.75)" }}>
        Manage your portfolio content using the sections below.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <div className="card">
          <h2 style={{ marginTop: 0 }}>Projects</h2>
          <p style={{ color: "rgba(233,238,247,0.75)" }}>
            Add, edit, and delete project entries.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/projects" className="btn">View</Link>
            <Link to="/add-project" className="btn">Add</Link>
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Services</h2>
          <p style={{ color: "rgba(233,238,247,0.75)" }}>
            Manage your service offerings.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/services" className="btn">View</Link>
            <Link to="/add-service" className="btn">Add</Link>
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Users</h2>
          <p style={{ color: "rgba(233,238,247,0.75)" }}>
            Add and manage user records.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/users" className="btn">View</Link>
            <Link to="/add-user" className="btn">Add</Link>
          </div>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>References</h2>
          <p style={{ color: "rgba(233,238,247,0.75)" }}>
            Manage references submitted from the site.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to="/references" className="btn">View</Link>
            <Link to="/add-reference" className="btn">Add</Link>
          </div>
        </div>
      </div>
    </section>
  );
}