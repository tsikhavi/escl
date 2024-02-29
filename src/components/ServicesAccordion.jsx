import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Image from "next/image";
import AccordionCard from "./AccordionCard";

export default function ServicesAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        className="mb-2 px-4 rounded-lg border border-blue-gray-100">
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className={`border-b-0 transition-colors text-sm ${
            open === 1 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}>
          <div className="w-full flex justify-between" id="regularCleaning">
            <div className="">Regular Cleaning</div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </AccordionHeader>

        <AccordionBody className="pt-0 text-sm font-normal">
          <AccordionCard
            imgSrc="/unsplash1.jpg"
            altText="Modern building architecture"
            title="Regular Cleaning"
            subtitle="Incredible relief for you"
            description="Regular cleaning is essential to maintaining a healthy and comfortable living environment. Our team of professional cleaners is dedicated to providing top-notch cleaning services that will leave your home sparkling clean. We cover all areas of your home, including kitchens, bathrooms, living rooms, and bedrooms. We use eco-friendly cleaning products that are safe for you and your family. Let us handle the cleaning so you can enjoy more free time!"
          />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        className="mb-2 text-sm rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className={`border-b-0 transition-colors text-sm ${
            open === 2 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}>
          <div className="w-full flex justify-between" id="deepCleaning">
            <div className="">Deep Cleaning</div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </AccordionHeader>

        <AccordionBody className="pt-0 text-sm font-normal">
          <AccordionCard
            imgSrc="/unsplash2.jpg"
            altText="Deep Cleaning"
            title="Deep Cleaning"
            subtitle="A little extra attention"
            description="Deep cleaning goes beyond regular cleaning to tackle those hard-to-reach areas that often get overlooked. 
            This service is perfect for those times when your home needs a little extra attention. Our deep cleaning service includes 
            everything in our regular cleaning service, plus cleaning behind appliances, inside cabinets and closets, 
            and more. We'll leave your home spotless and refreshed."
          />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 3}
        className="rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(3)}
          className={`border-b-0 transition-colors text-sm ${
            open === 3 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}>
          <div
            className="w-full flex justify-between"
            id="postRenovationCleaning">
            <div className="">Post Renovation Cleaning</div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal">
          <AccordionCard
            imgSrc="/unsplash1.jpg"
            altText="Post Renovation Cleaning"
            title="Post Renovation Cleaning"
            subtitle="Clean up your mess"
            description="Renovations can leave a big mess. Our post-renovation cleaning service is designed to remove all dust, debris, and leftover materials after a renovation project. We'll ensure your newly renovated space is clean, safe, and ready for you to enjoy. Our team pays attention to detail, ensuring no spot is missed."
          />
        </AccordionBody>
      </Accordion>
      <Accordion
        open={open === 4}
        className="mt-2 text-sm rounded-lg border border-blue-gray-100 px-4">
        <AccordionHeader
          onClick={() => handleOpen(4)}
          className={`border-b-0 transition-colors text-sm ${
            open === 4 ? "text-blue-500 hover:!text-blue-700" : ""
          }`}>
          <div className="w-full flex justify-between" id="afterPartyCleaning">
            <div className="">After Party Cleaning</div>
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4">
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal">
          <AccordionCard
            imgSrc="/unsplash1.jpg"
            altText="After Party Cleaning"
            title="After Party Cleanup"
            subtitle="Stress Free Sessioms"
            description="Don't let the thought of cleaning up after a party ruin your fun. Our after-party cleanup service will take care of all the in-event and post-event mess, leaving your home just as it was before the party. From clearing out trash to washing dishes and cleaning floors, we&spos;ve got you covered. Enjoy your party to the fullest, knowing that a clean home awaits you at the end."
          />
        </AccordionBody>
      </Accordion>
    </>
  );
}
