import ServicesAccordion from "@/components/ServicesAccordion";
import Image from "next/image";
import Banner from "@/components/banner";
import Link from "next/link";
import Reviews from "@/components/Reviews";

export default function Services() {
  return (
    <>
      <Banner path="/services#topservices">
        Our Services
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
      </Banner>

      <section id="topservices" className="my-190  mx-0">
        <div className="py-60 grid sm:grid-cols-2 grid-cols-1 gap-4">
          <p
            className="text-left sm:text-center px-4 tracking-wide uppercase text-xl font-semibold
         text-gray-900 md:visible ">
            # Esthete Cleaning Services
          </p>
          <div className="bg-white h-full w-full items-center border-b border-e-2 hidden sm:visible ">
            <h1
              className="text-center px-4 tracking-wide capitalize hover:uppercase text-xl font-semibold
         text-gray-900 ">
              Esthete Cleaning Services
            </h1>
          </div>
          <div className="w-full flex-grow border-none px-0 border-gray-300 pb-4">
            <ServicesAccordion />
            <p className="text-base tracking-tight font-semibold py-12 text-balance leading-8 ">
              Remember, our cleaning services are customizable to meet your specific needs.{" "}
              <Link
                className="underline hover:underline-offset-8 bg-none hover:bg-blue-gray-200"
                href="/contact">
                Contact us today
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 inline-flex">
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>{" "}
              to schedule your next cleaning service!{" "}
              <Link className="underline hover:underline-offset-8" href="/services#extraServices">
                Check our extra services below.
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4 inline-flex">
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </div>
        <hr className="border-1 border-gray-500 w-full mx-20 my-20" />
        <div className="my-8">
          <p
            className="text-left sm:text-center px-4 py-4 tracking-wide uppercase text-lg font-semibold
         text-gray-900 md:visible ">
            # Service Extras
          </p>
          <h2
            className="text-center px-4 tracking-wide uppercase text-lg font-semibold
        text-gray-900 hidden sm:visible">
            # Service Extras
          </h2>
          <div className="grid grid-cols-3 gap-8 mx-20 w-full  justify-stretch" id="extraServices">
            <Carousel
              imgSrc="/unsplash2.jpg"
              altText="Dish Washing"
              title="Dish Washing"
              description="Say goodbye to the pile of dishes in your sink."
              bookingLink="/book"
              extra=" Our professional cleaners are equipped to handle all your dish washing needs, leaving your kitchen spotless and your dishes sparkling clean. Enjoy a clutter-free kitchen without lifting a finger.
              "
              rateExtra="20"
            />
            <Carousel
              imgSrc="/unsplash2.jpg"
              altText="Onsite Ironing"
              title="Onsite Ironing"
              description="Onsite ironing service"
              bookingLink="/book"
              extra="Don't let wrinkles ruin your day. Our onsite ironing service ensures your clothes are crisp, clean, and ready to wear. Our team is trained to handle a variety of fabrics, ensuring your clothes are treated with the utmost care."
              rateExtra="30"
            />
            <Carousel
              imgSrc="/unsplash2.jpg"
              altText="Interior Window Cleaning"
              title="Interior Window Cleaning"
              description="Let the sunshine in with our interior window cleaning service."
              bookingLink="/book"
              extra="Our team uses eco-friendly cleaning solutions to remove dust, smudges, and streaks from your windows. Experience a clearer view and a brighter home with our expert window cleaning services."
              rateExtra="20"
            />
            <Carousel
              imgSrc="/unsplash2.jpg"
              altText="Microwave Cleaning"
              title="Microwave Cleaning"
              description="Say goodbye to the hassle of cleaning your Microwave and reclaim your time with our top-notch cleaning services."
              bookingLink="/book"
              extra="Microwave messes can be tough to clean. Our microwave cleaning service is designed to tackle even the most stubborn stains and splatters. We'll leave your microwave looking like new and smelling fresh."
              rateExtra="20"
            />

            <Carousel
              imgSrc="/unsplash2.jpg"
              altText="Range and Inside Oven Cleaning"
              title="Range and Inside Oven Cleaning"
              description="Restore the shine to your oven and range."
              bookingLink="/book"
              extra="Baked-on grease and grime are no match for our range and inside oven cleaning service. Our team uses safe, effective cleaning methods to restore the shine to your oven and range. Cook with confidence knowing your appliances are clean and well-maintained."
              rateExtra="20"
            />
            <Carousel
              imgSrc="/unsplash2.jpg"
              altText="Inside Refrigerator Cleaning"
              title="Inside Refrigerator Cleaning"
              description="Rremove any spills, crumbs, and stains, leaving your refrigerator clean and odor-free."
              bookingLink="/book"
              extra="Keep your food fresh and your refrigerator clean with our inside refrigerator cleaning service. We'll remove any spills, crumbs, and stains, leaving your refrigerator clean and odor-free. Trust us to handle the mess so you can enjoy a cleaner, healthier home."
              rateExtra="20"
            />
          </div>
          <hr className="border-1 border-gray-500 w-full mx-20 my-20" />
          <Reviews />
        </div>
      </section>
    </>
  );
}

const Carousel = ({ imgSrc, altText, title, description, extra, bookingLink, rateExtra }) => {
  return (
    <div className="group relative my-10 h-96 w-96 overflow-hidden rounded-lg shadow-md">
      <div className="absolute px-8 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
        <Image
          className="h-4/6 w-full object-cover"
          src={imgSrc}
          alt={altText}
          width={720}
          height={720}
        />
        <h1 className="mt-4 px-4 text-center font-serif text-xl font-semibold text-rose-500">
          {title}
        </h1>
        <p className="mt-1 px-4 text-base text-left text-gray-600">{description}</p>
      </div>

      <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
        <h1 className="mb-2 px-8 text-center font-serif text-lg font-semibold text-rose-500">
          {title}
        </h1>
        <p className="px-8 text-justified">
          {extra}
          <div className="mr-2 text-center py-2 my-2 rounded-md bg-blue-gray-100 text-gray-700 ">
            Price: ${rateExtra} /h
          </div>
          <Link
            href={bookingLink}
            className="mt-8 inline-block rounded bg-gray-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-gray-700 focus:outline-none focus:ring focus:ring-yellow-400">
            Get Started Today
          </Link>
        </p>
      </div>
    </div>
  );
};
