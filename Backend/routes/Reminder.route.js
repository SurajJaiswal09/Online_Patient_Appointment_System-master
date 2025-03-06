import express from "express";
import Reminder from "../models/Reminder.model.js"
const router = express.Router();



router.get('/', async (req, res) => {
  try {
    const reminders = await Reminder.find();
    res.json(reminders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new reminder
router.post('/', async (req, res) => {
  const reminder = new Reminder({
    title: req.body.title,
    date: req.body.date,
    time: req.body.time
  });
  try {
    const newReminder = await reminder.save();
    res.status(201).json(newReminder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a reminder
router.delete('/:id', async (req, res) => {
  try {
    await Reminder.findByIdAndDelete(req.params.id);
    res.json({ message: 'Reminder deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;