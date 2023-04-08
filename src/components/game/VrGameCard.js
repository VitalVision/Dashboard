// components/VrGameCard.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

const VrGameCard = ({ game }) => {
	const { imageUrl, name, description, rehabTarget, difficulty, gameId } = game;

	return (
		<div className="w-full p-2 md:w-1/3">
			<Link href={`/admin/games/${gameId}`}>
				<a className="block">
					<div className="overflow-hidden bg-white rounded-lg shadow-md">
						<div className="relative w-full h-64">
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
							<p className="font-bold">{description}</p>
							<p className="text-gray-600">Rehab Target: {rehabTarget}</p>
						</div>
					</div>
				</a>
			</Link>
		</div>
	);
};

export default VrGameCard;
