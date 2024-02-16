import BookButton from "./BookButton";

export default function PriceCard({ title, price, services }) {
  return (
    <div className="w-80 h-fit flex flex-col justify-between bg-white rounded-lg border border-gray-400 mb-6 py-5 px-4">
      <div>
        <h4 className="text-gray-800 font-bold mb-3">{title}</h4>
        <ul className="text-gray-800 text-sm tracking-wide text-balance list-decimal list-inside ">
          {services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <div>
        <div className="flex items-center justify-between text-gray-800 py-4">
          <p className="text-sm bg-indigo-100 px-4 py-2 rounded-lg hover:bg-indigo-200 ">
            starting at {price} /hr
          </p>
          <div className=" text-white flex items-center justify-center">
            <BookButton />
          </div>
        </div>
      </div>
    </div>
  );
}
