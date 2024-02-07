import ServicesAccordion from "@/components/ServicesAccordion";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <section id="topservices" className="my-4 mx-0">
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          <p
            className="text-left sm:text-center px-4 tracking-wide capitalize hover:uppercase text-xl font-semibold
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
          <div className="w-full flex-grow border-none px-0 border-gray-300 pb-80">
            <ServicesAccordion />
          </div>
        </div>
        <div className="my-8">
          <p
            className="text-left sm:text-center px-4 py-4 tracking-wide capitalize hover:uppercase text-lg font-semibold
         text-gray-900 md:visible ">
            # Service Extras
          </p>
          <h2
            className="text-center px-4 tracking-wide capitalize hover:uppercase text-lg font-semibold
        text-gray-900 hidden sm:visible">
            # Service Extras
          </h2>
          <PictureCard />
        </div>
      </section>
    </>
  );
}

function PictureCard() {
  return (
    <>
      <div className="container mx-auto pt-16">
        <div className="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
            <Image
              tabindex="0"
              className="focus:outline-none w-full h-full p-2 rounded-sm"
              src="/unsplash1.jpg"
              width={120}
              height={120}
              alt="GS1"
              role="Image"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
            <Image
              tabindex="0"
              className="focus:outline-none w-full h-full p-2 rounded-sm"
              src="/unsplash1.jpg"
              width={120}
              height={120}
              alt="BlackBerry"
              role="Image"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <Image
              tabindex="0"
              className="focus:outline-none w-full h-full p-2 rounded-sm"
              src="/unsplash1.jpg"
              width={120}
              height={120}
              alt="Mini"
              role="Image"
            />
          </div>
          <div className="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <Image
              tabindex="0"
              className="focus:outline-none w-full h-full p-2 rounded-sm"
              src="/unsplash1.jpg"
              width={120}
              height={120}
              alt="Honda"
              role="Image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
