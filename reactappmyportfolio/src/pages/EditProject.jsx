import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProjectById, updateProject } from "../services/api";

export default function EditProject() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    completion: "",
    description: "",
  });

  useEffect(() => {
    loadProject();
  }, []);

  async function loadProject() {
    try {
      const res = await getProjectById(id);
      const item = res.data;

      setForm({
        title: item.title || "",
        completion: item.completion ? item.completion.substring(0, 10) : "",
        description: item.description || "",
      });
    } catch (error) {
      console.log("Error loading project:", error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await updateProject(id, form);
      navigate("/projects");
    } catch (error) {
      console.log("Error updating project:", error);
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Edit Project</h1>

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
          Update Project
        </button>
      </form>
    </section>
  );
}