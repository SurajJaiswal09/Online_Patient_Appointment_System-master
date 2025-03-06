import express from 'express';
import { createAppointment, getTotalAppointments } from '../controllers/Appointment.controller.js';

const router = express.Router();

router.post('/', createAppointment);

// New route for fetching total appointments count
router.get('/total', getTotalAppointments);

export default router;
