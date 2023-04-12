import { Line, Pie, Scatter } from "react-chartjs-2";
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

let scatterPlotData = {
	labels: ["Level 1", "Level 2", "Level 3", "Level 4", "Level 5", "Level 6"],
	datasets: [
		{
			label: "Overall Game Stats",
			data: [
				{ x: 1, y: 2 },
				{ x: 2, y: 3 },
				{ x: 3, y: 4 },
				{ x: 4, y: 5 },
				{ x: 5, y: 6 },
				{ x: 6, y: 7 },
				{ x: 7, y: 8 },
				{ x: 8, y: 9 },
				{ x: 9, y: 1 },
			],
			backgroundColor: "rgba(255, 99, 132, 0.2)",
			borderColor: "rgba(255, 99, 132, 1)",
			borderWidth: 1,
		},
	],
};

const scatterOptions = {
	scales: {
		xAxes: [
			{
				ticks: {
					min: 1,
					max: 9,
					stepSize: 1,
				},
			},
		],
	},
};

function mapData(data) {
	return data.map((item) => ({
		x: parseInt(item.level),
		y: parseInt(item.timetocompletion),
	}));
}
export default function SortStackAnalytics() {
	const [settings, setSettings] = useState(undefined);
	const [stats, setStats] = useState(scatterPlotData);

	async function getStats() {
		try {
			const res = await fetch("/api/games/game1");
			const data = await res.json();

			const res2 = await fetch("/api/games/stats");
			const data2 = await res2.json();

			setSettings(data);
			setStats(mapData(data2));
		} catch (err) {
			console.error("Error fetching stats:", err);
		}
	}

	useEffect(() => {
		getStats();
	}, []);

	if (!settings || !stats) return <p>Loading...</p>;

	console.log(stats);
	scatterPlotData.datasets[0].data = stats;

	const { difficulty, leftHand, rightHand } = settings;

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
			<Scatter data={scatterPlotData} options={scatterOptions} />
		</div>
	);
}
