import Image from "next/image";

// pages/index.js
import React, { useState } from "react";

const images = [
  "/unsplash1.jpg",
  "/unsplash2.jpg",
  "/unsplash1.jpg",
  "/unsplash2.jpg",
  // Add more image URLs here
];

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl}
          alt={`Thumbnail ${index + 1}`}
          className="cursor-pointer"
          onClick={() => openModal(imageUrl)}
        />
      ))}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <Image
            src={selectedImage}
            alt="Large Image"
            className="max-w-[800px] max-h-[600px] object-cover"
          />
          <button
            className="fixed top-6 right-8 text-white text-5xl font-bold"
            onClick={closeModal}>
            ×
          </button>
        </div>
      )}
    </div>
  );
};

export default function Gallery() {
  return (
    <div className="mt-10 mb-5 text-center text-3xl">
      Image Modal/Lightbox Example
      <ImageGrid />
    </div>
  );
}
