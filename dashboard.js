import React from 'react';

function Dashboard() {
  return (
    <div className="p-8">
      {/* Top Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Ship Maintenance Dashboard</h1>
        <p className="text-blue-700">Welcome to the dashboard. Ship data will appear here.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-gray-500 text-sm mb-2">Total Ships</h3>
          <p className="text-2xl font-bold">4</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-gray-500 text-sm mb-2">Total Components</h3>
          <p className="text-2xl font-bold">10</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-gray-500 text-sm mb-2">Overdue Components</h3>
          <p className="text-2xl font-bold">2</p>
        </div>
        <div className="bg-white shadow rounded-xl p-6 text-center">
          <h3 className="text-gray-500 text-sm mb-2">Unique Types</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-md font-semibold mb-4">Component Type Distribution</h3>
          {/* Replace below with your PieChart component */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-blue-300 rounded-full" />
          </div>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-md font-semibold mb-4">Job Priority Distribution</h3>
          {/* Replace below with your PieChart component */}
          <div className="flex justify-center">
            <div className="w-48 h-48 bg-blue-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* Recent Jobs */}
      <div>
        <h3 className="text-lg font-bold mb-4">Recent Maintenance Jobs</h3>
        {/* Map recent jobs here */}
      </div>
    </div>
  );
}

export default Dashboard;
