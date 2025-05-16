// src/pages/ships.js
import React, { useEffect, useState } from 'react';
import ShipForm from '../components/shipform';
import ShipFilter from '../components/shipfilter';

const SHIP_STORAGE_KEY = 'ships';

function Ships() {
  const [ships, setShips] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({ name: '', status: '', lastServiced: '' });

   useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(SHIP_STORAGE_KEY)) || [];
    setShips(saved);
  }, []);
  const saveShips = (updated) => {
    setShips(updated);
    localStorage.setItem(SHIP_STORAGE_KEY, JSON.stringify(updated));
  };
  // Load from localStorage on start
  useEffect(() => {
    const storedShips = localStorage.getItem('ships');
    if (storedShips) {
      setShips(JSON.parse(storedShips));
    } else {
      // Optional: preload some ships if empty
      const defaultShips = [
        { name: 'INS Vikrant', status: 'Operational', lastServiced: '2025-03-10' },
        { name: 'INS Kolkata', status: 'Maintenance Due', lastServiced: '2024-12-15' },
        { name: 'INS Arihant', status: 'In Dock', lastServiced: '2025-01-25' },
      ];
      setShips(defaultShips);
      localStorage.setItem('ships', JSON.stringify(defaultShips));
    }
  }, []);

  // Save to localStorage when ships change
  useEffect(() => {
    localStorage.setItem('ships', JSON.stringify(ships));
  }, [ships]);

  const handleAddShip = (newShip) => {
    setShips([...ships, newShip]);
  };
  const handleSubmit = () => {
    const updated = [...ships];
    if (editingIndex !== null) {
      updated[editingIndex] = form;
    } else {
      updated.push(form);
    }
    saveShips(updated);
    setForm({ name: '', status: '', lastServiced: '' });
    setEditingIndex(null);
  };
  const handleDelete = (index) => {
    const updated = ships.filter((_, i) => i !== index);
    saveShips(updated);
  };

  const filteredShips = statusFilter
    ? ships.filter((ship) => ship.status === statusFilter)
    : ships;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Ships Management</h2>

      <div className="space-y-2 mb-6">
        <input
          type="text"
          placeholder="Ship Name"
          className="border p-2 w-full"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <select
          className="border p-2 w-full"
          value={form.status}
          onChange={e => setForm({ ...form, status: e.target.value })}
        >
          <option value="">Select Status</option>
          <option>Operational</option>
          <option>Maintenance Due</option>
          <option>In Dock</option>
        </select>
        <input
          type="date"
          className="border p-2 w-full"
          value={form.lastServiced}
          onChange={e => setForm({ ...form, lastServiced: e.target.value })}
        />
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          {editingIndex !== null ? 'Update Ship' : 'Add Ship'}
        </button>
      </div>

      <ul className="space-y-4">
        {ships.map((ship, index) => (
          <li key={index} className="border p-4 bg-gray-100 rounded">
            <strong>{ship.name}</strong><br />
            Status: {ship.status}<br />
            Last Serviced: {ship.lastServiced}
            <div className="mt-2 flex gap-2">
              <button
                onClick={() => {
                  setForm(ship);
                  setEditingIndex(index);
                }}
                className="bg-yellow-500 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ships;