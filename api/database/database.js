const Datastore = require('nedb');

const database = new Datastore({ filename: './database/data', autoload: true });

module.exports = database;
