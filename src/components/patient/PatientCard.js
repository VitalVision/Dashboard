import React from 'react';
import Image from 'next/image';

const PatientCard = ({ patient }) => {

  const { name, picture, nextCheckupDate, progressPercentage, patientId } = patient;

  return (
    <a href={`/patient/${patientId}/dashboard`}>
      <div
        className="bg-white shadow-md p-4 w-auto h-auto rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-105"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-gray-700">{name}</h2>
          <Image
            objectFit='cover'
            objectPosition='center'
            src={picture} alt={`${name}'s profile picture`} width={40} height={40} className="rounded-full" />
        </div>
        <div className="mb-3">
          <p className="text-sm text-gray-500">Next Checkup:</p>
          <p className="text-sm text-gray-800">{nextCheckupDate}</p>
        </div>
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
            <div
              style={{ width: `${progressPercentage}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
          <p className="text-sm text-gray-500">Progress: {progressPercentage}%</p>
        </div>
      </div>
    </a>
  );
};

export default PatientCard;
