import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";

// The services and their hourly rates for different types of rooms
const services = [
  { name: "Regular Cleaning", rates: { studio: 35, "1br": 45, "2br": 55, "3br": 70 } },
  { name: "Deep Cleaning", rates: { studio: 45, "1br": 60, "2br": 75, "3br": 90 } },
  { name: "After Party Cleaning", rates: { studio: 40, "1br": 45, "2br": 50, "3br": 55 } },
  { name: "Post-Renovation Cleaning", rates: { studio: 50, "1br": 55, "2br": 60, "3br": 65 } },
];

export default function PriceCalculator() {
  // The selected service, room type and the number of hours
  const [selectedService, setSelectedService] = useState(services[0]);
  const [selectedRoom, setSelectedRoom] = useState("studio");
  const [hours, setHours] = useState(1);

  // The total cost is the product of the rate and the hours
  const totalCost = selectedService.rates[selectedRoom] * hours;

  return (
    <div className="max-w-md p-4 bg-gray-100 shadow-lg rounded-lg mb-10">
      <h1 className="text-2xl font-bold text-center mb-4">Cleaning Price Calculator</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Select a service</label>
          <RadioGroup value={selectedService} onChange={setSelectedService}>
            <RadioGroup.Label className="sr-only">Service</RadioGroup.Label>
            <div className="mt-1 grid grid-cols-2 gap-2">
              {services.map((service) => (
                <RadioGroup.Option
                  key={service.name}
                  value={service}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-2 ring-offset-2 ring-indigo-500 "
                        : checked
                          ? "ring-2 ring-offset-2 ring-indigo-600"
                          : ""
                    }
                    relative bg-white border border-gray-300 rounded-lg shadow-sm px-5 py-4 cursor-pointer flex focus:outline-none`
                  }>
                  {({ checked }) => (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <RadioGroup.Label as="span" className="font-medium text-gray-900">
                          {service.name}
                        </RadioGroup.Label>
                        <span className="text-sm text-gray-500">
                          ${service.rates[selectedRoom]}/hr
                        </span>
                      </div>
                      {checked && (
                        <div
                          className="absolute inset-0 rounded-lg border-2 border-indigo-600 pointer-events-none"
                          aria-hidden="true"
                        />
                      )}
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Select a room type</label>
          <select
            value={selectedRoom}
            onChange={(e) => setSelectedRoom(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
            <option value="studio">Studio</option>
            <option value="1br">1 Bedroom</option>
            <option value="2br">2 Bedrooms</option>
            <option value="3br">3 Bedrooms</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Enter the number of hours
          </label>
          <input
            type="number"
            min="1"
            max="10"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Estimated total cost</label>
          <div className="mt-1 p-3 bg-gray-100 rounded-md shadow-sm text-lg font-bold text-indigo-600">
            ${totalCost}
          </div>
        </div>
      </div>
    </div>
  );
}
