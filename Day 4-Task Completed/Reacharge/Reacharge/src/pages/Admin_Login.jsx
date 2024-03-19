import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Admin_Login.css';
import { Link } from 'react-router-dom';

const Admin_Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your authentication logic
    // For example, you can validate the admin email and password
    // Then redirect the admin to the admin dashboard
    // For demonstration purpose, let's assume the admin is always successfully logged in
    navigate('/AdminHome');
  };

  return (
    <div className="adlog-container">
      <div className="left-section">
        {/* Image or content for the left section */}
        <img src="https://img.freepik.com/free-vector/accept-tasks-concept-illustration_114360-4676.jpg?size=626&ext=jpg&ga=GA1.1.617973568.1689319237&semt=ais" alt="Left Section Image" />
      </div>
      <div className="right-section">
        {/* Registration form for the right section */}
        <h1 style={{ color: 'black' }}>Admin Login</h1>
        {error && <p className="error">{error}</p>}
        <div>
          <label style={{ color: 'black' }} htmlFor="email">Username:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label style={{ color: 'black' }} htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button style={{ backgroundColor: "#be43fb" }} onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin_Login;
