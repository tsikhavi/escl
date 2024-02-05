import Link from "next/link";
import Image from "next/image";
import Modal from "@/components/ModalCart";
import { useState } from "react";
import BookingForm from "@/components/BookingForm";

const products = [
  { id: 1, name: "Product A", price: 10 },
  { id: 2, name: "Product B", price: 15 },
  { id: 3, name: "Product C", price: 20 },
  { id: 4, name: "Product D", price: 25 },
];

export default function Booking() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/*start booking */}

      {/*main booking */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Book Your Cleaning</h2>
        <BookingCard />
        <BookingForm products={products} />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
          onClick={() => setIsModalOpen(true)}>
          Book Now
        </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </>
  );
}

function BookingCard() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="/"
              className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                width={120}
                height={120}
                src="/unsplash2.jpg"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 uppercase text-xs tracking-widest title-font mb-1">
                Regular Cleaning
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="/"
              className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                width={120}
                height={120}
                src="/unsplash2.jpg"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Shooting Stars
              </h2>
              <p className="mt-1">.15</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="/"
              className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                width={120}
                height={120}
                src="/unsplash2.jpg"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Neptune
              </h2>
              <p className="mt-1">.00</p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <Link
              href="/"
              className="block relative h-48 rounded overflow-hidden">
              <Image
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                width={120}
                height={120}
                src="/unsplash2.jpg"
              />
            </Link>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">.40</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}