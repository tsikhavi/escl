import Image from "next/image";
import React, { useState } from "react";
import ActiveLink from "../utils/navbarRouter";
import Link from "next/link";
import BookButton from "./BookButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-br from-inherit z-50 flow-root py-12 fixed w-screen px-10">
        <div className="mx-2 flex h-16  items-center  ">
          {/* Logo */}
          <Link href="/" className="block text-black">
            <span className="sr-only">Home</span>
            <Image
              src="/esthete-logo.png"
              width={150}
              height={150}
              alt="logo"
              className="rounded-full"
              priority={true}
              quality={75}
              onLoad={(e) => console.log(e.target.naturalWidth)}
            />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-8">
            {/* Navbar Main */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-xs">
                <li>
                  <ActiveLink href="/landing" className="">
                    Home
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/about" className="">
                    About
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink href="/contact" className="">
                    Contact
                  </ActiveLink>
                </li>

                <li>
                  <ActiveLink href="/services" className="">
                    Services
                  </ActiveLink>
                </li>

                <li>
                  <ActiveLink href="/pricing" className="">
                    Pricing
                  </ActiveLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <BookButton />
              </div>

              {hamburger()}
              {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg w-1/2 p-8">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                      <svg
                        className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                      </svg>
                    </button>
                    <ActiveLink href="/">
                      <a className="block mt-4 lg:inline-block lg:mt-0 text-black-500 hover:text-black-400 mr-4">
                        Home
                      </a>
                    </ActiveLink>
                    <ActiveLink href="/about">
                      <a className="block mt-4 lg:inline-block lg:mt-0 text-black-500 hover:text-black-400 mr-4">
                        About
                      </a>
                    </ActiveLink>
                    <ActiveLink href="/contact">
                      <a className="block mt-4 lg:inline-block lg:mt-0 text-black-500 hover:text-black-400">
                        Contact
                      </a>
                    </ActiveLink>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );

  function hamburger() {
    return (
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
    );
  }
}
