const axios = require('axios');
const endpoint = 'https://api.github.com/users/';

class Github {
    constructor(data) {}

    static getGithubByUsername(username) {
        return new Promise(async (resolve, reject) => {
            try {
                // Get the url
                const response = await axios.get(`${endpoint}${username}`);
                // Create a new user from the constructor
                // return it to the user
                resolve(response.data);
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = Github;
