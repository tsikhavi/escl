import { Typography } from "@material-tailwind/react";
import BackToTopButton from "./BacktoTopButton";
import Link from "next/link";

const LINKS = [
  {
    title: "Cleaning Services",
    items: [
      { name: "Regular", href: "/services#faqServices" },
      { name: "Deep", href: "/services#faqServices" },
      { name: "Post Renovation", href: "/services#faqServices" },
      { name: "After party", href: "/services#faqServices" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "About us", href: "/about" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Resource",
    items: [
      { name: "Gallery", href: "/gallery" },
      { name: "Social", href: "/social" },
      { name: "Reviews", href: "/#reviews" },
      { name: "Help center", href: "/help" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className=" w-full
     z-20 text-gray-100 
      bottom-0 pt-8 bg-gray-200 mt-auto">
      <div className="mx-auto w-full max-w-7xl px-8">
        <BackToTopButton />

        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <Typography variant="h5" className="mb-6 uppercase text-black">
            Esthete Cleaning
            <br />
            <p className="text-base capitalize font-medium text-balance mt-4  ">
              Life&apos;s too short! Let us take the hassle out of cleaning your
              home. You are a few{" "}
              <Link
                href="/book"
                className="underline underline-offset-4 hover:text-gray-500 ">
                clicks
              </Link>{" "}
              away from a stress-free life!
            </p>
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40">
                  {title}
                </Typography>
                {items.map(({ name, href }) => (
                  <li key={name}>
                    <Typography
                      as="a"
                      href={href}
                      color="gray"
                      className="py-1.5 font-normal text-sm transition-colors hover:text-blue-gray-900">
                      {name}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0 inline-flex px-1">
            <span>
              &copy; {currentYear} Esthete Cleaning. All Rights Reserved. App by
              <Link
                className="px-1 hover:text-indigo-500"
                href="https://sautis.com/">
                Sautis.
              </Link>
            </span>
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="/book"
              className="opacity-80 transition-opacity hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="https://wa.me/16465780645"
              className="opacity-80 transition-opacity hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="h-5 w-5"
                viewBox="0 0 448 512"
                title="click to connect">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="tel:+16465780645"
              className="opacity-80 transition-opacity hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className=" h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="mailto:esthete.cleaning@gmail.com?
            cc=nesssh17@gmail.com
            &bcc=sautisapp@gmail.com
            &subject=Cleaning Enquiries
            #body=I'd like to book an appointment"
              className="opacity-80 transition-opacity hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
