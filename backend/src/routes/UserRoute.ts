import express, { Request, Response, NextFunction } from 'express';
import argon2 from 'argon2'; // Importing argon2
import jwt from 'jsonwebtoken';
import User from '../models/user'; // Adjust path to your User model

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

    // Hash the password using argon2
    const hashedPassword = await argon2.hash(password);

    // Create a new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Create a JWT token for the newly registered user
    const token = jwt.sign(
      { userId: newUser._id.toString(), username: newUser.username },
      process.env.JWT_SECRET || 'your-secret-key', // Replace with your secret key
      { expiresIn: '1h' }
    );

    // Send a response with the JWT token
    res.status(201).json({ message: 'User registered successfully', token });

  } catch (error) {
    next(error); // Pass errors to the error handler
  }
};

// Login handler
const loginHandler = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    if (!user) {
      res.status(400).json({ message: 'Invalid username' });
      return;
    }

    // Compare the password with the hashed password stored in the database using argon2
    const isPasswordValid = await argon2.verify(user.password, password);

    if (!isPasswordValid) {
      res.status(400).json({ message: 'Invalid password' });
      return;
    }

    // Create a JWT token if password is valid
    const token = jwt.sign(
      { userId: user._id.toString(), username: user.username },
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
