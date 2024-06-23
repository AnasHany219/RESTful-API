import {
    v4 as uuidv4
} from 'uuid';

// Initializing an empty array to store user data
let users = [];

// Controller for handling GET requests to retrieve all users
export const getUsers = (req, res) => {
    res.send(users);
};

// Controller for handling POST requests to add a new user
export const createUser = (req, res) => {
    const userWithId = {
        ...req.body,
        id: uuidv4()
    };
    users.push(userWithId);
    res.send(`User with the name '${userWithId.firstName}' added to the database!`);
};

// Controller for handling GET requests to retrieve a specific user by ID
export const getUserById = (req, res) => {
    const {
        id
    } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
};

// Controller for handling DELETE requests to remove a user by ID
export const deleteUserById = (req, res) => {
    const {
        id
    } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the ID '${id}' deleted from the database.`);
};

// Controller for handling PATCH requests to update a user's details by ID
export const updateUserById = (req, res) => {
    const {
        id
    } = req.params;
    const {
        firstName,
        lastName,
        age
    } = req.body;
    const user = users.find((user) => user.id === id);

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`User with the ID '${id}' has been updated.`);
};