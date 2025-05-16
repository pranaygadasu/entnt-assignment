import React, { useEffect, useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const JOB_STORAGE_KEY = 'maintenanceJobs';

function CalendarPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const savedJobs = JSON.parse(localStorage.getItem(JOB_STORAGE_KEY)) || [];
    setJobs(savedJobs);
  }, []);
const jobsByDate = jobs.reduce((acc, job) => {
  const date = job.scheduledDate;
  if (!acc[date]) acc[date] = [];
  acc[date].push(job);
  return acc;
}, {});

  const events = jobs.map(job => ({
    title: `${job.type} (${job.priority})`,
    start: new Date(job.scheduledDate),
    end: new Date(job.scheduledDate),
    allDay: true,
  }));

  const handleSelectEvent = (event) => {
    alert(`Job: ${event.title}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Maintenance Job Calendar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(jobsByDate).map(([date, jobList]) => (
          <div key={date} className="border p-4 bg-white rounded shadow">
            <h3 className="font-bold mb-2">{date}</h3>
            {jobList.map(job => (
              <div key={job.id} className="border p-2 rounded mb-2 bg-gray-100">
                <p><strong>Type:</strong> {job.type}</p>
                <p><strong>Ship:</strong> {job.shipId}</p>
                <p><strong>Priority:</strong> {job.priority}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        views={['month', 'week']}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
}

export default CalendarPage;
