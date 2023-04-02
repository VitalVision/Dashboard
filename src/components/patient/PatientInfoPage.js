import { useState, useEffect } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";

const PatientInfoPage = ({ patientData }) => {
  const {
    name,
    picture,
    nextCheckupDate,
    overallProgressPercentage,
    patientId,
    gamesPlayed,
    strokeType,
    rehabDuration,
  } = patientData;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg p-4 shadow">
        <div className="flex items-center">
          <div className="relative w-20 h-20">
            <Image
              src={picture}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
              alt={`${name}'s profile`}
            />
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-500">ID: {patientId}</p>
            <p className="text-gray-500">Next Checkup: {nextCheckupDate}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
          <div
            style={{ width: `${overallProgressPercentage}%` }}
            className="shadow-none flex flex-col text-center whitespace-nowrap rounded text-white justify-center bg-blue-500"
          >
            {overallProgressPercentage}% Complete
          </div>
          <p className="text-right text-gray-500 sr-only">
            {overallProgressPercentage}%
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Stroke Type</h3>
          <p>{strokeType}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">
            Rehabilitation Duration
          </h3>
          <p>{rehabDuration}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Games Played</h3>
          {gamesPlayed.map((game, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left rounded-lg bg-white hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                    <span>{game.name}</span>
                    <span>{open ? "-" : "+"}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    {/* Render the chart for the game progress here */}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientInfoPage;
