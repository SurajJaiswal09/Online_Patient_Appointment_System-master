import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 

dotenv.config();


console.log('Environment variables loaded:', {
  MongoDBURI: process.env.MongoDBURI ? 'Present' : 'Missing',
  JWT_SECRET: process.env.JWT_SECRET ? 'Present' : 'Missing'
});

const app = express();

app.use(cors()); 
app.use(express.json());

import("../Backend/db.js");



import { initializeDefaultClerk, login } from './routes/authcontroller.js';
import Appointment from "../Backend/routes/Appointment.route.js";
import remindersRouter from "./routes/Reminder.route.js";
import AppointmentModel from "./models/Appointment_list.model.js";

setTimeout(() => {
  initializeDefaultClerk();
}, 5000); 


app.use('/api/appointments', Appointment);
app.use("/reminders", remindersRouter);
app.post('/login', login);

app.get("/getAppointment", (req, res) => {
  AppointmentModel.find()
    .then(appointments => res.json(appointments))
    .catch(err => res.status(500).json(err));
});

app.get("/appointments/total", async (req, res) => {
  try {
    const count = await AppointmentModel.countDocuments({});
    res.json({ count });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

const port = process.env.PORT || 5000; 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
