import React from 'react';

function DataButtons() {
  return (
    <section>
      <div className='bg-slate-200 flex'>
        <label>Category</label>
        <select>
          <option>Clothing</option>
          <option>Showes</option>
        </select>

        <label>Product</label>
        <select>
          <option>Clothing</option>
          <option>Showes</option>
        </select>

        <label>Brand</label>
        <select>
          <option>Clothing</option>
          <option>Showes</option>
        </select>
      </div>
  </section>
  );
}

export default DataButtons;