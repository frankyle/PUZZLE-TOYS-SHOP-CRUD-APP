import React, { useState, useEffect } from "react";
import { createToy, updateToy } from "../..//services/toysServices";

const ToyForm = ({ toy, setEditingToy, fetchToys }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    rating: "",
  });
 
  useEffect(() => {
    if (toy) {
      setFormData({
        name: toy.name,
        description: toy.description,
        price: toy.price,
        stock: toy.stock,
        rating: toy.rating,
      });
    }
  }, [toy]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (toy) {
      await updateToy(toy.id, formData);
    } else {
      await createToy(formData);
    }
    setEditingToy(null);
    fetchToys();
    setFormData({
      name: "",
      description: "",
      price: "",
      stock: "",
      rating: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow-md">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Toy Name"
        className="w-full p-2 border rounded"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 border rounded"
        required
      ></textarea>
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="stock"
        value={formData.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="w-full p-2 border rounded"
        required
      />
      <input
        type="number"
        name="rating"
        value={formData.rating}
        onChange={handleChange}
        placeholder="Rating (1-5)"
        className="w-full p-2 border rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {toy ? "Update Toy" : "Add Toy"}
      </button>
    </form>
  );
};

export default ToyForm;
