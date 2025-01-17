import React, { useState, useEffect } from "react";
import { getAllTasks, deleteTask } from "../../services/taskService";
import TaskForm from "./TaskForm";
import FilterOptions from "./FilterOptions";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [filter, setFilter] = useState("all"); // New state for filter

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const data = await getAllTasks();
    setTasks(data);
    setFilteredTasks(data); // Initially show all tasks
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks(); // Re-fetch tasks after deletion
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  // Handle Filter Change
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === "all") {
      setFilteredTasks(tasks); // Show all tasks
    } else {
      const filtered = tasks.filter((task) => task.priority === selectedFilter);
      setFilteredTasks(filtered); // Show tasks based on selected priority
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Filter and Form */}
        <div className="lg:px-6 space-y-6">
          <FilterOptions filter={filter} handleFilterChange={handleFilterChange} />
          <TaskForm task={editingTask} setEditingTask={setEditingTask} fetchTasks={fetchTasks} />
        </div>

        {/* Right Side - Task List */}
        <div className="space-y-6 lg:px-6">
          <h2 className="text-2xl font-semibold text-gray-800">Tasks</h2>
          <ul>
            {filteredTasks.map((task) => (
              <li key={task.id}>
                <Task task={task} />
                <div className="flex space-x-4 mt-2">
                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
                  >
                    Edit   
                  </button>
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
