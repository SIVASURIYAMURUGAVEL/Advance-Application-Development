import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../assets/css/User_Registration.css';

const User_Registration = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegistration = (e) => {
    e.preventDefault();

    
    if (!fullName || !email || !password || !confirmPassword || !mobileNumber) {
      setError('Please fill in all the required fields.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and Confirm Password should match.');
      return;
    }

    if (!validateMobileNumber(mobileNumber)) {
      setError('Please enter a valid mobile number.');
      return;
    }

    navigate('/User_Login');
  };

  
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateMobileNumber = (mobileNumber) => {
    const re = /^[0-9]{10}$/;
    return re.test(mobileNumber);
  };

  return (
    <div className="user-registration-container">
      <div className="user-registration-content">
        <div className="left-section">
          {}
          <img
            src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4947.jpg?size=626&ext=jpg&ga=GA1.1.617973568.1689319237&semt=ais"
            alt="User Registration Image"
          />
        </div>
        <div className="right-section">
          <h1 style={{ fontSize: '35px' }}>User Registration</h1>
          <form onSubmit={handleRegistration}>
            <label style={{ color: 'black' }} htmlFor="fullName">
              Full Name:
              <br />
              <input
                style={{ width: '250px' }}
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </label>

            <label style={{ color: 'black' }} htmlFor="email">
              Email:
              <br />
              <input
                style={{ width: '250px' }}
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label style={{ color: 'black' }} htmlFor="password">
              Password:
              <br />
              <input
                style={{ width: '250px' }}
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>

            <label style={{ color: 'black' }} htmlFor="confirmPassword">
              Confirm Password:
              <br />
              <input
                style={{ width: '250px' }}
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </label>

            <label style={{ color: 'black' }} htmlFor="mobileNumber">
              Mobile Number:
              <br />
              <input
                style={{ width: '250px' }}
                type="tel"
                id="mobileNumber"
                placeholder="Enter your mobile number"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
            </label>

            <button type="submit" style={{ backgroundColor: '#be43fb', width: '150px' }}>
              Register
            </button>
            <div>
              <p>
                Already a user? Click <Link to="/User_Login">here</Link> to login.
              </p>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default User_Registration;
