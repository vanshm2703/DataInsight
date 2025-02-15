import React, { useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { MessageCircle, X, Upload, FileText, Paperclip } from 'lucide-react';
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

const CustomRetailerDashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfError, setPdfError] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [activeChart, setActiveChart] = useState('monthly');
  const [messages, setMessages] = useState([
    {
      type: 'ai',
      content: 'Hello! I can help you analyze your e-commerce data. You can also upload PDF documents for analysis.'
    }
  ]);
  
  // State to manage selected file type
  const [fileType, setFileType] = useState('');
  const [showFileOptions, setGiveOptions] = useState(false); // Renamed function

  // Add these file options with icons
  const fileOptions = [
    { type: 'image', label: 'Image', icon: '🖼️' },
    { type: 'csv', label: 'CSV', icon: '📊' },
    { type: 'text', label: 'Text', icon: '📝' }
  ];

  const barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales',
        data: [12000, 19000, 15000, 25000, 22000, 30000],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 2,
        borderRadius: 4,
        hoverBackgroundColor: 'rgba(53, 162, 235, 0.7)',
        hoverBorderColor: 'rgb(53, 162, 235)',
        hoverBorderWidth: 3,
      },
    ],
  };

  const pieData = {
    labels: ['Electronics', 'Clothing', 'Food', 'Books', 'Home & Garden'],
    datasets: [
      {
        data: [35, 25, 20, 15, 5],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Current Revenue',
        data: [65000, 59000, 80000, 81000, 86000, 95000],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgb(75, 192, 192)',
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgb(75, 192, 192)',
        pointHoverBackgroundColor: 'rgb(75, 192, 192)',
        pointHoverBorderColor: 'white',
      },
      {
        label: 'Previous Revenue',
        data: [55000, 49000, 70000, 71000, 76000, 85000],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgb(255, 99, 132)',
        pointHoverBackgroundColor: 'rgb(255, 99, 132)',
        pointHoverBorderColor: 'white',
      }
    ],
  };

  const areaChartData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
    datasets: [
      {
        fill: true,
        label: 'Customer Growth',
        data: [500, 800, 1200, 1500, 2000, 2500],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.2)',
        pointBackgroundColor: 'white',
        pointBorderColor: 'rgb(53, 162, 235)',
        pointHoverBackgroundColor: 'rgb(53, 162, 235)',
        pointHoverBorderColor: 'white',
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1e293b',
        bodyColor: '#475569',
        titleFont: {
          size: 14,
          weight: 'bold'
        },
        bodyFont: {
          size: 13
        },
        padding: 12,
        borderColor: '#e2e8f0',
        borderWidth: 1,
        displayColors: true,
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', { 
                style: 'currency', 
                currency: 'USD' 
              }).format(context.parsed.y);
            }
            return label;
          }
        }
      }
    },
    elements: {
      point: {
        radius: 6,
        hoverRadius: 8,
        borderWidth: 2,
        backgroundColor: 'white',
        hoverBorderWidth: 3,
        hitRadius: 8
      },
      line: {
        tension: 0.3
      }
    },
    interaction: {
      intersect: false,
      mode: 'index'
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.1)',
        },
        ticks: {
          callback: function(value) {
            return '$' + value.toLocaleString();
          }
        }
      },
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0.1)',
        }
      }
    }
  };

  // Update the chartInsights object with more detailed, pointer-style insights
  const chartInsights = {
    monthly: [
      { value: "$30,000", text: "Highest sales recorded in June" },
      { value: "23%", text: "Month-over-month growth in Q2" },
      { value: "15K+", text: "Average units sold per month" },
      { value: "$22,000", text: "Average monthly revenue" },
      { value: "92%", text: "Target achievement rate" }
    ],
    categories: [
      { value: "35%", text: "Electronics dominates total sales" },
      { value: "25%", text: "Clothing shows consistent growth" },
      { value: "20%", text: "Food sector expanding rapidly" },
      { value: "15%", text: "Books maintain steady performance" },
      { value: "5%", text: "Home & Garden potential for growth" }
    ],
    revenue: [
      { value: "$95,000", text: "Peak revenue achieved in June" },
      { value: "46%", text: "Year-over-year growth" },
      { value: "$77,666", text: "Average monthly revenue" },
      { value: "12%", text: "Improvement from previous year" },
      { value: "$15,000", text: "Average revenue increase per month" }
    ],
    growth: [
      { value: "2,500", text: "Total customers by week 6" },
      { value: "400%", text: "Customer base growth rate" },
      { value: "500", text: "New customers per week" },
      { value: "85%", text: "Customer retention rate" },
      { value: "3x", text: "Faster growth than industry average" }
    ]
  };

  // Add this object near your chartInsights definition
  const chartAccentColors = {
    monthly: 'bg-blue-500',
    categories: 'bg-purple-500',
    revenue: 'bg-green-500',
    growth: 'bg-orange-500'
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Handle file upload based on the selected file type
      if (fileType === 'image' && !file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
      }
      if (fileType === 'csv' && file.type !== 'text/csv') {
        alert('Please upload a valid CSV file.');
        return;
      }
      if (fileType === 'text' && file.type !== 'text/plain') {
        alert('Please upload a valid text file.');
        return;
      }
      // Handle the file (e.g., set it to state or process it)
      console.log(`Uploaded ${fileType}:`, file);
      setGiveOptions(false); // Hide options after selection
    }
  };

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      setMessages(prev => [...prev, {
        type: 'user',
        content: messageInput
      }]);
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'ai',
          content: 'I received your message: ' + messageInput
        }]);
      }, 1000);
      setMessageInput('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
      {/* Left Sidebar with Data Insights Title */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-lg">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Data Insights</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">Analytics Dashboard</p>
          <nav className="space-y-2">
            <button
              onClick={() => setActiveChart('monthly')}
              className={`w-full px-4 py-3 text-left rounded-lg transition-colors duration-150 ${
                activeChart === 'monthly'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span>Monthly Sales</span>
              </div>
            </button>

            <button
              onClick={() => setActiveChart('categories')}
              className={`w-full px-4 py-3 text-left rounded-lg transition-colors duration-150 ${
                activeChart === 'categories'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
                <span>Product Categories</span>
              </div>
            </button>

            <button
              onClick={() => setActiveChart('revenue')}
              className={`w-full px-4 py-3 text-left rounded-lg transition-colors duration-150 ${
                activeChart === 'revenue'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <span>Revenue Trend</span>
              </div>
            </button>

            <button
              onClick={() => setActiveChart('growth')}
              className={`w-full px-4 py-3 text-left rounded-lg transition-colors duration-150 ${
                activeChart === 'growth'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Customer Growth</span>
              </div>
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
          {activeChart === 'monthly' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Monthly Sales</h3>
              <div className="h-[400px]">
                <Bar data={barData} options={chartOptions} />
              </div>
              {/* Replace the existing insights section with this simpler version */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Key Insights</h4>
                <div className="space-y-3">
                  {chartInsights.monthly.map((insight, index) => (
                    <div key={index} className="flex items-baseline space-x-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-800 dark:text-white">•</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          {insight.value}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {insight.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeChart === 'categories' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Product Categories</h3>
              <div className="h-[400px]">
                <Pie data={pieData} options={chartOptions} />
              </div>
              {/* Replace the existing insights section with this simpler version */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Key Insights</h4>
                <div className="space-y-3">
                  {chartInsights.categories.map((insight, index) => (
                    <div key={index} className="flex items-baseline space-x-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-800 dark:text-white">•</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          {insight.value}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {insight.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeChart === 'revenue' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Revenue Trend</h3>
              <div className="h-[400px]">
                <Line data={lineData} options={chartOptions} />
              </div>
              {/* Replace the existing insights section with this simpler version */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Key Insights</h4>
                <div className="space-y-3">
                  {chartInsights.revenue.map((insight, index) => (
                    <div key={index} className="flex items-baseline space-x-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-800 dark:text-white">•</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          {insight.value}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {insight.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeChart === 'growth' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Customer Growth</h3>
              <div className="h-[400px]">
                <Line data={areaChartData} options={chartOptions} />
              </div>
              {/* Replace the existing insights section with this simpler version */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Key Insights</h4>
                <div className="space-y-3">
                  {chartInsights.growth.map((insight, index) => (
                    <div key={index} className="flex items-baseline space-x-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-gray-800 dark:text-white">•</span>
                        <span className="font-semibold text-gray-800 dark:text-white">
                          {insight.value}
                        </span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-300">
                        {insight.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Paperclip Button with Circular Menu */}
      <div className="fixed bottom-32 right-6">
        {/* Circular Options */}
        <div className="relative">
          {showFileOptions && fileOptions.map((option, index) => {
            const startAngle = 255 * (Math.PI / 180);
            const endAngle = 155 * (Math.PI / 180);
            const angle = startAngle + (index * ((endAngle - startAngle) / (fileOptions.length - 1)));
            const distance = 85;

            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            return (
              <button
                key={index}
                onClick={() => {
                  setFileType(option.type);
                  document.getElementById('file-upload').click();
                }}
                className={`absolute p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg 
                  hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300
                  border border-gray-400/20 
                  group ${showFileOptions ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                style={{
                  transform: `translate(${x}px, ${y}px) ${showFileOptions ? 'scale(1)' : 'scale(0)'}`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <span className="text-xl">{option.icon}</span>
                <span className={`absolute whitespace-nowrap text-sm font-medium text-gray-700 dark:text-gray-300
                  bg-white dark:bg-gray-800 px-2 py-1 rounded-md shadow-sm
                  border border-gray-400/20
                  opacity-0 group-hover:opacity-100 transition-opacity
                  ${index === 2 ? '-left-20 top-2 z-[60]' : '-top-8'}`}>
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Paperclip Button */}
        <button
          onClick={() => setGiveOptions(!showFileOptions)}
          className={`p-4 bg-green-500 text-white rounded-full shadow-lg 
            hover:bg-green-600 transition-all duration-300 z-50
            transform ${showFileOptions ? 'rotate-45' : 'rotate-0'}`}
        >
          <Paperclip size={24} />
        </button>

        {/* Hidden File Input */}
        <input
          type="file"
          id="file-upload"
          accept=".jpg,.jpeg,.png,.csv,.txt"
          onChange={handleFileUpload}
          className="hidden"
        />
      </div>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className={`fixed bottom-6 right-6 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ${
          isChatOpen ? 'hidden' : 'flex'
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Popup */}
      {isChatOpen && (
        <div className="fixed bottom-6 right-6 w-[38%] h-[600px] bg-white dark:bg-gray-800 rounded-lg shadow-2xl flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-sm">AI</span>
              </div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-white">AI Assistant</h2>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <X size={20} className="text-gray-500 dark:text-gray-400" />
            </button>
          </div>
          
          {/* Chat Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className="flex items-start">
                  {message.type === 'ai' ? (
                    <>
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                          <span className="text-white text-sm">AI</span>
                        </div>
                      </div>
                      <div className="ml-3 bg-blue-100 dark:bg-gray-700 p-3 rounded-lg">
                        <p className="text-sm text-gray-800 dark:text-gray-200">
                          {message.content}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="ml-auto bg-blue-500 p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm text-white">
                        {message.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}

              {/* Display selected PDF */}
              {selectedPdf && (
                <div className="flex items-center gap-2 p-2 bg-blue-50 dark:bg-gray-700 rounded-lg">
                  <FileText size={16} className="text-blue-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300 truncate">
                    {selectedPdf.name}
                  </span>
                  <button
                    onClick={() => setSelectedPdf(null)}
                    className="ml-auto text-gray-500 hover:text-red-500"
                  >
                    <X size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Chat Input with PDF Upload */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-3">
              {/* PDF Upload Section */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    id="pdf-upload"
                    accept=".pdf"
                    onChange={handlePdfUpload}
                    className="hidden"
                  />
                  <label
                    htmlFor="pdf-upload"
                    className="flex items-center gap-2 text-sm text-blue-500 hover:text-blue-600 cursor-pointer"
                  >
                    <Upload size={18} />
                    <span>Upload PDF</span>
                  </label>
                </div>
                {pdfError && (
                  <span className="text-xs text-red-500">{pdfError}</span>
                )}
              </div>

              {/* Updated Message Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Ask something about your data..."
                  className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <button 
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomRetailerDashboard;