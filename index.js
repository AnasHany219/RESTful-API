// Importing necessary modules
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

// Creating an Express application instance
const app = express();

// Setting the port number for the server
const PORT = 5000;

// Using bodyParser middleware to parse JSON bodies of incoming requests
app.use(bodyParser.json());

// Mounting the users routes at the '/users' endpoint
app.use('/users', usersRoutes);

// Starting the server and listening on the specified port
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));