import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../product/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import Modal from '../components/Modal'

function Products() {
  const dispatch = useDispatch()
  const productList =  useSelector((state) => state.product.productList)

  useEffect(() => {
    dispatch(fetchProducts())
}, [])

const ITEMS_PER_PAGE = 9;

const [currentPage, setCurrentPage] = useState(1);
const [currentCategory, setCurrentCategory] = useState("all");
const [sortNameOrder, setSortNameOrder] = useState("asc");
// const [sortPriceOrder, setSortPriceOrder] = useState("asc");

const [dataEditModal, setDataEditModal] = useState({})

const filteredCards = currentCategory === "all" ? productList : productList.filter((product) => product.category === currentCategory);

const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredCards.length);
const currentCards = filteredCards.slice(startIndex, endIndex);

const sortedCards = [...currentCards].sort((a, b) => {
  if (sortNameOrder === "asc") {
    return (a.name).localeCompare(b.name);
  } else {
    return (b.name).localeCompare(a.name);
  }
})

// .sort((a, b) => {
//   if (sortPriceOrder === "asc") {
//     return a.price - b.price;
//   } else {
//     return b.price - a.price;
//   }
// });

// const totalPages = Math.ceil(sortedCards.length / ITEMS_PER_PAGE);
// const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
// const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, sortedCards.length);
// const currentCards = sortedCards.slice(startIndex, endIndex);

const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

const handleCategoryChange = (event) => {
  setCurrentCategory(event.target.value)
  setCurrentPage(1)
};

const handleSortOrderChange = (event) => setSortNameOrder(event.target.value);

// const handlePriceSortOrderChange = (event) => {
//   setSortPriceOrder(event.target.value);
// }

const categories = [...new Set(productList.map((card) => card.category))];
categories.unshift("all");

const [ showModal, setShowModal ] = useState(false)
const [ showCreateModal, setShowCreateModal ] = useState(false)

const handleOnClose = () => setShowModal(false)

return (
    <div>
      <h2 className="justify-center flex">Product List</h2>
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
        <label htmlFor="sort-select">Sort by name:</label>
        <select id="sort-select" value={sortNameOrder} onChange={handleSortOrderChange}>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>

      {/* <div>
        <label htmlFor="price-sort-select">Sort by price:</label>
        <select id="price-sort-select" value={sortPriceOrder} onChange={handlePriceSortOrderChange}>
          <option value="asc">Low-High</option>
          <option value="desc">High-Low</option>
        </select>
      </div> */}

      <div className="card-add-btn">
        <button onClick={() => setShowCreateModal(true)} 
        className="bg-red-400 text-black px-3 py-2 rounded hover:scale-95 transition text-xl">
          Add Product</button>
      </div>

      <div className="card-grid">
        {sortedCards.map((card) => (
         <div>
          <ProductCard key={card.id} {...card} />
          <div className='edit-btn'>
          <button 
          onClick={() => {
            setShowModal(true)
            setDataEditModal(card)
          }} 
          className="bg-green-400 text-black px-3 py-2 rounded hover:scale-95 transition text-xl">
            Edit</button>
            </div>
         </div> 
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
      <Modal onClose={handleOnClose} visible={showModal} initialData={dataEditModal} />
      <Modal visible={showCreateModal} onClose={() => setShowCreateModal(false)} initialData={{}} />
    </div>
  )
}

export default Products