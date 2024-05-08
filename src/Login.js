import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Create and style this accordingly

function Login({ authenticate }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === "user" && password === "pass") {
      authenticate(true);
      navigate('/dashboard');
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
