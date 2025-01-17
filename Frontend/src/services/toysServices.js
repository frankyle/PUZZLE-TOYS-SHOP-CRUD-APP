import axios from "axios";

const BASE_URL = "http://localhost:8000/api/toys/";


export const getAllToys = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createToy = async (toy) => {
  try {
    const response = await axios.post(BASE_URL, toy);
    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data);
    throw error;
  }
};

export const updateToy = async (id, toy) => {
  const response = await axios.put(`${BASE_URL}${id}/`, toy);
  return response.data;
};


export const deleteToy = async (id) => {
  const response = await axios.delete(`${BASE_URL}${id}/`);
  return response.data;
};
 