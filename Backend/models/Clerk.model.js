import mongoose from 'mongoose';

const clerkSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Clerk = mongoose.model('Clerk', clerkSchema);

export default Clerk; 