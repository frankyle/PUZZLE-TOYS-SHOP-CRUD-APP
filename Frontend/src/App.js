import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import ToysPage from "./pages/ToysPage";
import PuzzlesPage from "./pages/PuzzlesPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-16">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          {/* Header */}
          <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
            BABY STEPS LEARNING SHOP
          </h1>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center space-x-4 mb-8">
            {/* Nav Links */}
            <Link
              to="/dashboard"
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
            >
              Dashboard
            </Link>
            <Link
              to="/tasks"
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
            >
              Tasks
            </Link>
            <Link
              to="/toys"
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
            >
              Toys
            </Link>
            <Link
              to="/puzzles"
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
            >
              Puzzles
            </Link>
            <Link
              to="/reports"
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
            >
              Reports
            </Link>
            <Link
              to="/schedules"
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
            >
              Schedules
            </Link>
            <Link
              to="/profile"
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
            >
              Profile
            </Link>
            <Link
              to="/plans"
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
            >
              Plans
            </Link>
            <Link
              to="/orders"
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
            >
              Orders
            </Link>
            <Link
              to="/billings"
              className="text-lg font-medium text-indigo-600 hover:text-indigo-800"
            >
              Billings
            </Link>
           

            {/* Buttons */}
            <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700">
              <Link to="/register">Register</Link>
            </button>
            <button className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700">
              <Link to="/login">Login</Link>
            </button>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/toys" element={<ToysPage />} />
            <Route path="/puzzles" element={<PuzzlesPage />} />
            <Route path="/dashboard" element={<div>Dashboard Page</div>} />
            <Route path="/reports" element={<div>Reports Page</div>} />
            <Route path="/schedules" element={<div>Schedules Page</div>} />
            <Route path="/profile" element={<div>Profile Page</div>} />
            <Route path="/plans" element={<div>Plans Page</div>} />
            <Route path="/orders" element={<div>Orders Page</div>} />
            <Route path="/billings" element={<div>Billings Page</div>} />
            <Route path="/register" element={<div>Register Page</div>} />
            <Route path="/login" element={<div>Login Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
