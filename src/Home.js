import React, { useState, useEffect } from 'react';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Налични компоненти</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', width: '300px' }}>
            <h3 style={{ margin: '0 0 10px 0' }}>{product.name}</h3>
            <span style={{ backgroundColor: product.condition === 'Нов артикул' ? '#4CAF50' : '#FF9800', color: 'white', padding: '3px 8px', borderRadius: '4px' }}>
              {product.condition}
            </span>
            <p><strong>Цена:</strong> {product.price} €</p>
            <p style={{ color: '#555' }}>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;