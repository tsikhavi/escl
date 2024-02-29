// Import React, Nextjs Link, and TailwindCSS
import React, { useState, useEffect } from "react";

// Define the function that reveals the other half of the list
const revealList = (list, setList) => {
  // Get the length of the list
  const length = list.length;
  // Get the index of the last visible item
  const lastVisible = list.findIndex((item) => !item.visible);
  // If there are still hidden items, reveal the next half of them
  if (lastVisible > -1) {
    // Calculate the number of items to reveal
    const revealCount = Math.ceil((length - lastVisible) / 2);
    // Create a copy of the list
    const newList = [...list];
    // Loop through the items and update their visibility
    for (let i = lastVisible; i < lastVisible + revealCount; i++) {
      newList[i].visible = true;
    }
    // Set the new list as the state
    setList(newList);
  }
};

// Define the component that renders the list and the link
const ListComponent = () => {
  // Define the initial list data
  const initialList = [
    {
      text: "High-quality and professional cleaning services",
      visible: true,
    },
    {
      text: "Friendly and trustworthy cleaners who are background-checked and insured",
      visible: true,
    },
    {
      text: "100% satisfaction guarantee and hassle-free booking process",
      visible: false,
    },
    {
      text: "Free estimates and competitive prices",
      visible: false,
    },
    {
      text: "Customized cleaning plans and schedules",
      visible: false,
    },
    {
      text: "High-quality and professional cleaning services",
      visible: false,
    },
    {
      text: "Friendly and trustworthy cleaners who are background-checked and insured",
      visible: false,
    },
    {
      text: "Exceptional Service: Our team is comprised of meticulous professionals dedicated to exceeding your expectations.",
      visible: false,
    },
    {
      text: "Customized Cleaning Plans: Tailored to your specific needs, ensuring every corner of your home shines.",
      visible: false,
    },
    {
      text: "Eco-Friendly Practices: We care for your home and the environment, using eco-conscious products and methods.",
      visible: false,
    },
    {
      text: "Reliability: Count on us to be punctual and reliable, respecting your schedule and privacy",
      visible: false,
    },
  ];

  // Define the state for the list
  const [list, setList] = useState(initialList);

  // Define the effect that runs when the list changes
  useEffect(() => {
    // Check if all the items are visible
    const allVisible = list.every((item) => item.visible);
    // If so, remove the link from the DOM
    if (allVisible) {
      const link = document.getElementById("reveal-link");
      if (link) {
        link.remove();
      }
    }
  }, [list]);

  return (
    <>
      <ul className="list-disc list-inside text-xl py-4 leading-2 tracking-normal prose prose-slate text-left nowrap">
        {list.map(
          (item, index) =>
            // Render only the visible items
            item.visible && (
              <li key={index} className="text-lg text-gray-900 nowrap ">
                {item.text}
              </li>
            )
        )}
      </ul>
      <div className="flex justify-center mt-4">
        <button
          id="reveal-link"
          className="bg-gray-800 px-4 py-2 text-white rounded hover:bg-gray-600"
          title="Reveal more services"
          // Call the function on click and pass the list and the setter
          onClick={() => revealList(list, setList)}>
          Show more
        </button>
      </div>
    </>
  );
};

// Export the component
export default ListComponent;
