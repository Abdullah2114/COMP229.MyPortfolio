import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjects, deleteProject } from "../services/api";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (error) {
      console.log("Error loading projects:", error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteProject(id);
      setProjects(projects.filter((p) => p.id !== id));
    } catch (error) {
      console.log("Error deleting project:", error);
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Projects</h1>
      <p style={{ color: "rgba(233,238,247,0.75)" }}>
        Here are my projects from the database.
      </p>

      <div style={{ marginBottom: 16 }}>
        <Link to="/add-project" className="btn">Add Project</Link>
      </div>

      <div className="projectsGrid">
        {projects.map((p) => (
          <div className="projectCard" key={p.id}>
            <div className="projectBody">
              <h3 style={{ margin: "6px 0" }}>{p.title}</h3>

              <p style={{ margin: "6px 0", color: "rgba(233,238,247,0.75)" }}>
                {p.description}
              </p>

              <p style={{ margin: "8px 0" }}>
                <strong>Completion:</strong>{" "}
                {p.completion ? new Date(p.completion).toLocaleDateString() : ""}
              </p>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                <Link to={`/edit-project/${p.id}`} className="btn">Edit</Link>

                <button
                  onClick={() => handleDelete(p.id)}
                  className="btn"
                  type="button"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}