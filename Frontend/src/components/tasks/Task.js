import React from "react";

const Task = ({ task }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6 max-w-2xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{task.title}</h3>
      <p className="text-gray-600 mb-4">{task.description}</p>
      <div className="flex justify-between text-gray-600">
        <p className="text-sm">
          <strong>Due Date:</strong> {task.due_date}
        </p>
        <p className="text-sm">
          <strong>Priority:</strong>{" "}
          <span
            className={`${
              task.priority === "High"
                ? "text-red-500"
                : task.priority === "Medium"
                ? "text-yellow-500"
                : "text-green-500"
            } font-semibold`}  
          >
            {task.priority}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Task;
