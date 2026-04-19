import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../services/api";

export default function AddUser() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await signup(form);

      if (res.success) {
        navigate("/signin");
      } else {
        setMessage(res.message || "Sign up failed.");
      }
    } catch (error) {
      console.log("Error creating user:", error);
      setMessage("Sign up failed.");
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Sign Up</h1>

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
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn" style={{ marginTop: 14 }}>
          Create Account
        </button>
      </form>

      {message && (
        <p style={{ marginTop: 12, color: "#ff9b9b" }}>
          {message}
        </p>
      )}
    </section>
  );
}