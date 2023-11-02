import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import Category from '../mocks/category/Category.json';

function HighChartsContent() {
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(Category[0])[0]);
  const [selectedProduct, setSelectedProduct] = useState(Object.keys(Category[0][selectedCategory][0])[0]);
  const [selectedBrand, setSelectedBrand] = useState(Object.keys(Category[0][selectedCategory][0][selectedProduct][0])[0]);

  const handleCategoryChange = (event) => {
    const newCategory = event.target.value;
    setSelectedCategory(newCategory);
    const firstProduct = Object.keys(Category[0][newCategory][0])[0];
    setSelectedProduct(firstProduct);
    setSelectedBrand(Object.keys(Category[0][newCategory][0][firstProduct][0])[0]);
  }

  const handleProductChange = (event) => {
    const newProduct = event.target.value;
    setSelectedProduct(newProduct);
    setSelectedBrand(Object.keys(Category[0][selectedCategory][0][newProduct][0])[0]);
  }

  const handleBranchChange = (event) => {
    const newBranch = event.target.value;
    setSelectedBrand(newBranch);
  }

  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        type: 'line'
      },
      subtitle: {
        text: 'Sales by Month for: '
      },
      xAxis: {
        categories: ['January', 'February', 'March', 'April']
      },
      plotOptions: {
        line: {
          dataLabels: {
            enabled: true
          },
          enableMouseTracking: false
        }
      },
      series: [{
        name: 'Sales',
        data: Category[0][selectedCategory][0][selectedProduct][0][selectedBrand]
      }]
    });
  }, [selectedCategory, selectedProduct, selectedBrand]);

  return (
    <>
      <section>
        <div className='bg-slate-200 flex w-full space-x-4'>
          <label>Category</label>
          <select value={selectedCategory} onChange={handleCategoryChange}>
            {Object.keys(Category[0]).map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          <label>Product</label>
          <select value={selectedProduct} onChange={handleProductChange}>
            {Category[0][selectedCategory][0] && Object.keys(Category[0][selectedCategory][0]).map(product => (
              <option key={product} value={product}>{product}</option>
            ))}
          </select>

          <label>Brand</label>
          <select
            value={selectedBrand}
            onChange={handleBranchChange}
            disabled={!selectedProduct}
          >
            {selectedProduct &&
              Category[0][selectedCategory][0] &&
              Category[0][selectedCategory][0][selectedProduct] &&
              Object.keys(Category[0][selectedCategory][0][selectedProduct][0]).map(brandName => (
                <option key={brandName} value={brandName}>{brandName}</option>
              ))}
          </select>
        </div>
      </section>

      <div id="container"></div>
    </>
  );
}

export default HighChartsContent;
