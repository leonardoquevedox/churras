/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description User routes.
 */

// --------------- Module Imports
const SwaggerExpressRouter = require('../../swagger/swagger.router');
const SwaggerUtils = require('../../swagger/swagger.utils');
const router = new SwaggerExpressRouter('event');
const controller = require('./events.controller');
const auth = require('../../services/auth.service');

// --------------- Module Controller

/**
 * @interface saveEvent
 * Creates or updates an event on the database.
 */
router.post('/', auth.isAuthenticated(), async (req, res) => {
    try {
        let eventInfo = req.body;
        let saved = await controller.save(eventInfo);
        return res.status(200).json(saved);
    } catch (e) { // In case of errors...
        console.log(e);
        switch (e.message) { // Returns specific statuses
            case controller.errors.MUTIPLE_EVENTS_ON_SAME_DAY:
                return res.status(409).json(e);
            default:
                return res.status(500).json(e);
        }
    }
}).describe({
    tags: [router.entity],
    operationId: "saveEvent",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [
        SwaggerUtils.authParam(),
        { "name": "event", "in": "body", "description": "JSON representation of the event to be created.", "schema": { "type": "object" } },
    ]
});

/**
 * @interface saveEvent
 * Creates or updates an event on the database.
 */
router.get('/by-user', auth.isAuthenticated(), async (req, res) => {
    try {
        let events = await controller.getByUser(req.user._id);
        return res.status(200).json(events);
    } catch (e) { // In case of errors...
        switch (e.message) { // Returns specific statuses
            case controller.errors.EVENT_NOT_FOUND:
                return res.status(404).json(e);
            default:
                return res.status(500).json(e);
        }
    }
}).describe({
    tags: [router.entity],
    operationId: "getEventsByUser",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [SwaggerUtils.authParam()]
});

/**
 * @interface saveEvent
 * Creates or updates an event on the database.
 */
router.get('/:id', auth.isAuthenticated(), async (req, res) => {
    try {
        let event = await controller.get(req.params.id);
        return res.status(200).json(event);
    } catch (e) { // In case of errors...
        switch (e.message) { // Returns specific statuses
            case controller.errors.EVENT_NOT_FOUND:
                return res.status(404).json(e);
            default:
                return res.status(500).json(e);
        }
    }
}).describe({
    tags: [router.entity],
    operationId: "getEvent",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [SwaggerUtils.authParam()]
});

/**
 * @interface saveEvent
 * Creates or updates an event on the database.
 */
router.post('/deactivate/:id', auth.isAuthenticated(), async (req, res) => {
    try {
        let event = await controller.deactivate(req.params.id);
        return res.status(200).json(event);
    } catch (e) { // In case of errors...
        switch (e.message) { // Returns specific statuses
            case controller.errors.EVENT_NOT_FOUND:
                return res.status(404).json(e);
            default:
                return res.status(500).json(e);
        }
    }
}).describe({
    tags: [router.entity],
    operationId: "deactivateEvent",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [SwaggerUtils.authParam()]
});

/**
 * @interface saveEvent
 * Creates or updates an event on the database.
 */
router.post('/activate/:id', auth.isAuthenticated(), async (req, res) => {
    try {
        let event = await controller.activate(req.params.id);
        return res.status(200).json(event);
    } catch (e) { // In case of errors...
        switch (e.message) { // Returns specific statuses
            case controller.errors.EVENT_NOT_FOUND:
                return res.status(404).json(e);
            default:
                return res.status(500).json(e);
        }
    }
}).describe({
    tags: [router.entity],
    operationId: "activateEvent",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [SwaggerUtils.authParam()]
});

module.exports = router;