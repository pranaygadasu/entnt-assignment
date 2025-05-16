// src/pages/jobs.jsx
import React, { useEffect, useState } from 'react';
import JobForm from '../components/jobs/jobsform';
import { useAuth } from '../contexts/authcontext';
import { useNotification } from '../contexts/notification';
import { hasAccess } from './utils/accesscontrol';

const JOB_STORAGE_KEY = 'maintenanceJobs';

function JobsPage() {
  const { user } = useAuth();
  const { addNotification } = useNotification();

  const [jobs, setJobs] = useState([]);
  const [filterStatus, setFilterStatus] = useState('');
  const [filterPriority, setFilterPriority] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(JOB_STORAGE_KEY)) || [];
    setJobs(saved);
  }, []);

  const saveJobs = (updated) => {
    setJobs(updated);
    localStorage.setItem(JOB_STORAGE_KEY, JSON.stringify(updated));
  };

  const handleStatusChange = (id, newStatus) => {
    const updated = jobs.map(job =>
      job.id === id ? { ...job, status: newStatus } : job
    );
    saveJobs(updated);
    addNotification(`Job status updated to ${newStatus}`);
  };

  const handleNewJob = () => {
    const saved = JSON.parse(localStorage.getItem(JOB_STORAGE_KEY)) || [];
    setJobs(saved);
    addNotification("Job Created");
  };

  const filteredJobs = jobs.filter(job =>
    (!filterStatus || job.status === filterStatus) &&
    (!filterPriority || job.priority === filterPriority)
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Maintenance Jobs</h2>

      {hasAccess(user?.role, 'jobs', 'write') && (
        <JobForm onJobCreated={handleNewJob} />
      )}

      <div className="flex gap-4 mb-4">
        <select
          value={filterStatus}
          onChange={e => setFilterStatus(e.target.value)}
          className="border p-2"
        >
          <option value="">All Statuses</option>
          <option>Open</option>
          <option>In Progress</option>
          <option>Completed</option>
        </select>

        <select
          value={filterPriority}
          onChange={e => setFilterPriority(e.target.value)}
          className="border p-2"
        >
          <option value="">All Priorities</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>

      {filteredJobs.length === 0 ? (
        <p className="text-gray-600">No jobs to display.</p>
      ) : (
        filteredJobs.map(job => (
          <div key={job.id} className="border p-4 rounded mb-4 bg-white shadow">
            <p><strong>Component ID:</strong> {job.componentId}</p>
            <p><strong>Type:</strong> {job.type}</p>
            <p><strong>Priority:</strong> {job.priority}</p>
            <p><strong>Assigned Engineer ID:</strong> {job.assignedEngineerId}</p>
            <p><strong>Scheduled:</strong> {job.scheduledDate}</p>
            <p><strong>Status:</strong>{' '}
              {hasAccess(user?.role, 'jobs', 'write') ? (
                <select
                  className="ml-2 border p-1"
                  value={job.status}
                  onChange={(e) => handleStatusChange(job.id, e.target.value)}
                >
                  <option>Open</option>
                  <option>In Progress</option>
                  <option>Completed</option>
                </select>
              ) : (
                <span className="ml-2">{job.status}</span>
              )}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default JobsPage;
