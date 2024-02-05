// components/BookingForm.js
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles
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
    console.log(data);
  };

  return (
    <div>
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="w-1/2">
            <h3>Available Products</h3>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                onAddToCart={addToCart}
              />
            ))}
          </div>

          <div className="w-1/2">
            <h3>Your Cart</h3>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveFromCart={removeFromCart}
              />
            ))}
            <p>Total Cost: ${calculateTotalCost()} per hour</p>
            <label htmlFor="bookingDate" className="block mt-4">
              Select Booking Date:
            </label>
            <input
              type="date"
              id="bookingDate"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border p-2 rounded-md"
            />
          </div>
          <div className="w-1/2">
            <h3>Your Cart</h3>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemoveFromCart={removeFromCart}
              />
            ))}
            <p>Total Cost: ${calculateTotalCost()} per hour</p>

            {/* Date Picker */}
            <label htmlFor="bookingDate">Select Booking Date:</label>
            <DatePicker
              id="bookingDate"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              className={`border p-2 rounded-md ${
                errors.bookingDate ? "border-red-500" : ""
              }`}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select a date"
              name="bookingDate"
              ref={register({ required: true })}
            />
            {errors.bookingDate && (
              <p className="text-red-500">Booking date is required</p>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
              Book Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
