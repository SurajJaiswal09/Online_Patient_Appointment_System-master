import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Clerk from '../models/Clerk.model.js';

// Function to initialize default clerk if not exists
export const initializeDefaultClerk = async () => {
    try {
        const defaultClerk = await Clerk.findOne({ username: 'clerk' });
        if (!defaultClerk) {
            const hashedPassword = await bcrypt.hash('password123', 10);
            await Clerk.create({
                username: 'clerk',
                password: hashedPassword
            });
            console.log('Default clerk created successfully');
        } else {
            console.log('Default clerk already exists');
        }
    } catch (error) {
        console.error('Error initializing default clerk:', error);
    }
};

export const login = async (req, res) => {
    try {
        console.log('Login attempt received:', { username: req.body.username });
        
        const { username, password } = req.body;

        // Find clerk by username
        const clerk = await Clerk.findOne({ username });
        if (!clerk) {
            console.log('Clerk not found:', username);
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Verify 
        const isValidPassword = await bcrypt.compare(password, clerk.password);
        if (!isValidPassword) {
            console.log('Invalid password for clerk:', username);
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        if (!process.env.JWT_SECRET) {
            console.error('JWT_SECRET is not defined in environment variables');
            return res.status(500).json({ message: 'Server configuration error' });
        }

        const token = jwt.sign(
            { userId: clerk._id, role: 'clerk' },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        console.log('Login successful for clerk:', username);
        return res.json({ token, role: 'clerk' });
    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ 
            message: 'Server error',
            error: error.message 
        });
    }
};
