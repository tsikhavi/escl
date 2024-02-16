import Link from "next/link";
import Reviews from "@/components/Reviews";
import ContactCard from "@/components/ContactCard";
import MapContact from "@/components/MapContact";
import Banner from "@/components/banner";

export default function Contact() {
  return (
    <>
    <Banner path="/contact#contactUs">
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
    
    <section className="text-gray-600 font-[Lato] relative px-8" id="contactUs" >
      <h1 className="font-bold text-gray-900 tracking-wide text-center uppercase py-8 text-3xl">
        Contact Us Today
      </h1>
      <p className="px-4 w-full text-base leading-relaxed text-justify tracking-tight ">
        Are you looking for superior cleaning services that suit your specific needs and budget?
        Look no further than Esthete Cleaning, the leading provider of quality and affordable
        cleaning solutions in New York and environs. <br />
        We offer a wide range of cleaning services for residential, commercial, and specialized
        settings. Whether you need a one-time deep cleaning, a regular maintenance cleaning, or a
        customized cleaning plan, our experienced and trained team is ready to serve you. We value
        your time and convenience, so we make it easy for you to reach us and book our services. You
        can contact us in any of the following ways:
      </p>
      <ul className="list-decimal list-inside px-8 py-2 space-y-1">
        <li>
          <strong>Whatsapp: </strong> For a quick chat or appointment, you can contact us on
          Whatsapp by clicking{" "}
          <Link
            href="https://wa.me/16465780645"
            className="opacity-80 transition-opacity hover:opacity-100 text-base font-bold text-green-600 underline underline-offset-2">
            here
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 inline-flex">
              <path
                fillRule="evenodd"
                d="M15.75 2.25H21a.75.75 0 0 1 .75.75v5.25a.75.75 0 0 1-1.5 0V4.81L8.03 17.03a.75.75 0 0 1-1.06-1.06L19.19 3.75h-3.44a.75.75 0 0 1 0-1.5Zm-10.5 4.5a1.5 1.5 0 0 0-1.5 1.5v10.5a1.5 1.5 0 0 0 1.5 1.5h10.5a1.5 1.5 0 0 0 1.5-1.5V10.5a.75.75 0 0 1 1.5 0v8.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V8.25a3 3 0 0 1 3-3h8.25a.75.75 0 0 1 0 1.5H5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </li>
        <li>
          <strong>Website: </strong> You can also book our services directly from our website by
          clicking{" "}
          <Link
            href="/book"
            className="opacity-80 transition-opacity hover:opacity-100 text-base font-bold text-green-600 underline underline-offset-2">
            here #
          </Link>
        </li>
        <li>
          <strong>Email: </strong> If you prefer to email us, you can do so by filling out the
          contact form below. We&apos;ll respond to your email as soon as possible, usually within
          24 hours.
        </li>
      </ul>
      <br />
      <p className="px-4 w-full text-base leading-relaxed text-justify tracking-tight">
        No matter how you choose to contact us, you can expect the same level of professionalism,
        courtesy, and efficiency from Esthete Cleaning. We are committed to delivering the best
        cleaning services that exceed your expectations and satisfaction. Don&apos;t wait any
        longer. Contact us today and let us take care of your cleaning needs. Experience the
        difference that Esthete Cleaning makes. We look forward to hearing from you!
      </p>

      <div dir="ltr" className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <MapContact />
        <ContactCard />
      </div>
      <Reviews />
    </section>
    </>
  );
}
