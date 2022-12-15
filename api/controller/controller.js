const Users = require('../models/Users');
const cache = require('../cache/cache');

const getAllUsers = async (req, res) => {
    console.info('Retrieving user data from cache...');
    const users = cache.get('users');

    let userData;
    if (!users) {
        console.info('User data absent from cache...');
        userData = await Users.getAll;

        console.info('Adding user data to cache...');
        success = cache.set('users', userData, 10000);

        const cacheStatus = success
            ? 'Successfully added to cache'
            : 'Error adding to cache.';
        console.info(cacheStatus);
    } else {
        userData = users;
    }
    res.send(userData);
};

const addUser = async (req, res) => {
    console.log(req);

    const result = await Users.create({ id: '0', name: 'Dan' });
    cache.del('users');
    res.send(result);
};

module.exports = { getAllUsers, addUser };
