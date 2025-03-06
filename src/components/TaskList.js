

import React from "react";
import "../styles/Todos.css"; 

function TaskList({ tasks, toggleCompletion, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <div className="empty-state-container">
          <span
            className="material-symbols-outlined"
            style={{ color: "#ff3b5c" }}
          >
            style
          </span>
          <p>No tasks yet. Add some tasks to get started!</p>
        </div>
      ) : (
        tasks.map((task, index) => (
          <div
            className={`task-item ${task.completed ? "completed" : ""}`}
            key={index}
          >
            <div className="task-info">
              {/* Checkbox for task completion */}
              <div className="task-checkbox">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleCompletion(index)}
                />
              </div>
              {/* Priority Badge */}

              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <div className="task-priority">
                <span
                  className={`priority-badge ${task.priority.toLowerCase()}`}>
                  {task.priority}
                </span>
              </div>
            </div>

            {/* Delete Task */}
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#EA3323"
              >
                <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
              </svg>
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;
