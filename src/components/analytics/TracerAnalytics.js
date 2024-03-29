import { Line, Pie } from "react-chartjs-2";
import Link from "next/link";
import Chart from "chart.js/auto"; // this is important to allow the charts to work

const pieChartData = {
	labels: ["Trace Correct", "Trace Failed", "Trace Missed"],
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
			data: [23, 45, 67, 89, 56, 55, 40],
		},
	],
};
export default function TracerAnalytics() {
	return (
		<div className="container mx-auto px-4">
			<div className="mb-8">
				<h2 className="text-xl font-semibold mb-2">Game Settings</h2>
				<div className="flex space-x-4">
					<div className="bg-blue-600 text-white px-4 py-2 rounded  w-full text-center">
						Easy
					</div>
					<div className="bg-blue-600 text-white px-4 py-2 rounded  w-full text-center">
						Left hand enabled
					</div>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
				<div className="col-span-1">
					<h2 className="text-xl font-semibold mb-2">Trace Coverage</h2>
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
