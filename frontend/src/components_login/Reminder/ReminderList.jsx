import React from 'react';

const ReminderList = ({ reminders, deleteReminder }) => {
  return (
    <ul className="space-y-4">
      {reminders.map((reminder) => (
        <li key={reminder._id} className="bg-gray-100 p-4 rounded flex justify-between items-center">
          <div>
            <h4 className="text-lg font-semibold">{reminder.title}</h4>
            <p className="text-gray-600">{reminder.date} {reminder.time}</p>
          </div>
          <button onClick={() => deleteReminder(reminder._id)} className="bg-red-500 text-white p-2 rounded">Delete</button>
        </li>
      ))}
    </ul>
  )
};

export default ReminderList;
