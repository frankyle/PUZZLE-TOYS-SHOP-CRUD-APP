import React from "react";

const FilterOptions = ({ filter, handleFilterChange }) => {
  return (
    <div className="space-y-4">
      <h4 className="text-lg font-semibold text-gray-700">Filter Tasks</h4>
      <select
        value={filter}
        onChange={handleFilterChange}
        className="w-full p-3 border border-gray-300 rounded-lg"
      >
        <option value="all">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default FilterOptions;
