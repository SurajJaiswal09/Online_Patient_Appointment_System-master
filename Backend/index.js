import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 

dotenv.config();

// Log environment variables status for debugging
console.log('Environment variables loaded:', {
  MongoDBURI: process.env.MongoDBURI ? 'Present' : 'Missing',
  JWT_SECRET: process.env.JWT_SECRET ? 'Present' : 'Missing'
});

const app = express();

app.use(cors()); 
app.use(express.json());

import("../Backend/db.js");

import { initializeDefaultClerk, login, logout } from './routes/authcontroller.js';
import Appointment from "./routes/Appointment.route.js";
import remindersRouter from "./routes/Reminder.route.js";
import AppointmentModel from "./models/Appointment_list.model.js";
import { authenticateToken } from './routes/authmiddleware.js';

// Initialize clerk after DB connection is established
setTimeout(() => {
  initializeDefaultClerk();
}, 5000); 

// Public routes
app.post('/login', login);
app.post('/logout', authenticateToken, logout);

// Make appointment creation public but viewing protected
app.post('/api/appointments', async (req, res) => {
  try {
    const newAppointment = new AppointmentModel({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      datetime: req.body.datetime,
      date: new Date()
    });

    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    console.error('Error creating appointment:', error);
    res.status(500).json({ message: 'Failed to create appointment' });
  }
});

// Protected routes
app.use('/api/appointments/manage', authenticateToken, Appointment);
app.use("/reminders", authenticateToken, remindersRouter);
app.get("/getAppointment", authenticateToken, (req, res) => {
  AppointmentModel.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(500).json(err));
});

const port = process.env.PORT || 5000; 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
