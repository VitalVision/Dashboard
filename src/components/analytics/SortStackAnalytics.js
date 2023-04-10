import { Line, Pie } from "react-chartjs-2";
import Link from "next/link";
import Chart from "chart.js/auto"; // this is important to allow the charts to work
import { useEffect, useState } from "react";

const pieChartData = {
	labels: ["Blocks Stacked", "Blocks Missed", "Blocks Dropped"],
	datasets: [
		{
			data: [300, 50, 100],
			backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
			hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
		},
	],
};

const lineChartData = {
	labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6"],
	datasets: [
		{
			label: "Time Taken",
			backgroundColor: "rgba(75,192,192,0.4)",
			borderColor: "rgba(75,192,192,1)",
			borderWidth: 1,
			hoverBackgroundColor: "rgba(75,192,192,0.4)",
			hoverBorderColor: "rgba(75,192,192,1)",
			data: [65, 59, 80, 81, 56, 55, 40],
		},
	],
};
export default function SortStackAnalytics() {
	const [stats, setStats] = useState(undefined);

	async function getStats() {
		try {
			const res = await fetch("/api/games/game1");
			const data = await res.json();
			setStats(data);
		} catch (err) {
			console.error("Error fetching stats:", err);
		}
	}

	useEffect(() => {
		getStats();
	}, []);

	if (!stats) return <p>Loading...</p>;

	const { difficulty, leftHand, rightHand } = stats;

	return (
		<div className="container mx-auto px-4">
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-2">Game Settings</h2>
				<div className="flex space-x-4">
					<div className="bg-blue-600 text-white px-4 py-2 rounded  w-full text-center">
						{difficulty}
					</div>
					{leftHand ? (
						<div className="bg-blue-600 text-white px-4 py-2 rounded  w-full text-center">
							Left hand enabled
						</div>
					) : null}
					{rightHand ? (
						<div className="bg-blue-600 text-white px-4 py-2 rounded  w-full text-center">
							Right hand enabled
						</div>
					) : null}
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="col-span-1">
					<h2 className="text-xl font-semibold mb-2">Blocks Coverage</h2>
					<Pie data={pieChartData} />
				</div>
				<div className="col-span-2">
					<h2 className="text-xl font-semibold mb-2">Game Performance</h2>
					<Line data={lineChartData} />
				</div>
			</div>
		</div>
	);
}
