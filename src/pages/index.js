import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import Banner from "@/components/banner";

export default function Home() {
  return (
    <>
      <Banner path="/#main-road">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 animate-bounce text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg>
      </Banner>
      <main className="flex min-h-screen  flex-col items-center justify-between mx-10 py-0 ">
        <Cta />

        <Faqs />
      </main>
    </>
  );
}
