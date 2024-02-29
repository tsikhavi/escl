import Reviews from "@/components/Reviews";
import Image from "next/image";
import Link from "next/link";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();
  const path = "/about#aboutUs";
  return (
    <>
      <section className="w-screen min-h-96 bg-fixed z-10 BackgroundImageAbout bg-cover bg-center bg-no-repeat">
        <div className="w-full h-screen bg-gradient-to-tr from-white ">
          <div className="flex justify-center pt-96 overflow-hidden">
            <button
              type="button"
              onClick={() => router.push(path)}
              className="bg-black text-white p-2 rounded-full">
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 animate-bounce inline-flex text-white">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font text-base mx-10" id="aboutUs">
        <div className="container px-5 py-60 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="w-full mb-6  lg:mb-0">
              <p className="text-base text-center flex title-font uppercase mb-4 text-gray-900 font-semibold leading-7 ">
                About Us{" "}
              </p>

              <h1 className="mt-2 lg:w-1/2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Esthete Cleaning <br />- Your Trusted Partner for Immaculate
                Spaces
              </h1>
              <div className="h-1 w-[50%] bg-gray-500 rounded"></div>
            </div>
            <p className="w-full text-lg leading-relaxed text-balance">
              At Esthete Cleaning, we&apos;re more than just a cleaning service
              provider &ndash; we&apos;re dedicated to transforming spaces into
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
            <article className="text-lg">
              Esthete Cleaning NYC was founded on the principle that a clean
              environment contributes to a healthier and happier lifestyle. What
              sets us apart is our unwavering dedication to excellence,
              attention to detail, and our passion for delivering superior
              cleaning solutions.
              <aside>
                <Image
                  className="float-right"
                  src="/unsplash1.jpg"
                  width={56}
                  height={56}
                  alt="logo"
                  id=""
                />
              </aside>
            </article>
            <h3 className="my-8 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Hire Us
            </h3>
            <div>
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
                    We adhere to the highest standards of cleanliness, leaving
                    no stone unturned in ensuring your space is spotless.
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
            </div>
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
    </>
  );
}
