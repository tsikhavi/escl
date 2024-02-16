import BookingForm from "@/components/BookingForm";

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
  return (
    <>
      {/*main booking */}
      <div className="bg-white py-4 px-10 rounded-lg shadow-md">
        <BookingForm products={products} />
      </div>
    </>
  );
}
