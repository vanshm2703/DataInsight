import React, { useState, useEffect } from 'react';
import { Users, DollarSign, RefreshCw, Star, IndianRupee } from 'lucide-react';
import axios from 'axios';

const SummaryMetrics = () => {
  const [metrics, setMetrics] = useState({
    totalCustomers: 0,
    averageOrderValue: 0,
    returnRate: 0,
    averageRating: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/llm/getSummaryMetrics');
        console.log(response.data.data);
    
        // Convert string values to numbers
        const formattedData = {
          totalCustomers: Number(response.data.data.totalCustomers),
          averageOrderValue: parseFloat(response.data.data.averageOrderValue),
          returnRate: parseFloat(response.data.data.returnRate),
          averageRating: parseFloat(response.data.data.averageRating),
          totalOrders: Number(response.data.data.totalOrders)
        };
    
        setMetrics(formattedData);
        setLoading(false);
      } catch (err) {
        setError('Error connecting to server');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchMetrics();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-48">
        <div className="h-8 w-8 border-2 border-blue-500 rounded-full border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 p-4 bg-red-100 dark:bg-red-900/20 rounded-md">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Customers</h3>
            <Users className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          </div>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">{metrics.totalCustomers.toLocaleString()}</p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Unique customer count</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Order Value</h3>
            <IndianRupee className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          </div>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">₹{metrics.averageOrderValue.toLocaleString()}</p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Per order average</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Return Rate</h3>
            <RefreshCw className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          </div>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">{metrics.returnRate}%</p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Of total orders</p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-4">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Avg. Rating</h3>
            <Star className="h-4 w-4 text-gray-400 dark:text-gray-500" />
          </div>
          <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-4">{metrics.averageRating} / 5</p>
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Customer satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default SummaryMetrics;
