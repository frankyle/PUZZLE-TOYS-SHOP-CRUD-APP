import axios from "axios";

const BASE_URL = "http://localhost:8000/api/puzzles/";

export const getAllPuzzles = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createPuzzle = async (puzzleData) => {
  try {
    const response = await axios.post(BASE_URL, puzzleData);
    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data);
    throw error;
  }
  
};

export const updatePuzzle = async (puzzleId, puzzleData) => {
  const response = await axios.put(`${BASE_URL}${puzzleId}/`, puzzleData);
  return response.data;
};

export const deletePuzzle = async (puzzleId) => {
  const response = await axios.delete(`${BASE_URL}${puzzleId}/`);
  return response.data;
};   

