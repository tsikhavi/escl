import Reviews from "@/components/Reviews";
import Image from "next/image";
import Link from "next/link";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import MapCard from "@/components/MapCard";

export default function About() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <p className="text-base title-font uppercase mb-4 text-gray-900 font-semibold leading-7 ">
                About Us{" "}
              </p>

              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Esthete Cleaning - Your Trusted Partner for Immaculate Spaces
              </h1>
              <div className="h-1 w-[50%] bg-gray-500 rounded"></div>

            </div>
            <p className="lg:w-1/2 w-full text-lg leading-relaxed text-balance">
              At Esthete Cleaning, we&apos;re more than just a cleaning service
              provider – we&apos;re dedicated to transforming spaces into
              pristine sanctuaries. With years of expertise in the cleaning
              industry, we take pride in our commitment to delivering
              unparalleled cleanliness and customer satisfaction.
              <Link href="/contact" className="text-sm font-bold text-blue-600">
                {" "}
                Get in touch with us{" "}
              </Link>{" "}
              today to schedule an appointment or
              <Link href="/book" className="text-sm font-bold text-blue-600">
                {" "}
                request a quote.{" "}
              </Link>{" "}
            </p>
          </div>


          <div className="max-w-xl text-lg leading-7 text-gray-700 lg:max-w-lg">
            <h2 className="my-8 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <p className="text-lg">
              Esthete Cleaning NYC was founded on the principle that a clean
              environment contributes to a healthier and happier lifestyle. What
              sets us apart is our unwavering dedication to excellence,
              attention to detail, and our passion for delivering superior
              cleaning solutions.
            </p>
            <h3 className="my-8 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Hire Us
            </h3>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <CloudArrowUpIcon
                  className="mt-1 h-5 w-5 flex-none text-fuchsia-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Uncompromising Quality:
                  </strong>{" "}
                  We adhere to the highest standards of cleanliness, leaving no
                  stone unturned in ensuring your space is spotless.
                </span>
              </li>
              <li className="flex gap-x-3">
                <LockClosedIcon
                  className="mt-1 h-5 w-5 flex-none text-fuchsia-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Personalized Approach:{" "}
                  </strong>{" "}
                  We understand that every space is different. That&apos;s why
                  we customize our services to fit your specific requirements.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ServerIcon
                  className="mt-1 h-5 w-5 flex-none text-fuchsia-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Trustworthiness:{" "}
                  </strong>{" "}
                  As an independent entity, we offer unbiased recommendations,
                  ensuring you receive the best cleaning solutions without any
                  manufacturer influence.
                </span>
              </li>
            </ul>
            <p className="mt-8">
              Ready to experience the Esthete Cleaning difference?{" "}
              <Link
                href="/contact"
                className="text-sm font-bold text-fuchsia-600">
                {" "}
                Get in touch with us{" "}
              </Link>{" "}
              today to schedule a cleaning service or to learn more about how we
              can elevate your space&apos;s cleanliness.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Mission:
            </h2>
            <p className="mt-6">
              At Esthete Cleaning, our mission is simple - to exceed your
              expectations by providing top-notch cleaning services that enhance
              your living and working environments. We prioritize your
              satisfaction, aiming not just to clean but to create inviting
              spaces you&apos;ll love to spend time in.
            </p>
            <blockquote>
              Esthete Cleaning - Where Cleanliness Meets Perfection.
            </blockquote>
          </div>

          
        </div>
      </section>
     
      <Reviews />
      <MapCard />
    </>
  );
}
