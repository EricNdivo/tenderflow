import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to TenderFlow</h1>
      <p className="mt-4 text-lg text-gray-600">Your one-stop solution for managing tenders and applications.</p>
      <div className="mt-6">
        <a href="/login" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
          Login
        </a>
        <a href="/register" className="ml-4 px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
          Register
        </a>
      </div>
    </div>
  );
};

export default Index;