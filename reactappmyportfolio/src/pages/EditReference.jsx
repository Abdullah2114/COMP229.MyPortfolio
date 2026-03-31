import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getReferenceById, updateReference } from "../services/api";

export default function EditReference() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    loadReference();
  }, []);

  async function loadReference() {
    try {
      const data = await getReferenceById(id);

      setForm({
        firstname: data.firstname || "",
        lastname: data.lastname || "",
        email: data.email || "",
      });
    } catch (error) {
      console.log("Error loading reference:", error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await updateReference(id, form);
      navigate("/references");
    } catch (error) {
      console.log("Error updating reference:", error);
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Edit Reference</h1>

      <form onSubmit={handleSubmit}>
        <div className="formGrid">
          <input
            name="firstname"
            placeholder="First Name"
            value={form.firstname}
            onChange={handleChange}
            required
          />
          <input
            name="lastname"
            placeholder="Last Name"
            value={form.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginTop: 12 }}>
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn" style={{ marginTop: 14 }}>
          Update Reference
        </button>
      </form>
    </section>
  );
}