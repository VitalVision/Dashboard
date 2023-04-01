// components/VrGameCard.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const VrGameCard = ({ game }) => {
  const { imageUrl, name, rehabTarget, difficulty, gameId } = game;

  return (
    <div className="w-full md:w-1/3 p-2">
      <Link href={`/admin/games/${gameId}`}>
        <a className="block">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={imageUrl}
                alt={name}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold">{name}</h2>
              <p className="text-gray-600">Rehab Target: {rehabTarget}</p>
              <p className="text-gray-600">Difficulty: {difficulty}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default VrGameCard;
