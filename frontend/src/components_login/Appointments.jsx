import React, { useEffect, useState } from 'react';
import axios from "axios";

function Appointments() {
  const [appointments, setAppointments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("ascName");

  useEffect(() => {
    axios.get("http://localhost:5000/getAppointment")
      .then(response => setAppointments(response.data))
      .catch(err => console.log(err));
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortAppointments = (appointments) => {
    switch (sortOrder) {
      case "ascName":
        return [...appointments].sort((a, b) => a.name.localeCompare(b.name));
      case "descName":
        return [...appointments].sort((a, b) => b.name.localeCompare(a.name));
      case "newest":
        return [...appointments].sort((a, b) => new Date(b.date) - new Date(a.date));
      case "oldest":
        return [...appointments].sort((a, b) => new Date(a.date) - new Date(b.date));
      default:
        return appointments;
    }
  };

  const filteredAppointments = appointments.filter(appointment =>
    appointment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    appointment.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedAppointments = sortAppointments(filteredAppointments);

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = sortedAppointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedAppointments.length / appointmentsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className='w-full h-full dark:bg-slate-900 dark:text-white p-4'>
        <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border rounded p-2 w-full md:w-1/2 mb-2 md:mb-0 dark:bg-slate-900 dark:text-white"
          />
          <select onChange={handleSortChange} className="border rounded p-2 w-full md:w-auto dark:bg-slate-900 dark:text-white">
            <option value="ascName">Sort by Name (A-Z)</option>
            <option value="descName">Sort by Name (Z-A)</option>
            <option value="newest">Sort by Newest</option>
            <option value="oldest">Sort by Oldest</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className='table-auto w-full'>
            <thead>
              <tr className="bg-gray-200 dark:bg-gray-700">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Date & Time</th>
                <th className="px-4 py-2">Received At</th>
              </tr>
            </thead>
            <tbody>
              {currentAppointments.map((appointment, index) => (
                <tr key={index} className="bg-white dark:bg-gray-800 border-b dark:border-gray-700">
                  <td className="px-4 py-2">{appointment.name}</td>
                  <td className="px-4 py-2">{appointment.email}</td>
                  <td className="px-4 py-2">{appointment.message}</td>
                  <td className="px-4 py-2">{appointment.datetime}</td>
                  <td className="px-4 py-2">{appointment.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-center mt-4">
          <nav>
            <ul className="flex">
              {pageNumbers.map(number => (
                <li key={number} className="mx-1">
                  <button onClick={() => paginate(number)} className={`px-3 py-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-black dark:text-white'}`}>
                    {number}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Appointments;
