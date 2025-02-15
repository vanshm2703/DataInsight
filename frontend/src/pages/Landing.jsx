import React from 'react'
import { Upload, BarChart, MessageCircle, ChevronRight } from 'lucide-react';



const HeroSection = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-16 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                            <span className="block">Transform Your</span>
                            <span className="block text-blue-600 dark:text-blue-400">E-Commerce Data</span>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Upload your CSV data and get instant insights. Our AI-powered platform analyzes your e-commerce data and provides actionable recommendations.
                        </p>
                        <div className="mt-8 sm:mx-auto sm:max-w-lg sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <a href="#demo" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                                    Try Demo
                                </a>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#learn-more" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 dark:text-blue-400 dark:bg-gray-800 dark:hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
                                    Learn more
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                            <div className="relative block w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70 border border-gray-200 dark:border-gray-700">
                                <div className="p-8">
                                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                                        <Upload size={24} />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Upload your CSV</h3>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Drag and drop your e-commerce data file, or click to browse
                                    </p>
                                    <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                                        Browse Files
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Features Section
const FeaturesSection = () => {
    const features = [
        {
            icon: <Upload size={24} />,
            title: "Easy Data Upload",
            description: "Simply upload your CSV files and our platform handles the rest"
        },
        {
            icon: <BarChart size={24} />,
            title: "Advanced Analytics",
            description: "Get deep insights into your e-commerce performance with AI-powered analysis"
        },
        {
            icon: <MessageCircle size={24} />,
            title: "AI Chatbot",
            description: "Query your data naturally with our conversational AI assistant"
        }
    ];

    return (
        <div id="features" className="py-16 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        Features that empower your business
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        Our platform provides everything you need to understand and optimize your e-commerce performance.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        {features.map((feature, index) => (
                            <div key={index} className="relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70 border border-gray-200 dark:border-gray-700">
                                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                                    {feature.icon}
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// How It Works Section
const HowItWorksSection = () => {
    const steps = [
        {
            number: "01",
            title: "Upload Your Data",
            description: "Upload your e-commerce CSV data securely to our platform."
        },
        {
            number: "02",
            title: "Automated Analysis",
            description: "Our AI analyzes your data to find patterns and insights."
        },
        {
            number: "03",
            title: "Get Actionable Insights",
            description: "Review visualizations and recommendations for your business."
        },
        {
            number: "04",
            title: "Query with AI Chatbot",
            description: "Ask questions about your data in natural language."
        }
    ];

    return (
        <div id="how-it-works" className="py-16 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                        How It Works
                    </h2>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 mx-auto">
                        Four simple steps to transform your e-commerce data into actionable insights.
                    </p>
                </div>

                <div className="mt-16">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <div key={index} className="relative p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md backdrop-blur-sm bg-opacity-70 dark:bg-opacity-70 border border-gray-200 dark:border-gray-700">
                                <div className="absolute -top-4 -left-4 bg-blue-600 rounded-full h-10 w-10 flex items-center justify-center text-white font-bold">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white mt-4">{step.title}</h3>
                                <p className="mt-2 text-base text-gray-500 dark:text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// CTA Section
const CTASection = () => {
    return (
        <div className="bg-blue-600 dark:bg-blue-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span className="block">Ready to dive deeper?</span>
                    <span className="block text-blue-200">Start your free trial today.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="#signup" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                            Get started
                            <ChevronRight size={16} className="ml-2" />
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a href="#demo" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600">
                            Schedule demo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Landing = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <HowItWorksSection />
            <CTASection />
        </div>
    )
}

export default Landing