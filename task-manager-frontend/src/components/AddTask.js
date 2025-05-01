import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddTask.css'; // Import the CSS styling

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const navigate = useNavigate();

  const handleAddTask = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          due_date: new Date(dueDate).toISOString(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Task added:', data);
        navigate('/tasks'); // Redirect to TaskList page after adding a task
      } else {
        console.error('Failed to add task');
      }
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleCancel = () => {
    navigate('/tasks'); // Redirect to TaskList page if user cancels
  };

  return (
    <div className="add-task-container">
      <h2>Add a New Task</h2>
      <label>Title</label>
      <input
        type="text"
        placeholder="Enter task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Description</label>
      <textarea
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label>Due Date</label>
      <input
        type="datetime-local"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default AddTask;
