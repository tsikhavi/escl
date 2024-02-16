import { useRouter } from "next/router";

export default function BookButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/book")}
      title="Book Now"
      className="px-4 bg-gray-800 rounded-md py-2 ">
      <span className="inline-flex justify-between text-white ">
        Book
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 animate-pulse">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </span>
    </button>
  );
}
