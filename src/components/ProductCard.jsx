import React from "react";

function ProductCard({ name, price, category }) {
  return (
    <div className="card">
      {/* <img src={image} alt={title} /> */}
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{category}</p>
    </div>
  );
}

export default ProductCard;