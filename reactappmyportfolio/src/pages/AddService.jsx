import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createService } from "../services/api";

export default function AddService() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createService(form);
      navigate("/services");
    } catch (error) {
      console.log("Error creating service:", error);
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Add Service</h1>

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
          Add Service
        </button>
      </form>
    </section>
  );
}