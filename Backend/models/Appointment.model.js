import mongoose from 'mongoose';

const AppointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
        required:true,
    },
    datetime: {
        type:String,
        required:true,
    }
});

const Appointment = mongoose.model('Appointment', AppointmentSchema);

export default Appointment;
