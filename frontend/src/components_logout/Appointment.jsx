import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import appointment from "../../public/appointment.jpg";
import axios from 'axios';
import "../../src/style.css";

function Appointment() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    datetime: "",
  });

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/appointments", formData);
      
      if (response.status === 201) {
        toast.success(
          <div>
            <p className="text-black font-semibold text-lg mb-0 p-0">
              Appointment Booked Successfully!
            </p>
            <p className="text-gray-800 textarea-sm mt-0 p-0">
              We will contact you soon
            </p>
          </div>,
          {
            position: "top-center",
            className: "bg-green-300 text-black font-semibold toast-message w-96",
            progressClassName: "bg-green-700",
          }
        );
        
        // Clear form
        setFormData({
          name: "",
          email: "",
          message: "",
          datetime: "",
        });
      }
    } catch (error) {
      console.error("Appointment booking error:", error);
      toast.error(
        error.response?.data?.message || "Failed to book appointment. Please try again.",
        {
          position: "top-center",
          className: "bg-red-500 text-white toast-message",
          progressClassName: "bg-red-700",
        }
      );
    }
  };

  return (
    <div id="makeappointment">
      {/* Page Title */}
      <h1 className="text-5xl text-blue-600 text-center font-bold">
        Appointment
      </h1>
      
      {/* Main Container */}
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-32 space-y-5">
        {/* Left Side: Image */}
        <div className="w-full md:w1/2">
          <img
            src={appointment}
            alt="Appointment"
            className="rounded-2xl md:rounded-full w-86 h-96"
          />
        </div>
        
        {/* Right Side: Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input Field */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              className="input input-bordered input-primary w-full max-w-xs"
              required
              onChange={handleChange}
            />
            
            {/* Email Input Field */}
            <input
              type="email"
              name="email"
              placeholder="Email id"
              value={formData.email}
              className="input input-bordered input-primary w-full max-w-xs"
              required
              onChange={handleChange}
            />
            
            {/* Message Input Field */}
            <textarea
              name="message"
              className="textarea textarea-primary w-1/2"
              placeholder="Message"
              value={formData.message}
              required
              onChange={handleChange}
            ></textarea>
            
            {/* Date & Time Input Field */}
            <p>Enter the Date & Time for Appointment</p>
            <input
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              required
              onChange={handleChange}
              className="dark:bg-slate-900 dark:text-white"
            />
            
            {/* Submit Button */}
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700 duration-300 cursor-pointer rounded-md px-20 py-3"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
      
      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
}

export default Appointment;
