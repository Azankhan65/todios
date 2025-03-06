import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import TaskList from "../components/TaskList"; 
import TaskForm from "../components/TaskForm"; 
import "../styles/Home.css"; 

function Home({ searchQuery, priorityFilter }) {
  const [show, setShow] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const addTask = () => {
    if (!title.trim() || !description.trim()) {
      alert("Please enter both title and description!");
      return;
    }

    const newTask = { title, description, priority, completed: false }; 
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);

    // Clear input fields and close sidebar
    setTitle("");
    setDescription("");
    setPriority("Medium");
    handleClose();
  };

  const deleteTask = (taskIndex) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
      setTasks(updatedTasks);
    }
  };

  const toggleCompletion = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Filter tasks based on search query and priority filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPriority =
      priorityFilter === "All" || task.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  return (
    <div className="home">
      <h2>Welcome to Todios</h2>
      <p>Select a project to view Todos.</p>

      {/* Button to open Offcanvas */}
      <Button
        style={{ color: "#10b981", backgroundColor: "white", border: "0px" }}
        onClick={handleShow}
      >
        Create Task{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#10b981"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </Button>

      {/* Offcanvas Sidebar */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add a New Todo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <TaskForm
            title={title}
            setTitle={setTitle}
            description={description}
            setDescription={setDescription}
            priority={priority}
            setPriority={setPriority}
            addTask={addTask}
          />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Task List Component */}
      <TaskList
        tasks={filteredTasks}
        toggleCompletion={toggleCompletion}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default Home;
