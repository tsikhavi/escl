import Image from "next/image";
import Link from "next/link";

const FlipCard = ({ imgSrc, altText, title, description, bookingLink }) => {
  return (
    <div className="w-64 inline-block mr-2">
      <div className="relative w-full min-h-full bg-white shadow-md rounded-md overflow-hidden transform transition-transform duration-500 hover:rotate-y-180">
        <div className="absolute w-full h-full bg-white rotate-0">
          <Image
            className="object-cover w-full h-48"
            src={imgSrc}
            alt={altText}
            width={256}
            height={192}
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{title}</h2>
          </div>
        </div>
        <div className="absolute w-full h-full bg-white rotate-y-180">
          <div className="p-4">
            <p className="text-sm">{description}</p>
            <Link
              href={bookingLink}
              className="inline-block mt-4 px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md hover:bg-indigo-500">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
