import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    navigate("/");
  }

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} required/>
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required/>
        <input name="phone" placeholder="Phone" onChange={handleChange}/>
        <input name="email" placeholder="Email" onChange={handleChange} required/>
        <textarea name="message" placeholder="Message" onChange={handleChange} required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
