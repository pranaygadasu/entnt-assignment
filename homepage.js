import React from 'react';

function HomePage() {
  return (
    <div className="min-h-screen flex">
      {/* Left 1/4 section */}
      <div className="w-full md:w-1/4 bg-blue-600 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome</h1>
        <p className="text-sm text-center">This is the left section (1/4 width).</p>
      </div>

      {/* Right 3/4 section */}
      <div className="w-3/4 bg-white p-8">
        {/* Blank area — add form or content here later */}
      </div>
    </div>
  );
}

export default HomePage;
