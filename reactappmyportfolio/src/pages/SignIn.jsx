import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function SignIn() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
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
      const res = await signin(form);

      if (res.success) {
        login(res.token, res.data);
        navigate("/dashboard");
      } else {
        setMessage(res.message || "Sign in failed.");
      }
    } catch (error) {
      console.log("Error signing in:", error);
      setMessage("Sign in failed.");
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Sign In</h1>

      <form onSubmit={handleSubmit}>
        <div className="formGrid">
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
          Sign In
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