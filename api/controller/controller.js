const Users = require('../models/Users');

const getAllUsers = async (req, res) => {
    const results = await Users.getAll;
    console.log(results);
    res.send(results);
};

const addUser = async (req, res) => {
    const result = await Users.create({ id: '0', name: 'Dan' });
    console.log(result);
    res.send(result);
};

module.exports = { getAllUsers, addUser };
