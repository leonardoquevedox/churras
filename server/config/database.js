/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Database configuration.
 */

const mongoose = require('mongoose');

module.exports = {
    connect: async function () {
        try {
            console.log(`☮ Connecting to MongoDB: ${process.env.MONGODB_URI}...`.yellow);
            mongoose.Promise = require('bluebird');
            mongoose.set('useCreateIndex', true);
            await mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
            return mongoose.connection.db;
        } catch (error) {
            console.log(`☮ MongoDB connection failure: ${error}!`.red);
        }
    },

}