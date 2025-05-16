import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [stats, setStats] = useState({
    totalShips: 0,
    totalComponents: 0,
    totalJobs: 0,
    inProgress: 0,
    completed: 0,
  });

  useEffect(() => {
    const ships = JSON.parse(localStorage.getItem('shipData')) || [];
    const totalShips = ships.length;

    const componentKeys = Object.keys(localStorage).filter(key =>
      key.startsWith('components-')
    );
    let totalComponents = 0;
    componentKeys.forEach(key => {
      const comps = JSON.parse(localStorage.getItem(key)) || [];
      totalComponents += comps.length;
    });

    const jobs = JSON.parse(localStorage.getItem('maintenanceJobs')) || [];
    const totalJobs = jobs.length;
    const inProgress = jobs.filter(j => j.status === 'In Progress').length;
    const completed = jobs.filter(j => j.status === 'Completed').length;

    setStats({
      totalShips,
      totalComponents,
      totalJobs,
      inProgress,
      completed,
    });
  }, []);

  return (
    <div className="main-content">
      <h2 className="text-3xl font-bold mb-6">Ship Maintenance Dashboard</h2>
      <p className="mb-6 text-gray-700">Welcome to the dashboard. Ship data will appear here.</p>

      <div className="kpis">
        <StatCard title="Total Ships" value={stats.totalShips} color="bg-blue-500" />
        <StatCard title="Total Components" value={stats.totalComponents} color="bg-indigo-500" />
        <StatCard title="Total Jobs" value={stats.totalJobs} color="bg-teal-500" />
        <StatCard title="In Progress Jobs" value={stats.inProgress} color="bg-yellow-500" />
        <StatCard title="Completed Jobs" value={stats.completed} color="bg-green-600" />
      </div>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className={`kpi-card text-white rounded-2xl shadow ${color}`}>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

export default Dashboard;
