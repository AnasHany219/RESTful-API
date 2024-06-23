# RESTAPI 🚀

Welcome to UserAPI, a RESTful API for managing user data! This project provides endpoints for CRUD (Create, Read, Update, Delete) operations on users, allowing you to easily integrate user management functionality into your applications.

## Features ✨

- **Create**: Add new users to the database.
- **Read**: Retrieve user data, either all users or a specific user by ID.
- **Update**: Modify user details such as first name, last name, and age.
- **Delete**: Remove users from the database.

## Technologies Used 🛠️

- **Node.js**: JavaScript runtime environment.
- **Express**: Web framework for Node.js.
- **uuid**: Library for generating unique identifiers.
- **nodemon**: Utility for automatically restarting the server during development.

## Usage 🚦

1. Clone this repository: `git clone https://github.com/AnasHany219/RESTful-API.git`
2. Navigate to the project directory: `cd RESTful-API`
3. Install dependencies: `npm install`
4. Start the server: `npm start`
5. Access the API endpoints:
   - GET all users: `http://localhost:5000/users`
   - GET user by ID: `http://localhost:5000/users/{id}`
   - POST new user: `http://localhost:5000/users`
   - DELETE user by ID: `http://localhost:5000/users/{id}`
   - PATCH update user by ID: `http://localhost:5000/users/{id}`