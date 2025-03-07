import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import ReminderForm from './Reminder/ReminderForm';
import ReminderList from './Reminder/ReminderList';
import "../../src/index.css"; // Import default styles if needed
import clerk from "../../public/clerk.jpeg";
import axios from 'axios';

const Dash = () => {
  const clerkName = 'Rohit Soni';
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [totalDoctors] = useState(4); // Assuming you have a static number of doctors
  const [reminders, setReminders] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch appointments with auth token
  useEffect(() => {
    const fetchTotalAppointments = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }
        const res = await axios.get('http://localhost:5000/getAppointment', {
          headers: {
            'Authorization': token
          }
        });
        setTotalAppointments(res.data.length);
      } catch (error) {
        console.error('Failed to fetch total appointments:', error);
        setError(error.response?.data?.message || 'Failed to load appointments data');
      } finally {
        setLoading(false);
      }
    };

    fetchTotalAppointments();
  }, []);

  // Fetch reminders with auth token
  useEffect(() => {
    const fetchReminders = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No authentication token found');
        }
        const res = await axios.get('http://localhost:5000/reminders', {
          headers: {
            'Authorization': token
          }
        });
        setReminders(res.data);
      } catch (error) {
        console.error('Failed to fetch reminders:', error);
        setError(error.response?.data?.message || 'Failed to load reminders');
      } finally {
        setLoading(false);
      }
    };

    fetchReminders();
  }, []);

  // Add reminder
  const addReminder = async (reminder) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }
      const res = await axios.post('http://localhost:5000/reminders', reminder, {
        headers: {
          'Authorization': token
        }
      });
      setReminders([...reminders, res.data]);
    } catch (error) {
      console.error('Failed to add reminder:', error);
      setError(error.response?.data?.message || 'Failed to add reminder');
    }
  };

  // Delete reminder
  const deleteReminder = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }
      await axios.delete(`http://localhost:5000/reminders/${id}`, {
        headers: {
          'Authorization': token
        }
      });
      setReminders(reminders.filter((reminder) => reminder._id !== id));
    } catch (error) {
      console.error('Failed to delete reminder:', error);
      setError(error.response?.data?.message || 'Failed to delete reminder');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="bg-blue-500 text-white p-6 rounded-lg w-full flex flex-col md:flex-row items-center">
        <img
          src={clerk} 
          alt="Rohan"
          className="w-40 h-40 rounded-full mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold">Hello, {clerkName}</h2>
          <p className="mt-4 italic text-yellow-200">"The best way to find yourself is to lose yourself in the service of others." – Mahatma Gandhi</p>
        </div>
      </div>

      {/* Appointments and Doctors Boxes */}
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Total Appointments Box */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div className="bg-green-500 text-white p-6 rounded-lg h-full">
            <h3 className="text-xl font-semibold">Total Appointments</h3>
            <p className="mt-2 text-3xl">{totalAppointments}</p>
          </div>
        </div>
        {/* Total Doctors Box */}
        <div className="w-full md:w-1/2">
          <div className="bg-red-500 text-white p-6 rounded-lg h-full">
            <h3 className="text-xl font-semibold">Total Doctors</h3>
            <p className="mt-2 text-3xl">{totalDoctors}</p>
          </div>
        </div>
      </div>

      {/* Calendar and Reminders Boxes */}
      <div className="flex flex-col md:flex-row mt-6 md:space-x-6">
        {/* Calendar Box */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 dark:bg-slate-900 dark:text-white">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200">Calendar</h3>
            <Calendar
              className="react-calendar"
              view="month"
            />
          </div>
        </div>

        {/* Reminder Box */}
        <div className="w-full md:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 dark:bg-slate-900 dark:text-white">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2 border-gray-200">Reminders</h3>
            <button
              onClick={() => setShowForm(!showForm)}
              className="w-full bg-blue-500 text-white p-2 rounded mb-4"
            >
              {showForm ? 'Cancel' : 'Add Reminder'}
            </button>
            {showForm && <ReminderForm addReminder={addReminder} />}
            <ReminderList reminders={reminders} deleteReminder={deleteReminder} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
