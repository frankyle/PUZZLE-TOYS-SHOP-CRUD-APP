import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TasksPage from "./pages/TasksPage";
import ToysPage from "./pages/ToysPage";
import PuzzlesPage from "./pages/PuzzlesPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";
import LogInPage from "./pages/LogInPage";
import Reports from "./components/Reports";
import Scheduled from "./components/Scheduled";
import ProfilePage from "./pages/ProfilePage";
import Plans from "./components/Plans";
import Orders from "./components/Orders";
import Billings from "./components/Billings";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="py-12 px-6 sm:px-16">
          <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/toys" element={<ToysPage />} />
              <Route path="/puzzles" element={<PuzzlesPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/schedules" element={<Scheduled />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/plans" element={<Plans />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/billings" element={<Billings />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LogInPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
