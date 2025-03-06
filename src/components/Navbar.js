import React, { useState } from "react";

function Navbar({ setSearchQuery, setPriorityFilter }) {
  const [searchInput, setSearchInput] = useState("");
  const [priority, setPriority] = useState("All");

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setSearchQuery(e.target.value); 
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    setPriorityFilter(e.target.value); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <input
          type="text"
          className="form-control"
          placeholder="Search tasks..."
          value={searchInput}
          onChange={handleSearchChange}
        />
        <select
          className="form-select"
          value={priority}
          onChange={handlePriorityChange}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="Critical">Critical</option>
          <option value="All">All</option> 
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
