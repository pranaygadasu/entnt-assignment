import React, { useContext } from 'react';
import { NotificationContext } from '../contexts/notification';

function NotificationPanel() {
  const { notifications, removeNotification } = useContext(NotificationContext);

  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {notifications.map(n => (
        <div
          key={n.id}
          className="bg-blue-600 text-white p-3 rounded shadow flex items-center justify-between"
        >
          <span>{n.message}</span>
          <button onClick={() => removeNotification(n.id)} className="ml-4 text-sm">✕</button>
        </div>
      ))}
    </div>
  );
}

export default NotificationPanel;
