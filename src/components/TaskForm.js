import React from "react";
import Button from "react-bootstrap/Button";

function TaskForm({
  title,
  setTitle,
  description,
  setDescription,
  priority,
  setPriority,
  addTask,
}) {
  return (
    <div>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title"
        />
      </div>
      <div className="form-group mt-3">
        <label>Description</label>
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter description"
        />
      </div>
      <div className="form-group mt-3">
        <label>Priority</label>
        <select
          className="form-control"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
          <option value="Critical">Critical</option>
        </select>
      </div>
      <Button className="mt-3 "  onClick={addTask} style={{ color : "#00a303", backgroundColor: "white" , border :"0px"}}>
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#00a303"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/></svg>Add Task
      </Button>
    </div>
  );
}

export default TaskForm;
