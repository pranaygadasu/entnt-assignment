import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authcontext';
import logo from '../assets/entntlogo.png';

function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo-container">
        <img src={logo} alt="ENTNT" className="sidebar-logo" />
        <div className="sidebar-brand">ENTNT</div>
      </div>
      
      <div className="sidebar-nav">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/ships">Ships</NavLink>
        <NavLink to="/maintenance">Maintenance</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
      </div>

      {/* 👇 Logout button styled properly */}
      <button
        onClick={handleLogout}
        className="mt-auto bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md mt-6"
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
