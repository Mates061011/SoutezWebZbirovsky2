import express, { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user'; // Adjust the path to your User model

const router = express.Router();

// Register handler
const registerHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      res.status(400).json({ message: 'Username already exists' });
      return;
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Create a JWT token for the newly registered user
    const token = jwt.sign(
      { userId: newUser._id, username: newUser.username },
      process.env.JWT_SECRET || 'your-secret-key', // Replace with your secret key
      { expiresIn: '1h' }
    );

    // Send a response with the JWT token
    res.status(201).json({ message: 'User registered successfully', token });

  } catch (error) {
    next(error); // Pass errors to the error handler
  }
};

// Login handler (same as before)
const loginHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      res.status(400).json({ message: 'Invalid username or password' });
      return;
    }

    // Compare the password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({ message: 'Invalid username or password' });
      return;
    }

    // Create a JWT token
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      process.env.JWT_SECRET || 'your-secret-key', // Replace with your secret key
      { expiresIn: '1h' }
    );

    // Send the token back to the client
    res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    next(error); // Pass errors to the error handler
  }
};

// Register route
router.post('/register', registerHandler);

// Login route
router.post('/login', loginHandler);

// Error handling middleware (for catching errors passed via next())
router.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

export default router;
