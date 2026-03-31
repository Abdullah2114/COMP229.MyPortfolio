import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "../services/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      const res = await getUsers();
      setUsers(res.data);
    } catch (error) {
      console.log("Error loading users:", error);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch (error) {
      console.log("Error deleting user:", error);
    }
  }

  return (
    <section className="card pageEnter">
      <h1 style={{ marginTop: 0 }}>Users</h1>

      <div style={{ marginBottom: 16 }}>
        <Link to="/add-user" className="btn">Add User</Link>
      </div>

      {users.map((u) => (
        <div key={u.id} className="card" style={{ marginTop: 12 }}>
          <h3>{u.firstname} {u.lastname}</h3>
          <p>{u.email}</p>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link to={`/edit-user/${u.id}`} className="btn">Edit</Link>
            <button className="btn" type="button" onClick={() => handleDelete(u.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}