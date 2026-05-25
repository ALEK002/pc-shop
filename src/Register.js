import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    }).then(() => {
      alert('Успешна регистрация! Сега можете да влезете.');
      navigate('/login');
    });
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>Създай акаунт</h2>
      <input type="text" placeholder="Изберете потребителско име" value={username} onChange={(e) => setUsername(e.target.value)} required /><br/><br/>
      <input type="password" placeholder="Изберете парола" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
      <button type="submit">Регистрирай ме</button>
    </form> 
  );
}

export default Register;