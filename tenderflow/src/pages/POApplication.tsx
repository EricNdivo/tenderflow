import React from 'react';

const POApplication: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Purchase Order Application</h1>
      <form>
        {}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="orderName">
            Order Name
          </label>
          <input
            type="text"
            id="orderName"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter order name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="quantity">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Enter quantity"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default POApplication;