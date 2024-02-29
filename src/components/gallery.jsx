import { Carousel, Typography, Button } from "@material-tailwind/react";
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

function GalleryCarousel() {
  return (
    <Carousel className="rounded-xl text-gray-900">
      <div className="relative h-full w-full">
        <Image
          alt="ecommerce"
          className="h-full w-full object-cover py-4"
          width={120}
          height={120}
          src="/unsplash2.jpg"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center my-4 md:w-2/4">
            <Typography
              variant="h4"
              color="white"
              className="mb-4 text-xl md:text-4xl lg:text-5xl">
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-xs opacity-80">
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="gray">
                Explore
              </Button>
              <Button size="lg" color="gray" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          alt="ecommerce"
          className="h-full w-full object-cover py-4"
          width={120}
          height={120}
          src="/unsplash2.jpg"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="gray"
              className="mb-4 text-3xl text-gray-800 bg-gray-100 md:text-4xl lg:text-5xl">
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="mb-12 opacity-80">
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          alt="ecommerce"
          className="h-full w-full object-cover py-4"
          width={120}
          height={120}
          src="/unsplash2.jpg"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl">
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80">
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
