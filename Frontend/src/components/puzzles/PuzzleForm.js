import React, { useState, useEffect } from "react";
import { createPuzzle, updatePuzzle } from "../../services/puzzlesSevices";

const PuzzleForm = ({ puzzle, setEditingPuzzle, fetchPuzzles  }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    sold: "",
    pieces: "",
    age_group: "under_5",
    rating: 1,
  });

  useEffect(() => {
    if (puzzle) {   
      setFormData({
        name: puzzle.name,
        description: puzzle.description,
        price: puzzle.price,
        stock: puzzle.stock,
        sold: puzzle.sold,
        pieces: puzzle.pieces,
        age_group: puzzle.age_group,
        rating: puzzle.rating,
      });
    }
  }, [puzzle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
    [name]: value,
   });
  };

  const handleSubmit = async (e) => {
    
    console.log("FormData being submitted:", formData);

    e.preventDefault();
    if (puzzle) {
      await updatePuzzle(puzzle.id, formData);
    } else {
      await createPuzzle(formData);
    }
    setEditingPuzzle(null);
    fetchPuzzles();
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      pieces: "",
      sold: "",
      age_group: "under_5",
      rating: 1,
    });
  };

  return (
    <form 
    onSubmit={handleSubmit} 
    className="p-4 bg-white shadow-md rounded space-y-4"
    >
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
        {puzzle ? "Edit Puzzle" : "Add New Puzzle"}
      </h2>

      <div className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Puzzle Name"
        className="border p-2 w-full"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Puzzle Description"
        className="border p-2 w-full"
        required
      ></textarea>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        name="sold"
        value={formData.sold}
        onChange={handleChange}
        placeholder="Sold"
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        name="pieces"
        value={formData.pieces}
        onChange={handleChange}
        placeholder="Pieces"
        className="border p-2 w-full"
        required
      />
      <select
        name="age_group"
        value={formData.age_group}
        onChange={handleChange}
        className="border p-2 w-full"
      >
        <option value="under_5">Under 5 years</option>
        <option value="under_10">Under 10 years</option>
        <option value="under_18">Under 18 years</option>
        <option value="above_18">18 years and above</option>
      </select>
      <input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating (1-5)"
        className="border p-2 w-full"
        required
      />
    </div>
    <div className="flex justify-between items-center mt-6">
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {puzzle ? "Update Puzzle" : "Add Puzzle"}
      </button>
      </div>
    </form>
  );
};

export default PuzzleForm;
