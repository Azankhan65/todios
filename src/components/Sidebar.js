import React, { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");
  const [projects, setProjects] = useState([
    { name: "LeanIX", link: "/project/leanix" },
    { name: "Todos", link: "/project/todos" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddProjectClick = () => {
    setIsAddingProject(!isAddingProject);
  };

  const handleInputChange = (e) => {
    setNewProjectName(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && newProjectName.trim()) {
      const newProject = {
        name: newProjectName,
        link: `/project/${newProjectName.toLowerCase().replace(/\s+/g, "")}`,
      };
      setProjects([...projects, newProject]);
      setNewProjectName("");
      setIsAddingProject(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the projects based on the search
  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sidebar">
      <h2 className="sidebar-title">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#fff"
        >
          <path d="M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z" />
        </svg>
        Todios
        <svg
          style={{ marginLeft: "8.5rem" }}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M160-280v-120h640v120H160Zm0-280v-120h640v120H160Z" />
        </svg>
      </h2>
      {/* Search input */}
      <input
        type="text"
        placeholder="Search projects..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="sidebar-search-input"
      />
      {/* Home link */}
      <Link to="/" className="sidebar-link">
        <svg
          className="homeIcon"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
        </svg>{" "}
        Home
      </Link>
      {/* Filtered project links */}
      <nav>
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <Link key={index} to={project.link} className="sidebar-link">
              #{project.name}
            </Link>
          ))
        ) : (
          <p>No projects found</p>
        )}
      </nav>
      {/* Add Project button */}
      <button onClick={handleAddProjectClick} className="sidebar-btn">
        {isAddingProject ? "Cancel" : "Add Project"}
      </button>
      {/* Add Project input */}
      {isAddingProject && (
        <input
          type="text"
          value={newProjectName}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder="Enter project name"
          className="sidebar-input"
        />
      )}
    </div>
  );
}

export default Sidebar;
