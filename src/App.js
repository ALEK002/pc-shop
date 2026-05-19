import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <BrowserRouter>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <nav style={{ padding: '15px', backgroundColor: '#282c34', color: 'white' }}>
          <h2 style={{ display: 'inline', marginRight: '20px' }}>PC Hardware Shop</h2>
          <Link to="/" style={{ color: '#61dafb', marginRight: '10px' }}>Обяви</Link> | 
          {!isLogged && <Link to="/login" style={{ color: '#61dafb', margin: '0 10px' }}>Вход</Link>} | 
          {!isLogged && <Link to="/register" style={{ color: '#61dafb', marginLeft: '10px' }}>Регистрация</Link>}
          {isLogged && <button onClick={() => setIsLogged(false)} style={{ marginLeft: '20px', cursor: 'pointer' }}>Изход</button>}
        </nav>

        <div style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;