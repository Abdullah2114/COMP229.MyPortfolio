import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import AddProject from "./pages/AddProject";
import EditProject from "./pages/EditProject";
import AddService from "./pages/AddService";
import EditService from "./pages/EditService";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import References from "./pages/References";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/add-project" element={<AddProject />} />
          <Route path="/edit-project/:id" element={<EditProject />} />

          <Route path="/services" element={<Services />} />
          <Route path="/add-service" element={<AddService />} />
          <Route path="/edit-service/:id" element={<EditService />} />

          <Route path="/users" element={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />

          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">© Abdullah Madani | COMP229</footer>
    </BrowserRouter>
  );
}