import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserById, updateUser } from "../services/api";

export default function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      const res = await getUserById(id);
      const item = res.data;

      setForm({
        firstname: item.firstname || "",
        lastname: item.lastname || "",
        email: item.email || "",
        password: item.password || "",
      });
    } catch (error) {
      console.log("Error loading user:", error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await updateUser(id, form);
      navigate("/users");
    } catch (error) {
      console.log("Error updating user:", error);
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Edit User</h1>

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
          Update User
        </button>
      </form>
    </section>
  );
}