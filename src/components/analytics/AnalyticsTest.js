import { Line, Pie } from 'react-chartjs-2';
import Link from 'next/link';
import Chart from 'chart.js/auto'; // this is important to allow the charts to work

const pieChartData = {
  labels: ['Category 1', 'Category 2', 'Category 3'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.4)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};
export default function AnalyticsDashboard() {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Quick Access Links</h2>
        <div className="flex space-x-4">
          <Link href="/link1">
            <a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 w-full text-center">
              Link 1
            </a>
          </Link>
          <Link href="/link2">
            <a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 w-full text-center">
              Link 2
            </a>
          </Link>
          <Link href="/link3">
            <a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 w-full text-center">
              Link 3
            </a>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-2">Pie Chart</h2>
          <Pie data={pieChartData} />
        </div>
        <div className="col-span-2">
          <h2 className="text-xl font-semibold mb-2">Line Chart</h2>
          <Line data={lineChartData} />
        </div>
      </div>
    </div>
  );
}

