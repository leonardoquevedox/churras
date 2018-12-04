/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Event controller.
 */

// --------------- Module Imports
const Event = require('./event.model');
const DatabaseService = require('../../services/database.service');

// --------------- Module Controller
const EventCtrl = module.exports = {
    errors: {
        DUPLICATED_USER: "DUPLICATED_USER"
    },
    save: async function (event) {
        event.isNew = !(event && event._id); // Checks the event is being created
        if (!event.isNew) event = DatabaseService.purify(event); // Removes metadata in case is not
        let saved = event.isNew ? await Event.create(event) : await Event.findOneAndUpdate({ _id: event._id }, event, { new: true }); // Creates pet with the given information
        return saved; // Returns the saved event
    },
    list: async function (id) {
        let events = await Event.find(); // Tries to locate event
        return events; // Returns the created event
    },
    get: async function (id) {
        let event = await Event.findOne({ _id: id }); // Tries to locate event
        if (!event) throw new Error(EventCtrl.errors.DUPLICATED_USER); // In case it already exists, return error
        return event; // Returns the created event
    },
    deactivate: async function (id) {
        let event = await EventCtrl.get(id); // Tries to locate event
        return event; // Returns the created event
    },
    activate: async function (id) {
        let event = await EventCtrl.get(id); // Tries to locate event
        return event; // Returns the created event
    }
}
/* 
Event.remove({}, (error) => {
    console.log(error);
}); */