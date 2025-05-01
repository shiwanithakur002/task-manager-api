import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">📝 Task Manager</div>
      <ul className="nav-links">
        <li><NavLink to="/" end activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/tasks" activeClassName="active">View Tasks</NavLink></li>
        <li><NavLink to="/add-task" activeClassName="active">Add Task</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
