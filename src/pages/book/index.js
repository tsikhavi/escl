import BookingForm from "@/components/BookingForm";
import { useRouter } from "next/router";

const products = [
  {
    id: 1,
    name: "Regular Cleaning",
    price: 35,
    image: "/unsplash1.jpg",
    details:
      "Dusting all surfaces, vacuuming carpets and rugs, mopping floors, cleaning and sanitizing bathrooms, wiping down kitchen countertops and appliances, emptying trash bins and replacing liners, general tidying up of rooms",
  },
  {
    id: 2,
    name: "Deep Cleaning",
    price: 45,
    image: "/unsplash2.jpg",
    details:
      "Deep dusting every surface including wall art, ceiling fans, vents, baseboards, window sills, and blinds, deep cleaning carpets and rugs, deep cleaning and sanitizing bathrooms including grout cleaning and descaling showerheads and faucets, deep cleaning kitchen including countertops, sinks, and appliances, including the oven and refrigerator interiors, cleaning all windows, both inside and outside where possible, vacuuming and spot cleaning upholstered furniture and cleaning under and behind movable furniture, floor waxing for homes with hardwood or tile",
  },
  {
    id: 3,
    name: "Post Renovation Cleaning",
    price: 40,
    image: "/unsplash1.jpg",
    details:
      "Dusting and vacuuming all surfaces and upholstery, cleaning walls and ceilings, cleaning all fixtures and appliances, cleaning windows and window tracks, removing all renovation debris, mopping the floors",
  },
  {
    id: 4,
    name: "After Party Cleanup",
    price: 50,
    image: "/unsplash2.jpg",
    details:
      "Cleaning and sanitizing all party areas, washing dishes and glassware, cleaning kitchen and bathroom areas, vacuuming and mopping all floors, removing party decorations, disposing of all trash",
  },
];

export default function Booking() {
  const router = useRouter();
  const path = "/book#top";
  return (
    <>
      <section className="w-screen min-h-96 bg-fixed z-10 BackgroundImageBook bg-cover bg-center bg-no-repeat">
        <div className="w-full h-screen bg-gradient-to-tr from-white ">
          <div className="flex justify-center pt-96 overflow-hidden">
            <button
              type="button"
              onClick={() => router.push(path)}
              className="bg-black text-white p-2 rounded-full">
              Book Now
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
      {/*main booking */}
      <div className="bg-white py-4 px-10 rounded-lg shadow-md" id="top">
        <BookingForm products={products} />
      </div>
    </>
  );
}
