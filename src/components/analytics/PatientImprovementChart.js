import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const data = {
  labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12'],
  datasets: [
    {
      label: 'Patient Improvement',
      data: [45, 50, 55, 60, 58, 65, 70, 75, 80, 82, 89, 88],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
      max: 100,
    },
  },
};

const PatientImprovementChart = () => {
  return (
    <div className="w-full h-80">
      <Line data={data} options={options} />
    </div>
  );
};

export default PatientImprovementChart;
