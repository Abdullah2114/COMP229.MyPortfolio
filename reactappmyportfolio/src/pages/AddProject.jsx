import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProject } from "../services/api";

export default function AddProject() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    completion: "",
    description: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createProject(form);
      navigate("/projects");
    } catch (error) {
      console.log("Error creating project:", error);
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Add Project</h1>

      <form onSubmit={handleSubmit}>
        <div className="formGrid">
          <input
            name="title"
            placeholder="Project Title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <input
            name="completion"
            type="date"
            value={form.completion}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <textarea
            name="description"
            placeholder="Description"
            rows="5"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn" style={{ marginTop: 14 }}>
          Add Project
        </button>
      </form>
    </section>
  );
}