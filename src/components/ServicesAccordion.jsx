import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import ModalItems from "./Modal";
import Image from "next/image";

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
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal">
          <AccordionCard />
          <ModalItems />
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
          How to use Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
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
          What can I do with Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="pt-0 text-sm font-normal">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}

function AccordionCard() {
  return (
    <>
      <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              width={50}
              height={50}
              className="h-48 w-full object-cover md:h-full md:w-48"
              src="/unsplash1.jpg"
              alt="Modern building architecture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Company retreats
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              Incredible accommodation for your team
            </a>
            <p className="mt-2 text-slate-500">
              Looking to take your team away on a retreat to enjoy awesome food
              and take in some sunshine? We have a list of places to do just
              that.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
