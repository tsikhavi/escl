import Image from "next/image";
import React from "react";

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className="border text-sm p-4 mb-4">
      <h3>{item.name}</h3>
      {item.image && (
        <Image
          src={item.image}
          alt={item.name}
          width={40}
          height={40}
          className="rounded-full w-10 h-10 flex float-right"
        />
      )}

      <p>Price: ${item.price} per hour</p>
      <button
        onClick={() => onRemoveFromCart(item)}
        className="px-4 py-2 text-white bg-gray-700 hover:bg-red-500 rounded-md">
        Remove
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 inline-flex px-1 h-5">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
