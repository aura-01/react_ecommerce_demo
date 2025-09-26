import React, { useState } from 'react';
import ProductList from './ProductList';


const ProductForm = () => {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });
  const [products, setProducts] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProducts([...products, product]);
    setSubmitted(true);
    setProduct({ name: '', price: '', description: '' });
    setTimeout(() => setSubmitted(false), 1500);
  };

  return (
    <div style={{ maxWidth: 900, margin: '30px auto', padding: 20, border: '1px solid #eee', borderRadius: 8, background: '#fafafa', color: 'black' }}>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            style={{ width: '100%', padding: 8, marginTop: 4, background: '#fff', color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            style={{ width: '100%', padding: 8, marginTop: 4, background: '#fff', color: 'black' }}
            required
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <label>Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            style={{ width: '100%', padding: 8, marginTop: 4, background: '#fff', color: 'black'  }}
            required
          />
        </div>
        <button type="submit" style={{ padding: 10, background: '#28a745', color: '#fff', border: 'none', borderRadius: 4 }}>Add Product</button>
      </form>
      {submitted && (
        <div style={{ marginTop: 16, color: 'green' }}>
          Product added!
        </div>
      )}

      {/* Always show the product list below the form */}
      <ProductList products={products} />
    </div>
  );
};

export default ProductForm;
