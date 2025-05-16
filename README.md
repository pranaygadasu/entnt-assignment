# entnt-assignment
# ENTNT Ship Maintenance Dashboard

A responsive role-based React application to manage ship components, maintenance jobs, and engineers.

## 🔧 Features
- Login-based access for Admin, Engineer, and Inspector roles
- Add/Edit/Delete ships and their components
- Assign maintenance jobs with priority and schedule
- Filter jobs and view job calendar
- KPI dashboard with pie charts and job status
- LocalStorage-backed data persistence
- Fully responsive layout

## 🚀 Built With
- React + React Router
- Tailwind CSS
- Vite (or Create React App)
- LocalStorage
- FullCalendar for job calendar

## 👥 Roles
- **Admin**: Full Access
- **Engineer**: Read/Write jobs
- **Inspector**: Read-only

const users = [
  { id: '1', role: 'Admin', email: 'admin@entnt.in', password: 'admin123' },
  { id: '2', role: 'Inspector', email: 'inspector@entnt.in', password: 'inspect123' },
  { id: '3', role: 'Engineer', email: 'engineer@entnt.in', password: 'engine123' }
];
