import React from "react";

const PuzzleFilter = ({ onFilterChange }) => {
  return (
    <div className="p-4 bg-gray-200 rounded mb-4">
      <h4 className="text-lg font-bold mb-2">Filter Puzzles</h4>
      <select
        onChange={(e) => onFilterChange(e.target.value)}
        className="p-2 border w-full"
      >
        <option value="all">All</option>
        <option value="under_5">Under 5 years</option>
        <option value="under_10">Under 10 years</option>
        <option value="under_18">Under 18 years</option>
        <option value="above_18">18 years and above</option>
      </select>
    </div>  
  );
};

export default PuzzleFilter;
