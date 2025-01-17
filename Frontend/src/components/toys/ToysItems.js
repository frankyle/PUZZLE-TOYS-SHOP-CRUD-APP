import React from "react";

const ToyItem = ({ toy, onEdit, onDelete }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h3 className="font-bold">{toy.name}</h3>
      <p>{toy.description}</p>
      <p>Price: ${toy.price}</p>
      <p>Stock: {toy.stock}</p>
      <p>Rating: {toy.rating} ⭐</p>
      <div className="mt-2 space-x-2">
        <button onClick={() => onEdit(toy)} className="bg-yellow-500 text-white px-2 py-1 rounded">
          Edit
        </button>
        <button onClick={() => onDelete(toy.id)} className="bg-red-500 text-white px-2 py-1 rounded">
          Delete
        </button>
      </div>
    </div>
  ); 
};

export default ToyItem;
