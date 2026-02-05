import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    navigate("/"); // redirect to Home after submit
  }

  return (
    <section className="card">
      <h1 style={{ marginTop: 0 }}>Contact Me</h1>
      <p style={{ color: "rgba(233,238,247,0.75)" }}>
        Feel free to send me a message using the form below.
      </p>

      <form onSubmit={handleSubmit}>
        {/* First & Last name */}
        <div className="formGrid">
          <input
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone & Email */}
        <div className="formGrid" style={{ marginTop: 12 }}>
          <input
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>

        {/* Message */}
        <div style={{ marginTop: 12 }}>
          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn" style={{ marginTop: 14 }}>
          Submit
        </button>
      </form>
    </section>
  );
}
