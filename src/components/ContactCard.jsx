import Link from "next/link";
import { useState } from "react";
import axios from "axios";

export default function ContactCard() {
  const [formState, setFormState] = useState({
    name: "",
    number: "",
    email: "",
    option: "",
    select: "",
  });

  const [errorState, setErrorState] = useState({
    name: "",
    number: "",
    email: "",
    option: "",
    select: "",
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errors = {};

    // Validate form inputs
    if (!formState.name) {
      errors.name = "Please enter your name.";
    }
    if (!formState.number) {
      errors.number = "Please enter your number.";
    }
    if (!formState.email) {
      errors.email = "Please enter your email.";
    }
    if (!formState.option) {
      errors.option = "Please enter your option.";
    }
    if (!formState.select) {
      errors.select = "Please select an option.";
    }

    if (Object.keys(errors).length > 0) {
      setErrorState(errors);
      return;
    }
    // Submit form
    try {
      const response = await axios.post("/api/submit", formState);
      console.log(response.data);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <div className="md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 px-8 mt-8 md:mt-0">
      <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
        Contact Form
      </h2>
      <p className="leading-relaxed mb-5 capitalize text-gray-600">
        Fill in the form to Request Service
      </p>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="userName" className="sr-only">
            Name
          </label>

          <input
            onChange={handleChange}
            type="text"
            id="userName"
            placeholder="Jane Doe"
            className="w-full rounded-lg border-gray-200 pe-10 shadow-sm sm:text-sm"
          />

          <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </span>
          {errorState.name && (
            <span className="text-red-500 text-sm">{errorState.name}</span>
          )}
        </div>
        <div className="relative mb-4">
          <label htmlFor="UserEmail" className="sr-only">
            Number
          </label>

          <input
            onChange={handleChange}
            type="tel"
            id="UserEmail"
            placeholder="+1234567890"
            className="w-full rounded-lg border-gray-200 pe-10 shadow-sm sm:text-sm"
          />

          <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </span>
          {errorState.number && (
            <span className="text-red-500 text-sm">{errorState.number}</span>
          )}
        </div>

        <div className="relative mb-4">
          <label htmlFor="UserEmail" className="sr-only">
            Email
          </label>

          <input
            onChange={handleChange}
            type="email"
            id="UserEmail"
            placeholder="jane@cleaning.com"
            className="w-full rounded-lg border-gray-200 pe-10 shadow-sm sm:text-sm"
          />

          <span className="pointer-events-none absolute inset-y-0 end-0 grid w-10 place-content-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4">
              <path
                fillRule="evenodd"
                d="M5.404 14.596A6.5 6.5 0 1116.5 10a1.25 1.25 0 01-2.5 0 4 4 0 10-.571 2.06A2.75 2.75 0 0018 10a8 8 0 10-2.343 5.657.75.75 0 00-1.06-1.06 6.5 6.5 0 01-9.193 0zM10 7.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          {errorState.email && (
            <span className="text-red-500 text-sm">{errorState.email}</span>
          )}
        </div>

        <div className="relative mb-4">
          <label htmlFor="EstheteCleaningServices" className="sr-only">
            Services
          </label>

          <select
            onChange={handleChange}
            name="EstheteCleaningServices"
            id="EstheteCleaningServices"
            className="mt-1.5  text-gray-700 sm:text-sm w-full rounded-lg border-gray-200 pe-10 shadow-sm ">
            <option value="">Please select service</option>
            <option value="RC">Regular Cleaning</option>
            <option value="DC">Deep Cleaning</option>
            <option value="PRC">Post Renovation Cleaning</option>
            <option value="APC">After Party Cleanup</option>
            <option value="OI">Other Inquiries</option>
          </select>
          {errorState.select && (
            <span className="text-red-500 text-sm">{errorState.select}</span>
          )}
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="sr-only ">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="bg-white border  caret-gray-600
                h-32 text-base outline-none text-gray-700 py-1 px-3 
                resize-none leading-6 transition-colors duration-200 ease-in-out
                w-full rounded-lg border-gray-200 pe-10 shadow-sm sm:text-sm"
            placeholder="Customize your request here..."></textarea>
        </div>
        <button
          type="submit"
          className="text-white bg-gray-700 border-0 mx-10 py-2 px-6 
            focus:outline-none hover:bg-gray-600 rounded-lg text-lg">
          Submit
        </button>

        <div className="mb-[0.125rem] min-h-[1.5rem] pl-[1.5rem] inline-flex text-xs text-gray-500 mt-3">
          <input
            onChange={handleChange}
            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-4 w-4 
       "
            type="checkbox"
            value=""
            id="checkboxChecked"
          />
          <label
            className="inline-block pl-[0.15rem] hover:cursor-pointer "
            htmlFor="checkboxChecked">
            By submitting feedback you are agreeing to our{" "}
            <span>
              <Link
                href="/terms"
                className="capitalize underline underline-offset-4 ">
                terms &amp; conditions
              </Link>
            </span>
          </label>
        </div>
      </form>
    </div>
  );
}
