import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler
);

const RetailerDashboard = () => {
  // Sample data for charts
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales 2023',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const pieData = {
    labels: ['Electronics', 'Clothing', 'Food', 'Books'],
    datasets: [
      {
        data: [30, 25, 25, 20],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
      },
    ],
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Monthly Revenue',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const areaChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        fill: true,
        label: 'Customer Growth',
        data: [30, 45, 57, 75, 85, 95],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        tension: 0.4,
      },
    ],
  };

  const areaChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Customer Growth Trend'
      },
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Left Section - Chatbot Interface */}
      <div className="w-1/2 p-6 border-r border-gray-200 dark:border-gray-700">
        <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">AI Assistant</h2>
          </div>
          
          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {/* AI Message */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <span className="text-white text-sm">AI</span>
                  </div>
                </div>
                <div className="ml-3 bg-blue-100 dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    Hello! I can help you analyze your e-commerce data. What would you like to know?
                  </p>
                </div>
              </div>
              
              {/* User Message */}
              <div className="flex items-start justify-end">
                <div className="mr-3 bg-gray-100 dark:bg-gray-600 p-3 rounded-lg">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    Show me the sales trend for the last 6 months.
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-gray-300 dark:bg-gray-500 flex items-center justify-center">
                    <span className="text-white text-sm">You</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Ask something about your data..."
                className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Data Visualization */}
      <div className="w-1/2 p-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-6">
          {/* Bar Chart */}
          <div className="col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Monthly Sales</h3>
            <Bar data={barData} options={{ responsive: true }} />
          </div>

          {/* Pie Chart */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Product Categories</h3>
            <Pie data={pieData} options={{ responsive: true }} />
          </div>

          {/* Line Chart */}
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Revenue Trend</h3>
            <Line data={lineData} options={{ responsive: true }} />
          </div>

          {/* Area Chart (New) */}
          <div className="col-span-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Customer Growth</h3>
            <Line data={areaChartData} options={areaChartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerDashboard;