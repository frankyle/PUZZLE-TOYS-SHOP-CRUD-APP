// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 shadow-md">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <h1 className="text-xl font-bold">Task & Product Management</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:underline">Dashboard</Link>
            </li>
            <li>
              <Link to="/tasks" className="hover:underline">Tasks</Link>
            </li>
            <li>
              <Link to="/puzzles" className="hover:underline">Puzzles</Link>
            </li>
            <li>
              <Link to="/toys" className="hover:underline">Toys</Link>
            </li>
            <li>
              <Link to="/register" className="hover:underline">Register</Link>
            </li>
            <li>
              <Link to="/signin" className="hover:underline">Sign In</Link>
            </li>
            <li>
              <Link to="/profile" className="hover:underline">Profile</Link>
            </li>
            <li>
              <Link to="/billings" className="hover:underline">Billings</Link>
            </li>
            <li>
              <Link to="/orders" className="hover:underline">Orders</Link>
            </li>
            <li>
              <Link to="/scheduled" className="hover:underline">Scheduled</Link>
            </li>
            <li>
              <Link to="/stocks" className="hover:underline">Stocks</Link>
            </li>
            <li>
              <Link to="/reports" className="hover:underline">Reports</Link>
            </li>
            <li>
              <Link to="/plans" className="hover:underline">Plans</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
