import BookButton from "@/components/BookButton";
import PriceCalculator from "@/components/PriceCalculator";
import PriceCard from "@/components/PriceCard";

export default function Pricing() {
  return (
    <>
      <section className="">
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