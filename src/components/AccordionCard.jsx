import Image from "next/image";
import Link from "next/link";
import BookButton from "./BookButton";

const AccordionCard = ({ imgSrc, altText, title, subtitle, description }) => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              width={50}
              height={50}
              className="rounded-md p-2 object-cover w-full h-[1/2]"
              src={imgSrc}
              alt={altText}
            />
          </div>
          <div className="p-8">
            <h2 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {title}
            </h2>
            <Link
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {subtitle}
            </Link>
            <p className="mt-2 text-slate-500">{description}</p>
          </div>
        </div>
        <BookButton />
      </div>
    </>
  );
};

export default AccordionCard;
