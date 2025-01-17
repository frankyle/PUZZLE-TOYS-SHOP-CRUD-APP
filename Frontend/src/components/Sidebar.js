// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <h2 className="text-2xl font-bold mb-6">Navigation</h2>
      <ul>
        <li>
          <Link to="/tasks" className="block py-2 hover:bg-gray-700">Tasks</Link>
        </li>
        <li>
          <Link to="/puzzles" className="block py-2 hover:bg-gray-700">Puzzles</Link>
        </li>
        <li>
          <Link to="/toys" className="block py-2 hover:bg-gray-700">Toys</Link>
        </li>
        <li>
          <Link to="/profile" className="block py-2 hover:bg-gray-700">Profile</Link>
        </li>
        <li>
          <Link to="/orders" className="block py-2 hover:bg-gray-700">Orders</Link>
        </li>
        <li>
          <Link to="/reports" className="block py-2 hover:bg-gray-700">Reports</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
