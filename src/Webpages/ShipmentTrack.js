import React from 'react';
import { ImArrowRight } from "react-icons/im";

const TimelineItem = ({ date, time, status, location }) => (
  <div className="flex items-center gap-16 m-4">
    <div className="w-2 h-2 bg-blue-500 rounded-full ml-10"></div>
    <div className="text-sm text-gray-800">{date}</div>
    <div className="mx-3 text-sm text-gray-800">{time}</div>
    <div className="text-sm text-gray-800">{status} at {location}</div>
  </div>
);

const TrackingInfo = ({ label, value }) => (
  <div className="flex justify-center items-center my-2 mb-1">
    <div className="text-md text-gray-800">{label}</div>
    <div className="text-md text-gray-900 ml-1">{value}</div>
  </div>
);

const ShipmentTracker = () => {
  const progress = 6;
  const timelineData = [
    { date: '05/10/2024', time: '08:00 AM', status: 'Arrived', location: 'PT COQUITL, BC' },
    { date: '05/12/2024', time: '07:00 AM', status: 'Departed', location: 'OSHAWA, ON' },
    { date: '05/14/2024', time: '09:00 AM', status: 'Arrived', location: 'OSHAWA, ON' },
    { date: '05/17/2024', time: '05:38 AM', status: 'Departed', location: 'COLUMBUS, OH' },
    { date: '05/20/2024', time: '05:38 AM', status: 'Arrived', location: 'COLUMBUS, OH' },
    { date: '05/22/2024', time: '07:32 AM', status: 'Departed', location: 'BRIGHTON, CO' },
    { date: '05/24/2024', time: '08:22 AM', status: 'Arrived', location: 'BRIGHTON, CO' },
    { date: '05/26/2024', time: '07:5 AM', status: 'Departed', location: 'ANAHEIM, CA' },
    { date: '05/29/2024', time: '08:12 AM', status: 'Arrived', location: 'ANAHEIM, CA' },
    // ... other timeline items
  ];
  const cities = [
    "SAN FRANCISCO, CA",
    "ANAHEIM, CA",
    "BRIGHTON, CO",
    "COLUMBUS, OH",
    "OSHAWA, ON",
    "PT COQUITL, BC",
    "BURNABY, BC",
  ];
  const num = cities.length;

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <div className="mb-4 flex justify-center">
          <div className="text-blue-500 hover:text-blue-600">Track Another Shipment</div>
      </div>
      <div className="flex justify-center items-center mb-1">
        <div className="text-sm text-gray-800">Reference Number:</div>
        <div className="text-sm ml-1">GA123456</div>
      </div>
      <TrackingInfo label="Shipment is in" value="PT COQUITL, BC" />
      <TrackingInfo label="Estimated Delivery date:" value="Friday 05/24/2024" />
      <div className="my-5">
        {/* Timeline component */}
          <div className="grid grid-cols-7 justify-evenly min-w-full mb-4">
            {cities.map((city, index) => (
            <div key={index} className="text-xs text-center text-blue-400">
              <div className="h-7">{city}</div>
              <div className="flex justify-center items-center mt-3 relative">
                <div className={`
                  absolute h-1 right-0
                  ${index === num-1 ? "w-0" : "w-1/2"}
                  ${index < progress-1 ? "bg-yellow-500" : "bg-gray-300"}
                  `}></div>
                <div className={`
                  absolute h-1 left-0
                  ${index === 0 ? "w-0" : "w-1/2"}
                  ${index < progress ? "bg-yellow-500" : "bg-gray-300"}
                `}></div>
                <div className={`
                  absolute h-4 w-4 rounded-full
                  ${index < progress ? "bg-yellow-500" : "bg-gray-300"}
                `}></div>
              </div>
            </div>
            ))}
          </div>
        <div className="flex justify-evenly text-xs mt-8 mb-2">
          <div>
            <div className="text-center font-bold m-1 w-32">From</div>
            <div>SAN FRANCISCO, CA</div>
          </div>
          <div className="flex flex-col items-center">
            <ImArrowRight size="1.5em" color="gray-00"/>
            <div className="m-1">miles</div>
          </div>
          <div>
            <div className="text-center font-bold m-1 w-32">To</div>
            <div>BURNABY, BC</div>
          </div>
        </div>
        <div className="flex justify-between text-xs text-gray-600">
        </div>
      </div>
      <div className="flex">
        <div className="flex-1"></div>
        <div className="flex-none w-5/6">
          <div className="flex text-sm">
            <div className="pr-4 p-2 border-b-4 border-blue-500">Event History</div>
            <div className="p-2 pl-4 text-gray-800 border-b-4">Shipment Facts</div>
            <div className="flex-grow text-gray-800 border-b-4"></div>
          </div>
          <div>
            {timelineData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default ShipmentTracker;