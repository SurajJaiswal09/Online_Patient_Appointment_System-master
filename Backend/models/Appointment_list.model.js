import mongoose, { mongo } from "mongoose";

const Appointment_listSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
    datetime:String,
    date:String,
})
const AppointmentModel = mongoose.model("appointments",Appointment_listSchema);
export default AppointmentModel;