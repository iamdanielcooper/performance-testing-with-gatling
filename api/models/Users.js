const database = require('../database/database');
const Cache = require('./Cache');

class Users extends Cache {
    constructor(data) {
        super();
        this.githubUsername = data.name.toLowerCase();
    }

    static get cacheKey() {
        return 'userData';
    }

    static create(data) {
        return new Promise((resolve, reject) => {
            const newUser = new Users(data);
            database.insert(newUser, (err, doc) => {
                this.clearCacheByKey(this.cacheKey);
                err ? reject(err) : resolve(doc);
            });
        });
    }

    static get getAll() {
        return new Promise((resolve, reject) => {
            if (!!this.cachePresentByKey(this.cacheKey)) {
                resolve(this.getCacheByKey(this.cacheKey));
            } else {
                database.find({}, (err, doc) => {
                    this.updateCacheByKey(this.cacheKey, doc);
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
}

module.exports = Users;
