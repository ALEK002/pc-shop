import React, { useState, useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <div>
      <h2>Налични части:</h2>
      <div>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid black', marginBottom: '20px', padding: '15px', width: '350px' }}>
            <h3>{product.name}</h3>
            
            {product.image && (
              <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: '200px', objectFit: 'contain', marginBottom: '10px' }} />
            )}

            <p>Състояние: <b>{product.condition}</b></p>
            <p>Цена: <span style={{ color: 'green', fontSize: '18px', fontWeight: 'bold' }}>{product.price} лв.</span></p>
            <p>{product.description}</p>
            <button>Купи</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;