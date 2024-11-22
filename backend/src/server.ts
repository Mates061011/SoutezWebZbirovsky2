import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db'; // Ensure this is your database connection file
import UserRoutes from './routes/UserRoute'; // Import the UserRoutes module

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

const app: Application = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Enable CORS
app.use(cors());

// Use the UserRoutes (which contains the login route)
app.use('/api/users', UserRoutes);

// Example route - Health check for server
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Server is running!' });
});

// Global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err); // Log the error for debugging
  res.status(500).json({ message: 'Something went wrong!' }); // Send a generic error message
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
