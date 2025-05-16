import React, { useState } from 'react';

export default function ShipForm({ onAddShip }) {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('');
  const [lastServiced, setLastServiced] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !status || !lastServiced) return;
    const newShip = { name, status, lastServiced };
    onAddShip(newShip);
    setName('');
    setStatus('');
    setLastServiced('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Ship</h3>
      <input
        type="text"
        placeholder="Ship Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} required>
        <option value="">Select Status</option>
        <option value="Operational">Operational</option>
        <option value="Maintenance Due">Maintenance Due</option>
        <option value="In Dock">In Dock</option>
      </select>
      <input
        type="date"
        value={lastServiced}
        onChange={(e) => setLastServiced(e.target.value)}
        required
      />
      <button type="submit">Add Ship</button>
    </form>
  );
}
