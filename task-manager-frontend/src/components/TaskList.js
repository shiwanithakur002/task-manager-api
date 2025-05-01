import React, { useState, useEffect } from 'react';
import './TaskList.css'; // <-- new CSS file

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/tasks/');
      const data = await response.json();
      if (Array.isArray(data)) {
        setTasks(data);
      } else {
        console.error('Expected an array of tasks');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/tasks/${id}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks(tasks.filter((task) => task.id !== id));
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="task-container">
      <h2 className="heading">📋 Task List</h2>
      {tasks.length === 0 ? (
        <p className="no-tasks">No tasks found.</p>
      ) : (
        <div className="task-list">
          {tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p><strong>Due:</strong> {new Date(task.due_date).toLocaleString()}</p>
              <button className="delete-btn" onClick={() => handleDelete(task.id)}>🗑 Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
