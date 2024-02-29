import React from "react";
import Image from "next/image";
import Link from "next/link";
import ListComponent from "./ListComponent";

export default function Cta() {
  return (
    <div className=" mx-12 bg-transparent pt-20 pb-4 " id="main-road">
      <div className="max-w-xl text-center mt-10 ltr:sm:text-left rtl:sm:text-right">
        <h1 className="text-3xl text-left font-extrabold sm:text-5xl">
          <strong className="block font-extrabold text-gray-700">
            {" "}
            Esthete Cleaning{" "}
          </strong>
          Best Cleaning Services in New York.
        </h1>

        <p className="mt-4 max-w-lg text-left text-xl relaxed">
          Life&apos;s too short to spend it cleaning! Let Esthete Cleaning whisk
          away the burden of maintaining your home. Our dedicated team ensures a
          pristine, sparkling space without you lifting a finger{" "}
        </p>
      </div>

      <div className="pt-10 md:pt-40">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center pb-12">
            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
              <div className="py-2 px-10 ">
                <h2 className="text-3xl md:leading-snug tracking-tighter font-bold">
                  Easily manage cleaning through our system
                </h2>
                <p className="text-xl py-4 md:py-8 leading-relaxed text-justify">
                  At Esthete Cleaning, we believe your time is precious. Why
                  waste it on mundane chores when you can enjoy a pristine,
                  sparkling home without lifting a finger? Our dedicated team of
                  experts is here to whisk away the burden of maintaining your
                  living space.
                </p>
                <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                  <Link
                    href="/services"
                    className="lg:text-lg font-semibold underline underline-offset-4 hover:underline hover:underline-offset-8 text-gray-700
                    hover:text-gray-600 ">
                    Check Out Services
                    <span className="pl-2 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <Image
                className="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                src="/unsplash2.jpg"
                width={200}
                height={200}
                alt="service2"
                title="service2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-32 pt-16">
        <div className="mx-auto">
          <div className="flex flex-wrap flex-row-reverse items-center">
            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
              <div className="py-2 px-10 ">
                <h2 className="text-3xl md:leading-snug tracking-tighter font-bold">
                  Easily manage cleaning through our system
                </h2>
                <p className="text-xl py-4 md:py-8 leading-relaxed text-justify ">
                  Whether you need a one-time deep cleaning, a regular
                  maintenance cleaning, post-renovation cleaning, or an
                  after-party cleanup we have you covered. We offer flexible and
                  affordable packages that suit your needs and budget. We also
                  use eco-friendly products and equipment that are safe for your
                  family and the environment.
                </p>
                <p className="text-xl py-4 leading-relaxed ">
                  With Esthete Cleaning, you can expect:
                </p>

                <ListComponent />
                <p className="text-xl py-4 leading-relaxed ">
                  Don&apos;t settle for anything less than a spotless home. Book
                  your cleaning service today and get ready to enjoy a cleaner,
                  healthier, and happier living space.
                </p>
                <div className="flex items-center cursor-pointer py-4 ">
                  <Link
                    href="/book"
                    className="lg:text-lg font-semibold underline underline-offset-4 hover:underline hover:underline-offset-8 text-gray-700
                    hover:text-gray-600 ">
                    Lets Get Started
                    <span className="pl-2 inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none">
                        <path
                          d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <Image
                className="absolute bg-fixed w-full h-full inset-0 object-cover object-center rounded-md"
                src="/unsplash1.jpg"
                width={200}
                height={200}
                alt="service1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
