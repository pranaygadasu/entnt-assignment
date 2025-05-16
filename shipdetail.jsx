import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ShipDetailPage() {
  const { id } = useParams(); // FIX: you missed this!
  const [editingIndex, setEditingIndex] = useState(null);
  const [components, setComponents] = useState([]);
  const [newComponent, setNewComponent] = useState({
    name: '',
    serial: '',
    installDate: '',
    lastMaintenanceDate: ''
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`components-${id}`)) || [];
    setComponents(saved);
  }, [id]);

  const saveComponents = (list) => {
    setComponents(list);
    localStorage.setItem(`components-${id}`, JSON.stringify(list));
  };

  const handleDelete = (indexToDelete) => {
    const updated = components.filter((_, i) => i !== indexToDelete);
    saveComponents(updated);
  };

  const handleSave = () => {
    const updated = [...components];

    if (editingIndex !== null) {
      updated[editingIndex] = newComponent;
    } else {
      updated.push(newComponent);
    }

    saveComponents(updated);
    setNewComponent({ name: '', serial: '', installDate: '', lastMaintenanceDate: '' });
    setEditingIndex(null);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Components for Ship ID: {id}</h2>

      <div className="space-y-4 mb-6">
        <input type="text" placeholder="Component Name" className="border p-2 w-full"
          value={newComponent.name} onChange={e => setNewComponent({ ...newComponent, name: e.target.value })} />
        <input type="text" placeholder="Serial Number" className="border p-2 w-full"
          value={newComponent.serial} onChange={e => setNewComponent({ ...newComponent, serial: e.target.value })} />
        <input type="date" className="border p-2 w-full"
          value={newComponent.installDate} onChange={e => setNewComponent({ ...newComponent, installDate: e.target.value })} />
        <input type="date" className="border p-2 w-full"
          value={newComponent.lastMaintenanceDate} onChange={e => setNewComponent({ ...newComponent, lastMaintenanceDate: e.target.value })} />

        <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">
          {editingIndex !== null ? 'Update Component' : 'Add Component'}
        </button>
      </div>

      <ul className="space-y-4">
        {components.map((comp, index) => (
          <li key={index} className="border p-4 bg-gray-100 rounded">
            <strong>{comp.name}</strong><br />
            Serial: {comp.serial}<br />
            Installed: {comp.installDate}<br />
            Last Maintenance: {comp.lastMaintenanceDate}
            <div className="mt-2 flex gap-2">
              <button onClick={() => {
                setNewComponent(comp);
                setEditingIndex(index);
              }} className="bg-yellow-500 text-white px-3 py-1 rounded">
                Edit
              </button>
              <button onClick={() => handleDelete(index)} className="bg-red-600 text-white px-3 py-1 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShipDetailPage;
