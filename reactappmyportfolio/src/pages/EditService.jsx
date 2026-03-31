import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getServiceById, updateService } from "../services/api";

export default function EditService() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    loadService();
  }, []);

  async function loadService() {
    try {
      const res = await getServiceById(id);
      const item = res.data;

      setForm({
        title: item.title || "",
        description: item.description || "",
      });
    } catch (error) {
      console.log("Error loading service:", error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await updateService(id, form);
      navigate("/services");
    } catch (error) {
      console.log("Error updating service:", error);
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Edit Service</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Service Title"
          value={form.title}
          onChange={handleChange}
          required
        />

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
          Update Service
        </button>
      </form>
    </section>
  );
}