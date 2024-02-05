import Image from "next/image";
import React, { useState } from "react";
import ActiveLink from "../utils/navbarRouter";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-transparent z-50 flow-root pt-8 fixed w-full">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="block text-black">
            <span className="sr-only">Home</span>
            <Image src="/esthete-logo.png" width={50} height={50} alt="logo" />
            <span></span>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-xs">
                <li>
                  <ActiveLink
                    href="/about"
                    className="text-gray-800 font-semibold uppercase transition text-xs hover:text-gray-700/75">
                    About
                  </ActiveLink>
                </li>
                <li>
                  <ActiveLink
                    href="/contact"
                    className="text-gray-800 font-semibold uppercase transition text-xs hover:text-gray-700/75">
                    Contact
                  </ActiveLink>
                </li>

                <li>
                  <ActiveLink
                    href="/services"
                    className="text-gray-800 font-semibold uppercase transition text-xs hover:text-gray-700/75">
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
                <ActiveLink
                  href="/"
                  className="block rounded-md bg-black px-5 py-2.5 text-xs font-medium text-white transition hover:bg-gray-700">
                  Login
                </ActiveLink>

                <ActiveLink
                  href="/book"
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-xs font-medium text-black transition hover:text-black/75 sm:block">
                  Book
                </ActiveLink>
              </div>

              <div className="block lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400">
                  {" "}
                  <svg
                    className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />{" "}
                  </svg>{" "}
                  <svg
                    className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />{" "}
                  </svg>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
