// Importing necessary modules
import express from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  deleteUserById,
  updateUserById
} from '../controllers/userControllers.js'

// Creating a new router instance
const router = express.Router();

// Route to handle GET requests to retrieve all users
router.get('/', getUsers);

// Route to handle POST requests to add a new user
router.post('/', createUser);

// Route to handle GET requests to retrieve a specific user by ID
router.get('/:id', getUserById);

// Route to handle DELETE requests to remove a user by ID
router.delete('/:id', deleteUserById);

// Route to handle PATCH requests to update a user's details by ID
router.patch('/:id', updateUserById);

// Exporting the router to be used in other parts of the application
export default router;