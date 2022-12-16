const database = require('../database/database');
const cache = require('../cache/cache');

class Users {
    constructor(data) {
        this.githubUsername = data.name.toLowerCase();
    }

    static create(data) {
        return new Promise((resolve, reject) => {
            const newUser = new Users(data);
            database.insert(newUser, (err, doc) => {
                this.clearUserCache();
                err ? reject(err) : resolve(doc);
            });
        });
    }

    static get getAll() {
        return new Promise((resolve, reject) => {
            if (!!this.userCachePresent()) {
                resolve(this.getUserCache());
            } else {
                database.find({}, (err, doc) => {
                    this.updateUserCache(doc);
                    err ? reject(err) : resolve(doc);
                });
            }
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            database.find({ _id: id }, (err, doc) => {
                err ? reject(err) : resolve(doc);
            });
        });
    }

    static updateUserCache(userData) {
        console.info('Adding user data to cache...');
        return cache.set('users', userData, 10000);
    }

    static userCachePresent() {
        return !!cache.get('users');
    }

    static getUserCache() {
        console.info('Retrieving user data from cache...');
        return cache.get('users');
    }

    static clearUserCache() {
        console.info('Clearing user cache...');
        cache.del('users');
    }
}

module.exports = Users;
