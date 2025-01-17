import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gradient-to-r from-teal-400 to-green-600 text-white">
      <div className="max-w-full px-8 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" className="hover:text-gray-200">
            Baby Steps Learning Shop
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          <Link
            to="/dashboard"
            className="text-lg font-medium hover:text-gray-200"
          >
            Dashboard
          </Link>
          <Link
            to="/tasks"
            className="text-lg font-medium hover:text-gray-200"
          >
            Tasks
          </Link>
          <Link
            to="/toys"
            className="text-lg font-medium hover:text-gray-200"
          >
            Toys
          </Link>
          <Link
            to="/puzzles"
            className="text-lg font-medium hover:text-gray-200"
          >
            Puzzles
          </Link>
          <Link
            to="/reports"
            className="text-lg font-medium hover:text-gray-200"
          >
            Reports
          </Link>
          <Link
            to="/schedules"
            className="text-lg font-medium hover:text-gray-200"
          >
            Schedules
          </Link>
          <Link
            to="/profile"
            className="text-lg font-medium hover:text-gray-200"
          >
            Profile
          </Link>
          <Link
            to="/plans"
            className="text-lg font-medium hover:text-gray-200"
          >
            Plans
          </Link>
          <Link
            to="/orders"
            className="text-lg font-medium hover:text-gray-200"
          >
            Orders
          </Link>
          <Link
            to="/billings"
            className="text-lg font-medium hover:text-gray-200"
          >
            Billings
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Link
            to="/register"
            className="px-4 py-2 bg-white text-teal-600 font-medium rounded-md hover:bg-gray-100"
          >
            Register
          </Link>
          <Link
            to="/login"
            className="px-4 py-2 bg-white text-teal-600 font-medium rounded-md hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
