import React from 'react';

export default function ShipFilter({ statusFilter, setStatusFilter }) {
  return (
    <div>
      <label>Filter by Status: </label>
      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
        <option value="">All</option>
        <option value="Operational">Operational</option>
        <option value="Maintenance Due">Maintenance Due</option>
        <option value="In Dock">In Dock</option>
      </select>
    </div>
  );
}
