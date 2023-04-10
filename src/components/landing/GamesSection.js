import React from "react";
import styles from "./GamesSection.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";

const gamesMap = {
	game1: "Top",
	game2: "center",
	game3: "bottom",
};

const GameCard = ({ title, description, imageUrl, gameId }) => (
	<div class={styles.card}>
		<div class={styles.content}>
			<div class={styles.front}>
				<Image
					src={imageUrl}
					alt={title}
					layout="fill"
					objectFit="cover"
					objectPosition={gamesMap[gameId]}
				/>
			</div>
			<div class={styles.back}>
				<div className="flex items-center justify-center h-full">
					<p className="font-semibold text-lg text-center">{description}</p>
				</div>
			</div>
		</div>
	</div>
);

const GamesSection = () => {
	const [games, setGames] = useState([]);

	console.log(games);

	async function fetchData() {
		try {
			const response = await fetch("/data/games.json");
			const data = await response.json();
			setGames(data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<section className="relative container mx-auto px-4 py-12">
			<h2 className="text-center text-3xl md:text-4xl font-semibold mb-8">
				Our Games
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative md:h-[30vh] h-screen">
				{games.map((game, index) => (
					<div key={index} className="w-full">
						<GameCard {...game} />
					</div>
				))}
			</div>
		</section>
	);
};

export default GamesSection;
