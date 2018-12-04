/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Event controller.
 */

// --------------- Module Imports
const Event = require('./event.model');

// --------------- Module Controller
const EventCtrl = module.exports = {
    errors: {
        DUPLICATED_USER: "DUPLICATED_USER"
    },
    save: async function (information) {
        console.log(information);
        return {};
        // let exists = await Event.findOne({ email: information.email }); // Tries to locate event
        // if (exists) throw new Error(EventCtrl.errors.DUPLICATED_USER); // In case it already exists, return error
        // let created = await Event.create(information); // Creates event on the database
        // let event = created.toObject(); // Turns event object into editable object
        // return Object.assign(event, { token: Event.schema.methods.getTokenFor(event._id) }); // Returns the created event
    },
    list: async function (id) {
        let events = await Event.find({ guests: email }); // Tries to locate event
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