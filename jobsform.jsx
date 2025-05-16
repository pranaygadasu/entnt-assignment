import React, { useState, useEffect } from 'react';
import { useNotification } from '../../contexts/notification';

const SHIPS = [
  { id: 's1', name: 'Ever Given' },
  { id: 's2', name: 'Maersk Alabama' },
];

const COMPONENTS = [
  { id: 'c1', name: 'Main Engine', shipId: 's1' },
  { id: 'c2', name: 'Radar', shipId: 's2' },
];

const ENGINEERS = [
  { id: '3', name: 'Engineer', email: 'engineer@entnt.in' }
];

const JOB_STORAGE_KEY = 'maintenanceJobs';

function JobForm({ onJobCreated }) {

   const { showNotification } = useNotification();

  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    shipId: '',
    componentId: '',
    type: '',
    priority: 'Low',
    status: 'Open',
    assignedEngineerId: '3',
    scheduledDate: ''
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(JOB_STORAGE_KEY)) || [];
    setJobs(saved);
  }, []);

  const handleSubmit = () => {
    const newJob = {
      ...form,
      id: `j${Date.now()}`
    };
    const updatedJobs = [...jobs, newJob];
    localStorage.setItem(JOB_STORAGE_KEY, JSON.stringify(updatedJobs));
    setJobs(updatedJobs);
    onJobCreated && onJobCreated(); // notify parent
    showNotification("Job Created Successfully");

    setForm({
      shipId: '',
      componentId: '',
      type: '',
      priority: 'Low',
      status: 'Open',
      assignedEngineerId: '3',
      scheduledDate: ''
    });
  };

  const filteredComponents = COMPONENTS.filter(c => c.shipId === form.shipId);

  return (
    <div className="p-4 border rounded mb-6 bg-white shadow-md">
      <h3 className="text-lg font-bold mb-2">Create Maintenance Job</h3>

      <select className="border p-2 w-full mb-2" value={form.shipId} onChange={e => setForm({ ...form, shipId: e.target.value })}>
        <option value="">Select Ship</option>
        {SHIPS.map(s => <option key={s.id} value={s.id}>{s.name}</option>)}
      </select>

      <select className="border p-2 w-full mb-2" value={form.componentId} onChange={e => setForm({ ...form, componentId: e.target.value })}>
        <option value="">Select Component</option>
        {filteredComponents.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Job Type"
        value={form.type}
        onChange={e => setForm({ ...form, type: e.target.value })}
      />

      <select className="border p-2 w-full mb-2" value={form.priority} onChange={e => setForm({ ...form, priority: e.target.value })}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <select className="border p-2 w-full mb-2" value={form.assignedEngineerId} onChange={e => setForm({ ...form, assignedEngineerId: e.target.value })}>
        {ENGINEERS.map(e => (
          <option key={e.id} value={e.id}>{e.name} ({e.email})</option>
        ))}
      </select>

      <input
        type="date"
        className="border p-2 w-full mb-2"
        value={form.scheduledDate}
        onChange={e => setForm({ ...form, scheduledDate: e.target.value })}
      />

      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Job
      </button>
    </div>
  );
}

export default JobForm;
