import React, { useState, useEffect } from 'react';

function ShipForm({ onSave, initialData = {}, onCancel }) {
  const [form, setForm] = useState({
    id: '',
    name: '',
    imo: '',
    flag: '',
    status: 'Operational',
    lastServiced: '',
    ...initialData
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
    setForm({
      id: '',
      name: '',
      imo: '',
      flag: '',
      status: 'Operational',
      lastServiced: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-lg font-bold mb-2">{form.id ? 'Edit Ship' : 'Add Ship'}</h3>

      <input
        name="name"
        placeholder="Ship Name"
        value={form.name}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />
      <input
        name="imo"
        placeholder="IMO Number"
        value={form.imo}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
        required
      />
      <input
        name="flag"
        placeholder="Flag"
        value={form.flag}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      >
        <option>Operational</option>
        <option>In Dock</option>
        <option>Maintenance Due</option>
      </select>
      <input
        name="lastServiced"
        type="date"
        value={form.lastServiced}
        onChange={handleChange}
        className="border p-2 w-full mb-2"
      />

      <div className="flex justify-between">
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {form.id ? 'Update' : 'Add'}
        </button>
        {onCancel && (
          <button onClick={onCancel} type="button" className="bg-gray-300 px-4 py-2 rounded">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default ShipForm;
