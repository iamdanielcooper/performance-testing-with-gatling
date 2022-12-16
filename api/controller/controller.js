const Users = require('../models/Users');
const Github = require('../models/Github');

const getAllUsers = async (req, res) => {
    userData = await Users.getAll;
    res.send(userData);
};

const getUserById = async (req, res) => {
    try {
        const result = await Users.getById(req.params.userId);
        const github = await Github.getGithubByUsername(
            result[0].githubUsername
        );
        res.send(github);
    } catch (error) {
        console.error(error);
        res.send(error);
    }
};

const addUser = async (req, res) => {
    const result = await Users.create({ id: '0', name: req.body.name });
    res.send(result);
};

module.exports = { getAllUsers, addUser, getUserById };
