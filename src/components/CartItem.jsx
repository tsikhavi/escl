import React from "react";

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className="border p-4 mb-4">
      <h3>{item.name}</h3>
      <p>Price: ${item.price} per hour</p>
      <button onClick={() => onRemoveFromCart(item)}>Remove</button>
    </div>
  );
};

export default CartItem;
