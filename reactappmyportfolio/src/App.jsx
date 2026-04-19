import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

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
import AddReference from "./pages/AddReference";
import EditReference from "./pages/EditReference";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/projects" element={<Projects />} />
          <Route
            path="/add-project"
            element={
              <ProtectedRoute>
                <AddProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-project/:id"
            element={
              <ProtectedRoute>
                <EditProject />
              </ProtectedRoute>
            }
          />

          <Route path="/services" element={<Services />} />
          <Route
            path="/add-service"
            element={
              <ProtectedRoute>
                <AddService />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-service/:id"
            element={
              <ProtectedRoute>
                <EditService />
              </ProtectedRoute>
            }
          />

          <Route path="/users" element={<Users />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route
            path="/edit-user/:id"
            element={
              <ProtectedRoute>
                <EditUser />
              </ProtectedRoute>
            }
          />

          <Route path="/references" element={<References />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/add-reference"
            element={
              <ProtectedRoute>
                <AddReference />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-reference/:id"
            element={
              <ProtectedRoute>
                <EditReference />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>

      <footer className="footer">© Abdullah Madani | COMP229</footer>
    </BrowserRouter>
  );
}