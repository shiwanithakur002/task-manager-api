import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList'; // Assuming TaskList is another component you have created
import Navbar from './components/Navbar'; // Assuming you have a Navbar component
import Home from './components/Home';
const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar component */}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/" element={<TaskList />} /> {/* Route to show task list */}
        <Route path="/tasks" element={<TaskList />} /> {/* Task list route */}
        <Route path="/add-task" element={<AddTask />} /> {/* Add Task route */}
      </Routes>
    </Router>
  );
};

export default App;
