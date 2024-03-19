import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/User_Login.css';

const User_Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Verify if email and password are valid
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!password) {
      setError('Please enter your password.');
      return;
    }

    // Here you can add your authentication logic
    // For demonstration purpose, let's assume the user is always successfully logged in
    navigate('/Home');
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="user-login-container">
      <div className="left-section">
        <img src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?size=626&ext=jpg&ga=GA1.1.617973568.1689319237&semt=ais" alt="User Login Image" />
      </div>
      <div className="right-section">
        <h1>User Login</h1>
        {error && <p className="error-message">{error}</p>}
        <div>
          <label style={{color:'black'}} htmlFor="email">Username:</label>
          <input style={{width:'250px'}}
            type="text"
            id="email"
            placeholder='Enter your email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label style={{color:'black'}} htmlFor="password">Password:</label>
          <input style={{width:'250px'}}
            type="password"
            id="password"
            placeholder='Enter password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button style={{ backgroundColor: "#be43fb" }} onClick={handleLogin}>
            Login
          </button>
        </div>
        <div>
          <p>
            New user? Click <Link to="/User_Registration">here</Link> to register.
          </p>
        </div>
      </div>
    </div>
  );
};

export default User_Login;
