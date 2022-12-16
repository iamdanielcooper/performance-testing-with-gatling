const database = require('../database/database');

class Users {
    constructor(data) {
        this.githubUsername = data.name.toLowerCase();
    }

    static create(data) {
        return new Promise((resolve, reject) => {
            const newUser = new Users(data);
            database.insert(newUser, (err, doc) => {
                err ? reject(err) : resolve(doc);
            });
        });
    }

    static get getAll() {
        return new Promise((resolve, reject) => {
            database.find({}, (err, doc) => {
                err ? reject(err) : resolve(doc);
            });
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
