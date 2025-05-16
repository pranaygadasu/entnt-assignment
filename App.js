// App.js
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Dashboard from './pages/dashboard';
import Ships from './pages/ships';
import JobsPage from './pages/jobs';
import CalendarPage from './pages/calendar';
import LoginPage from './pages/loginpage';
import ProtectedRoute from './components/protectedroute';
import { AuthContext } from './contexts/authcontext';

function App() {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <LoginPage />; // login first
  }

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ships" element={<Ships />} />
          <Route path="/maintenance" element={<JobsPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
