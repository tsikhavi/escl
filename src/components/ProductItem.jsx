import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ProductItem = ({ product, onAddToCart }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { register } = useForm();

  return (
    <div className="border rounded-md p-4 mb-4 text-sm font-[roboto] tracking-tight space-y-0 ">
      <h3>{product.name}</h3>
      {product.image && (
        <Image
          src={product.image}
          alt={product.name}
          className="rounded-full w-14 h-14 flex float-right"
          width={56}
          height={56}
        />
      )}
      <p className="py-2">Price: ${product.price} per hour</p>

      {/* Date and Time Inputs */}
      <div className="flex items-center justify-between text-xs text-gray-800 py-4">
        <div className="mt-4">
          <label className="block">Date:</label>
          <input
            type="date"
            className="block w-full mt-1 rounded-md"
            {...register("date", { required: "Date is required" })}
          />
        </div>

        <div className="mt-4">
          <label className="block">Time:</label>
          <input
            type="time"
            className="block w-full mt-1 rounded-md"
            {...register("time", { required: true })}
          />
        </div>
      </div>
      <p className="py-4 text-pretty">{showDetails && `${product.details}`}</p>
      <div className="flex items-center justify-between text-gray-800 py-4">
        <button
          className="mt-2 py-4 pr-0 text-blue-500 hover:text-blue-700"
          onClick={() => setShowDetails(!showDetails)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 px-1 inline-flex h-6">
            <path
              fillRule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
              clipRule="evenodd"
            />
          </svg>
          {showDetails ? "Hide Details" : "Show Product Details"}
        </button>

        <button
          className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-800 rounded-md mt-2 float-right"
          onClick={() => onAddToCart(product)}>
          Add to Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-flex px-1 w-5 h-5">
            <path d="M1 1.75A.75.75 0 0 1 1.75 1h1.628a1.75 1.75 0 0 1 1.734 1.51L5.18 3a65.25 65.25 0 0 1 13.36 1.412.75.75 0 0 1 .58.875 48.645 48.645 0 0 1-1.618 6.2.75.75 0 0 1-.712.513H6a2.503 2.503 0 0 0-2.292 1.5H17.25a.75.75 0 0 1 0 1.5H2.76a.75.75 0 0 1-.748-.807 4.002 4.002 0 0 1 2.716-3.486L3.626 2.716a.25.25 0 0 0-.248-.216H1.75A.75.75 0 0 1 1 1.75ZM6 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 19a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
