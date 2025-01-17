import axios from "axios";

const BASE_URL = "http://localhost:8000/api/tasks/";

export const getAllTasks = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(BASE_URL, taskData);
  return response.data;
};

export const updateTask = async (taskId, taskData) => {
  const response = await axios.put(`${BASE_URL}${taskId}/`, taskData);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${BASE_URL}${taskId}/`);
  return response.data;
};  

