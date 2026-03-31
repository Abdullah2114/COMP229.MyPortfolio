import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getReferences, deleteReference } from "../services/api";

export default function References() {
  const [references, setReferences] = useState([]);

  useEffect(() => {
    loadReferences();
  }, []);

  async function loadReferences() {
    try {
      const res = await getReferences();
      setReferences(res);
    } catch (error) {
      console.log("Error loading references:", error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteReference(id);
      setReferences(references.filter((r) => r._id !== id));
    } catch (error) {
      console.log("Error deleting reference:", error);
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>References</h1>

      <div style={{ marginBottom: 16 }}>
        <Link to="/add-reference" className="btn">Add Reference</Link>
      </div>

      {references.map((r) => (
        <div key={r._id} className="card" style={{ marginTop: 12 }}>
          <h3>{r.firstname} {r.lastname}</h3>
          <p>{r.email}</p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to={`/edit-reference/${r._id}`} className="btn">Edit</Link>
            <button className="btn" type="button" onClick={() => handleDelete(r._id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}