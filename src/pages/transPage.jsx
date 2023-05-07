import React, { useState, useEffect } from 'react';
import TransFilter from '../components/transFilter';
import axios from 'axios';

const TransPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [grossIncome, setGrossIncome] = useState(0);

  const fetchTransactions = async (startDate, endDate) => {
    const url = `http://localhost:8002/trans/gross`;
    const response = await axios.get(url);
    setGrossIncome(response.data.grossData);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleFilterClick = (startDate, endDate) => {
    fetchTransactions(startDate, endDate);
  };

  return (
    <div className="filter-container">
      <div className="filter-header">
        <h1>Transaction</h1>
      </div>
      <div className="filter-body">
        <TransFilter handleFilterClick={handleFilterClick} />
        <div className="stats-container">
          <div className="stats-block">
            <h2>Gross</h2>
            <p>Total gross: Rp. {grossIncome.toLocaleString()}</p>
          </div>
          <div className="stats-block">
            <h2>Transaction</h2>
            <p>Total transaction: {transactions.length}</p>
          </div>
          <div className="stats-block">
            <h2>Top selling product</h2>
            <p>Product E</p>
          </div>
        </div>
        <div className="top-selling-products-container">
          <h2>Top 5 selling products</h2>
          <div className="top-selling-products-filter">
            <label htmlFor="products">Products:</label>
            <select id="products" name="products">
              <option value="all">All</option>
              <option value="product-a">Product A</option>
              <option value="product-b">Product B</option>
              <option value="product-c">Product C</option>
            </select>
            <button className="filter-btn">Filter</button>
          </div>
          <ol className="top-selling-products">
            <li>Product E</li>
            <li>Product B</li>
            <li>Product C</li>
            <li>Product D</li>
            <li>Product A</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TransPage;
