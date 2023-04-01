import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Disclosure, Transition } from '@headlessui/react';
import Chart from 'chart.js/auto';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '# of Patients',
      data: [12, 19, 3, 5, 2, 3, 7],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const AnalyticsComponent = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-1 gap-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-white rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <span>Bar Chart - Patients per Month</span>
                  <span>{open ? '▼' : '▶'}</span>
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2">
                    <div className="w-full h-64">
                      <Bar data={data} options={options} />
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-white rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <span>Line Chart - Patients per Month</span>
                  <span>{open ? '▼' : '▶'}</span>
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2">
                    <div className="w-full h-64">
                      <Line data={data} options={options} />
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>

          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-black bg-white rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                  <span>Pie Chart - Patients per Month</span>
                  <span>{open ? '▼' : '▶'}</span>
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Disclosure.Panel className="px-4 pt-4 pb-2">
                    <div className="w-full h-64">
                      <Pie data={data} options={options} />
                    </div>
                  </Disclosure.Panel>
                </Transition>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsComponent;
