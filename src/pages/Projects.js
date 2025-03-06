// import React, { useState } from "react";
// import "../styles/Project.css";

// function Project() {
//   const [newTodoName, setNewTodoName] = useState("");
//   const [newTodoDescription, setNewTodoDescription] = useState("");
//   const [priority, setPriority] = useState("Low"); // Set initial priority to "Low"
//   const [todos, setTodos] = useState([]);

//   const handleAddTodo = () => {
//     if (newTodoName && newTodoDescription) {
//       const newTodo = {
//         name: newTodoName,
//         description: newTodoDescription,
//         priority: priority,
//       };
//       setTodos([...todos, newTodo]);
//       setNewTodoName("");
//       setNewTodoDescription("");
//     }
//   };

//   const handleDeleteTodo = (index) => {
//     const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
//     setTodos(updatedTodos);
//   };

//   return (
//     <div className="project-container">
//       <h1 className="project-title">Project Todos</h1>

//       <div className="add-todo-form">
//         <input
//           type="text"
//           value={newTodoName}
//           onChange={(e) => setNewTodoName(e.target.value)}
//           placeholder="Add new todo..."
//           className="todo-input"
//         />
//         <input
//           type="text"
//           value={newTodoDescription}
//           onChange={(e) => setNewTodoDescription(e.target.value)}
//           placeholder="Add description..."
//           className="todo-input"
//         />

//         {/* Priority Selector */}
//         <select
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//           className="priority-selector"
//         >
//           <option value="Low">Low</option>
//           <option value="Medium">Medium</option>
//           <option value="High">High</option>
//         </select>

//         <button onClick={handleAddTodo} className="add-todo-btn">
//           Add Todo
//         </button>
//       </div>

//       <ul className="todo-list">
//         {todos.map((todo, index) => (
//           <li key={index} className="todo-item">
//             <div className="todo-text">
//               <strong>{todo.name}</strong>
//               <p>{todo.description}</p>
//               <span className={`priority-badge ${todo.priority.toLowerCase()}`}>
//                 {todo.priority}
//               </span>
//             </div>
//             <button
//               onClick={() => handleDeleteTodo(index)}
//               className="delete-todo-btn"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="24px"
//                 viewBox="0 -960 960 960"
//                 width="24px"
//                 fill="#EA3323"
//               >
//                 <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
//               </svg>
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Project;




import React, { useState } from "react";
import "../styles/Project.css";

function Project() {
  const [newTodoName, setNewTodoName] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [priority, setPriority] = useState("Low");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (newTodoName && newTodoDescription) {
      const newTodo = {
        name: newTodoName,
        description: newTodoDescription,
        priority: priority,
        completed: false, // Add a completed state
      };
      setTodos([...todos, newTodo]);
      setNewTodoName("");
      setNewTodoDescription("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed; // Toggle completed state
    setTodos(updatedTodos);
  };

  return (
    <div className="project-container">
      <h1 className="project-title">Project Todos</h1>

      <div className="add-todo-form">
        <input
          type="text"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          placeholder="Add new todo..."
          className="todo-input"
        />
        <input
          type="text"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          placeholder="Add description..."
          className="todo-input"
        />

        {/* Priority Selector */}
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="priority-selector"
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button onClick={handleAddTodo} className="add-todo-btn">
          Add Todo
        </button>
      </div>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            <div className="todo-text">
              {/* Checkbox for marking todo as completed */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleCompleteTodo(index)}
                className="todo-checkbox"
              />
              <strong
                className={todo.completed ? "completed" : ""}
              >
                {todo.name}
              </strong>
              <p className={todo.completed ? "completed" : ""}>{todo.description}</p>
              <span className={`priority-badge ${todo.priority.toLowerCase()}`}>
                {todo.priority}
              </span>
            </div>
            <button
              onClick={() => handleDeleteTodo(index)}
              className="delete-todo-btn"
            >
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
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Project;
