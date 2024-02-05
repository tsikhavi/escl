import React from "react";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="border p-4 mb-4">
      <h3>{product.name}</h3>
      <p>Price: ${product.price} per hour</p>
      <button
        className="bg-gray-700 text-white"
        onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
