import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProductItem from "./ProductItem";
import CartItem from "./CartItem";
import CheckoutButton from "./Modal";

const BookingForm = ({ products }) => {
  const [cart, setCart] = useState([]);
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
    if (data && data.date && data.time) {
      console.log("Date:", data.date);
      console.log("Time:", data.time);
      // Handle form submission (e.g., send data to server)
    } else {
      console.error("Form data is incomplete.");
    }
  };

  return (
    <>
      <h1 className="text-xl text-center py-8 font-semibold uppercase">
        Booking Form
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex gap-4">
          <div className="w-1/2 border-e-2 px-4 shadow-xl rounded-md text-xs text-gray-700 text-balance">
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

            <CheckoutButton />
          </div>
        </div>
      </form>
    </>
  );
};

export default BookingForm;
