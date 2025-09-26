import React from 'react';


const defaultProducts = [
  { name: 'Laptop', price: '1200', description: 'High performance laptop' },
  { name: 'Smartphone', price: '800', description: 'Latest model smartphone' },
  { name: 'Headphones', price: '150', description: 'Noise cancelling headphones' }
];

const ProductList = ({ products }) => {
  const allProducts = [...defaultProducts, ...(products || [])];
  if (!allProducts || allProducts.length === 0) {
    return null;
  }
  return (
    <div style={{ marginTop: 32 }}>
      <h4>Product List</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', color: 'black' }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>#</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Price</th>
            <th style={{ border: '1px solid #ddd', padding: 8 }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {allProducts.map((p, idx) => (
            <tr key={idx}>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{idx + 1}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{p.name}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{p.price}</td>
              <td style={{ border: '1px solid #ddd', padding: 8 }}>{p.description}</td>
            </tr>
          ))}
        </tbody>
        {products.map(product =>(
          <tr key={product._id}>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProductList;
