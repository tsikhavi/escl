import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Your Cart</h2>
        {/* Cart items */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
