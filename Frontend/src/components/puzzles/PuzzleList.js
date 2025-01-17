import React from 'react';
import { Link } from 'react-router-dom';

const PuzzleList = ({ puzzles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {puzzles.map((puzzle) => (
        <div key={puzzle.id} className="border p-4 rounded-lg shadow-lg">
          <img src={puzzle.image} alt={puzzle.name} className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold">{puzzle.name}</h3>
          <p className="text-gray-600 mb-4">{puzzle.description}</p>
          <Link
            to={`/puzzles/${puzzle.id}`}
            className="text-indigo-600 hover:text-indigo-800"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PuzzleList;
