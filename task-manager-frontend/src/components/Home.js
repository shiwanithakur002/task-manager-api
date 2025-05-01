import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Task Manager</h1>
      <p>Your tasks, organized and managed effortlessly.</p>

      <div className="home-content">
        <button onClick={() => window.location.href = '/tasks'}>Start Managing Tasks</button>
      </div>
    </div>
  );
};

export default Home;
