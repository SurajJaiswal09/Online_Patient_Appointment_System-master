// here it controls the database request and response
//here we write the functions

import Appointment from '../models/Appointment.model.js';

export const createAppointment = async (req, res) => {
    try {
        const { name, email, message, datetime } = req.body;
        const newAppointment = new Appointment({
            name,
            email,
            message,
            datetime,
        });
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// New function to get the total number of appointments
export const getTotalAppointments = async (req, res) => {
    try {
        const count = await Appointment.countDocuments({});
        res.json({ count });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};