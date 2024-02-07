import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";

const BookingForm = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); // Initialize with null
  const { register, handleSubmit, errors } = useForm();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item !== product));
  };

  const calculateTotalCost = () => {
    const totalCost = cart.reduce((acc, item) => acc + item.price, 0);
    return totalCost;
  };

  const onSubmit = (data) => {
    // Handle form submission (e.g., send data to server)
    //alert("success");
  };

  return (
    <>
      <h1 className="text-xl text-center py-8 font-semibold uppercase">Booking Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="w-1/2 border-e-2 px-4 shadow-xl rounded-md">
            <h3 className="text-sm uppercase font-semibold underline underline-offset-2 py-2 ">
              Available Products
            </h3>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          <div className="w-1/2 px-10">
            <h3 className="text-sm uppercase font-semibold underline underline-offset-2 py-2 ">
              Your Cart
            </h3>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveFromCart={removeFromCart}
              />
            ))}
            <p>Total Cost: ${calculateTotalCost()} per hour</p>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
              Check Out
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 px-1 inline-flex">
                <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
                <path
                  fillRule="evenodd"
                  d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
