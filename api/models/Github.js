const axios = require('axios');
const endpoint = 'https://api.github.com/users/';
const Cache = require('./Cache');

class Github extends Cache {
    constructor() {
        super();
    }

    static getGithubByUsername(username) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!!this.cachePresentByKey(username)) {
                    resolve(this.getCacheByKey(username));
                } else {
                    const response = await axios.get(`${endpoint}${username}`);
                    this.updateCacheByKey(username, response.data);
                    resolve(response.data);
                }
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = Github;
