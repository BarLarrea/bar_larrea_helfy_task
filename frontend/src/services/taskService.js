import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

export const getTasks = () => axios.get(`${API_URL}/tasks`);
export const createTask = (data) => axios.post(`${API_URL}/tasks`, data);
export const updateTask = (id, data) =>
    axios.put(`${API_URL}/tasks/${id}`, data);
export const toggleTask = (id) => axios.patch(`${API_URL}/tasks/${id}/toggle`);
export const deleteTask = (id) => axios.delete(`${API_URL}/tasks/${id}`);
