import React from "react";
import TasksPage from "./pages/TasksPage";
import ToysPage from "./pages/ToysPage";
import PuzzlesPage from "./pages/PuzzlesPage";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-16">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-8">
          Task Management
        </h1>

        <PuzzlesPage />
        <ToysPage/>
        <TasksPage />


      </div>
    </div>
  );
}

export default App;
