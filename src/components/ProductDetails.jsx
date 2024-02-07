import React, { useState } from "react";

const ProductDetails = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="p-4">
      <p>
        This is a short paragraph.
        {showDetails &&
          " This is more detailed information that is initially hidden."}
      </p>
      <button
        className="mt-2 text-blue-500 hover:text-blue-700"
        onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
    </div>
  );
};

export default ProductDetails;
