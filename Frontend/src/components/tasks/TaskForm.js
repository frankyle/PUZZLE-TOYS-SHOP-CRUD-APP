import React, { useState, useEffect } from "react";
import { createTask, updateTask } from "../../services/taskService";

const TaskForm = ({ task, setEditingTask, fetchTasks }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    due_date: "",
    priority: "Low",
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title,
        description: task.description,
        due_date: task.due_date,
        priority: task.priority,
      });
    }   
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task) {
      await updateTask(task.id, formData);
    } else {
      await createTask(formData);
    }
    setEditingTask(null);
    fetchTasks();
    setFormData({
      title: "",
      description: "",
      due_date: "",
      priority: "Low",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg space-y-6"
    >
      <h2 className="text-3xl font-semibold text-gray-800 text-center">
        {task ? "Edit Task" : "Add New Task"}
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Task Title"
          required
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Task Description"
          required
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="date"
          name="due_date"
          value={formData.due_date}
          onChange={handleChange}
          required
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          type="submit"
          className="w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          {task ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
