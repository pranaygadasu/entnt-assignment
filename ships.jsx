import React, { useEffect, useState } from 'react';
import ShipForm from '../components/ships/ShipForm';
import React, { useEffect, useState } from 'react';

const SHIP_STORAGE_KEY = 'ships';

function ShipsPage() {
  const [ships, setShips] = useState([]);
  const [editingShip, setEditingShip] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(SHIPS_STORAGE_KEY)) || [];
    setShips(saved);
  }, []);

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
  
  const saveShips = (updated) => {
    setShips(updated);
    localStorage.setItem(SHIPS_STORAGE_KEY, JSON.stringify(updated));
  };

  const handleAddOrUpdate = (ship) => {
    if (ship.id) {
      // Edit existing
      const updated = ships.map(s => (s.id === ship.id ? ship : s));
      saveShips(updated);
    } else {
      // Add new
      const newShip = { ...ship, id: `ship-${Date.now()}` };
      saveShips([...ships, newShip]);
    }
    setEditingShip(null);
  };

  const handleEdit = (index) => {
    setForm(ships[index]);
    setEditingIndex(index);
  };
const handleDelete = (index) => {
    const confirmed = window.confirm('Are you sure you want to delete this ship?');
    if (!confirmed) return;
    const updated = ships.filter(s => s.id !== id);
    saveShips(updated);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Ships Management</h2>

      <ShipForm
        onSave={handleAddOrUpdate}
        initialData={editingShip}
        onCancel={() => setEditingShip(null)}
      />

      {ships.length === 0 ? (
        <p>No ships added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hasAccess(user?.role, 'ships', 'write') && (
  <button className="bg-green-500 text-white px-4 py-2 rounded">
    Add Ship
  </button>
)}
          {ships.map((ship) => (
            <div key={ship.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">{ship.name}</h3>
              <p>IMO: {ship.imo}</p>
              <p>Flag: {ship.flag}</p>
              <p>Status: {ship.status}</p>
              <p>Last Serviced: {ship.lastServiced}</p>
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => handleEdit(ship)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(ship.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShipsPage;

