import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/api";

export default function AddUser() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await createUser(form);
      navigate("/users");
    } catch (error) {
      console.log("Error creating user:", error);
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Add User</h1>

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

        <div className="formGrid" style={{ marginTop: 12 }}>
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn" style={{ marginTop: 14 }}>
          Add User
        </button>
      </form>
    </section>
  );
}