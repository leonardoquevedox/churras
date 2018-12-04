/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Event model.
 */

// --------------- Module Imports
const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const timestamps = require('mongoose-timestamp');
const mongoose_delete = require('mongoose-delete');
const lifecycle = require('mongoose-lifecycle');

// --------------- Module Schema
const EventSchema = mongoose.Schema({
    name: { type: String, required: true }
});

// --------------- Module Plugins and Indexes
EventSchema.plugin(deepPopulate);
EventSchema.plugin(lifecycle);
EventSchema.plugin(timestamps);
EventSchema.plugin(mongoose_delete, { overrideMethods: 'all', validateBeforeDelete: false });

// --------------- Module Methods

// --------------- Module Hooks

// --------------- Module Model
module.exports = mongoose.model('Event', EventSchema);