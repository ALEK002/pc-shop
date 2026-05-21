import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLogged }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/users?username=${username}&password=${password}`)
      .then(res => res.json())
      .then(users => {
        if (users.length > 0) {
          alert('Успешен вход!');
          setIsLogged(true);
          navigate('/');
        } else {
          alert('Грешно име или парола!');
        }
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Вход в магазина</h2>
      <input type="text" placeholder="Потребител" value={username} onChange={(e) => setUsername(e.target.value)} required /><br/><br/>
      <input type="password" placeholder="Парола" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/><br/>
      <button type="submit">Влез</button>
    </form>
  );
}

export default Login;