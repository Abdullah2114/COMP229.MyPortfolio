import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices, deleteService } from "../services/api";

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    loadServices();
  }, []);

  async function loadServices() {
    try {
      const res = await getServices();
      setServices(res.data);
    } catch (error) {
      console.log("Error loading services:", error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteService(id);
      setServices(services.filter((s) => s.id !== id));
    } catch (error) {
      console.log("Error deleting service:", error);
    }
  }

  return (
    <section className="servicesSection pageEnter">
      <h1 className="pageTitle">Services</h1>

      <div style={{ marginBottom: 20 }}>
        <Link to="/add-service" className="btn">Add Service</Link>
      </div>

      <div className="servicesGrid">
        {services.map((s) => (
          <div className="serviceCard" key={s.id}>
            <h2>{s.title}</h2>
            <p>{s.description}</p>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
              <Link to={`/edit-service/${s.id}`} className="btn">Edit</Link>
              <button className="btn" type="button" onClick={() => handleDelete(s.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}