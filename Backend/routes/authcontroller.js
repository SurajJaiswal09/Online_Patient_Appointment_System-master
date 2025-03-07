import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.model.js';

// Initialize default clerk account for system access
export const initializeDefaultClerk = async () => {
  try {
    const existingClerk = await User.findOne({ username: 'clerk' });
    if (!existingClerk) {
      const hashedPassword = await bcrypt.hash('password123', 10);
      const clerk = new User({
        username: 'clerk',
        password: hashedPassword,
        role: 'clerk'
      });
      await clerk.save();
      console.log('Default clerk created successfully');
    }
  } catch (error) {
    console.error('Error creating default clerk:', error);
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    console.log('User logged in successfully');
    res.json({ token, role: user.role });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const logout = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }

    console.log('User logged out successfully');
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Error during logout' });
  }
};
