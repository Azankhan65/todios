import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import "./styles/Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/Home.css";
import "./styles/TaskForm.css";
import "./styles/task-list.css";
import "./styles/empty-state.css";
import "./styles/Navbar.css";
import "./styles/scrollbar.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [projects, setProjects] = useState([
    { id: 1, name: "LeanIX", todos: [] },
    { id: 2, name: "Todos", todos: [] },
  ]);

  const addProject = (name) => {
    setProjects([...projects, { id: projects.length + 1, name, todos: [] }]);
  };

  return (
    <div className="app">
      <Navbar
        setSearchQuery={setSearchQuery}
        setPriorityFilter={setPriorityFilter}
      />
      <Sidebar projects={projects} addProject={addProject} />

      <div className="main-content">
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <Home
                searchQuery={searchQuery}
                priorityFilter={priorityFilter}
              />
            }
          />

          {/* Project page route */}
          <Route
            path="/project/:id"
            element={<Project projects={projects} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
