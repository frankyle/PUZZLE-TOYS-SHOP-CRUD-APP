import React from "react";

const PuzzleList = ({ puzzles, onEdit, onDelete }) => {
  return (
    <div className="grid gap-4">
      {puzzles.map((puzzle) => (
        <div key={puzzle.id} className="bg-white p-4 shadow rounded">
          <h3 className="font-bold">{puzzle.name}</h3>
          <p>{puzzle.description}</p>
          <p>Price: ${puzzle.price}</p>
          <p>Stock: {puzzle.stock}</p>
          <p>Sold: {puzzle.sold}</p>
          <p>Age Group: {puzzle.age_group}</p>
          <p>Rating: {puzzle.rating}/5</p>
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => onEdit(puzzle)}
              className="bg-yellow-500 text-white px-4 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(puzzle.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>  
      ))}
    </div>
  );
};

export default PuzzleList;
