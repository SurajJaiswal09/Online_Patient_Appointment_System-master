import express from 'express';
import AppointmentModel from '../models/Appointment_list.model.js';

const router = express.Router();

// Create new appointment
router.post('/', async (req, res) => {
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

// Get total appointments count
router.get('/total', async (req, res) => {
  try {
    const count = await AppointmentModel.countDocuments();
    res.json({ count });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching count' });
  }
});

export default router;
