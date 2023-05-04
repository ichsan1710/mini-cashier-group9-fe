import React, { useEffect, useState } from 'react'
import axios from "axios"
import { fetchProducts } from '../product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

function Products() {
  const dispatch = useDispatch()
  const productList =  useSelector((state) => state.product.productList)

  useEffect(() => {
    dispatch(fetchProducts())
}, [])

const ITEMS_PER_PAGE = 9;

const [currentPage, setCurrentPage] = useState(1);
const [currentCategory, setCurrentCategory] = useState("all");
const [sortOrder, setSortOrder] = useState("asc");

const filteredCards = currentCategory === "all" ? productList : productList.filter(product => product.category === currentCategory);

const sortedCards = [...filteredCards].sort((a, b) => {
  if (sortOrder === "asc") {
    return a.name.localeCompare(b.name);
  } else {
    return b.name.localeCompare(a.name);
  }
});

const totalPages = Math.ceil(sortedCards.length / ITEMS_PER_PAGE);
const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, sortedCards.length);
const currentCards = sortedCards.slice(startIndex, endIndex);

const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

const handleCategoryChange = (event) => {
  setCurrentCategory(event.target.value)
  setCurrentPage(1)
};

const handleSortOrderChange = (event) => setSortOrder(event.target.value);

const categories = [...new Set(productList.map((card) => card.category))];
categories.unshift("all");

console.log({filteredCards, productList, sortedCards, currentCards, startIndex, endIndex})

return (
    <div>
      <h2>Product List</h2>
      <div>
        <label htmlFor="category-select">Filter by category:</label>
        <select id="category-select" value={currentCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="sort-select">Sort by category:</label>
        <select id="sort-select" value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      <div className="card-grid">
        {currentCards.map((card) => (
          <ProductCard key={card.id} {...card} />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="pagination">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={i + 1 === currentPage ? "active" : ""}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products