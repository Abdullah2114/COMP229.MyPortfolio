const API_URL = "http://localhost:3000/api";
const getAuthHeaders = () => {
  const token = localStorage.getItem("token");

  return {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

// ---------- AUTH ----------
export const signup = async (data) => {
  const res = await fetch(`${API_URL}/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const signin = async (data) => {
  const res = await fetch(`${API_URL}/users/signin`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

// ---------- PROJECTS ----------
export const getProjects = async () => {
  const res = await fetch(`${API_URL}/projects`);
  return res.json();
};

export const getProjectById = async (id) => {
  const res = await fetch(`${API_URL}/projects/${id}`);
  return res.json();
};

export const createProject = async (data) => {
  const res = await fetch(`${API_URL}/projects`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateProject = async (id, data) => {
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteProject = async (id) => {
  const res = await fetch(`${API_URL}/projects/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return res.json();
};

// ---------- SERVICES ----------
export const getServices = async () => {
  const res = await fetch(`${API_URL}/services`);
  return res.json();
};

export const getServiceById = async (id) => {
  const res = await fetch(`${API_URL}/services/${id}`);
  return res.json();
};

export const createService = async (data) => {
  const res = await fetch(`${API_URL}/services`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateService = async (id, data) => {
  const res = await fetch(`${API_URL}/services/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteService = async (id) => {
  const res = await fetch(`${API_URL}/services/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return res.json();
};

// ---------- USERS ----------
export const getUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
};

export const getUserById = async (id) => {
  const res = await fetch(`${API_URL}/users/${id}`);
  return res.json();
};

export const updateUser = async (id, data) => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteUser = async (id) => {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return res.json();
};

// ---------- REFERENCES ----------
export const getReferences = async () => {
  const res = await fetch(`${API_URL}/references`);
  return res.json();
};

export const getReferenceById = async (id) => {
  const res = await fetch(`${API_URL}/references/${id}`);
  return res.json();
};

export const createReference = async (data) => {
  const res = await fetch(`${API_URL}/references`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateReference = async (id, data) => {
  const res = await fetch(`${API_URL}/references/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteReference = async (id) => {
  const res = await fetch(`${API_URL}/references/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return res.json();
};