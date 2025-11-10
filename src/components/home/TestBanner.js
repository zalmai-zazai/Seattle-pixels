import React from "react";

const TestBanner = () => {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">TEST BANNER</h1>
        <p className="text-gray-600 mb-8">
          If you can scroll past this immediately, the problem is in your
          original Banner component
        </p>
        <div className="h-screen bg-green-100 flex items-center justify-center">
          <h2 className="text-2xl font-bold">
            You should see this immediately when scrolling
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TestBanner;
