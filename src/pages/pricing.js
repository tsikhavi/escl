import BookButton from "@/components/BookButton";
import PriceCalculator from "@/components/PriceCalculator";
import PriceCard from "@/components/PriceCard";
import { useRouter } from "next/router";

export default function Pricing() {
  const router = useRouter();
  const path = "/pricing#top";
  return (
    <>
      <section className="w-screen min-h-96 bg-fixed z-10 BackgroundImagePricing bg-cover bg-center bg-no-repeat">
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

      <section className="" id="top">
        <div className="mx-auto max-w-screen-2xl px-4 py-20 sm:px-6 lg:px-8 grid grid-cols-2 gap-4">
          {/*pricing calculator */}
          <div className="mx-auto pb-10 gap-8 ">
            <PriceCalculator />
            <BookButton />
          </div>
          {/*price card details */}
          <div
            className="container mx-auto grid h-80 overflow-visible overflow-y-auto overscroll-auto
          focus:overscroll-contain gap-4 shadow-md place-items-center">
            <h1 className="text-2xl font-bold text-center my-4">Price Areas</h1>
            <PriceCard
              title="Regular Cleaning"
              price="$35"
              services={[
                "Dusting/Vacuuming ",
                "Kitchen",
                "Living/ Dining Room",
                "Trash Disposal",
                "General Tidying",
                "Other works according to the agreed list",
              ]}
            />
            <PriceCard
              title="Deep Cleaning"
              price="$45"
              services={[
                "Deep Dusting ",
                "Carpet Cleaning",
                "Bathroom Deep Clean ",
                "Kitchen Deep Clean",
                "Window Cleaning ",
                "Furniture Cleaning",
                "Other works according to the agreed list",
              ]}
            />
            <PriceCard
              title="Post Renovation Cleaning"
              price="$50"
              services={[
                "Debris Removal",
                "Sleeping and Living Areas ",
                "Bathroom ",
                "Kitchen and Eating Areas",
                "Other works according to the agreed list",
              ]}
            />
            <PriceCard
              title="After Party Cleanup"
              price="$40"
              services={[
                "Removal of dirt from furniture ",
                "Bathroom ",
                "All floors and other surfaces",
                "Garbage Disposal",
                "Other works according to the agreed list",
              ]}
            />
          </div>
        </div>

        <hr className="border-black border-2" />
      </section>
    </>
  );
}
