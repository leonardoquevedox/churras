/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description User routes.
 */

// --------------- Module Imports
const SwaggerExpressRouter = require('../../swagger/swagger.router');
const SwaggerUtils = require('../../swagger/swagger.utils');
const router = new SwaggerExpressRouter('user');
const controller = require('./users.controller');
const auth = require('../../services/auth.service');

// --------------- Module Controller

/**
 * @interface createUser
 * Creates user on the database.
 */
router.post('/', async (req, res) => {
    try {
        let userInfo = req.body;
        let created = await controller.create(userInfo);
        return res.status(200).json(created);
    } catch (e) { // In case of errors...
        switch (e.message) { // Returns specific statuses
            case controller.errors.DUPLICATED_USER:
                return res.status(409).json(e);
            default:
                return res.status(500).json(e);
        }
    }
}).describe({
    tags: [router.entity],
    operationId: "createUser",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [
        { "name": "user", "in": "body", "description": "JSON representation of the user to be created.", "schema": { "type": "object" } },
    ]
});

/**
 * @interface updateUser
 * Updates user on the database.
 */
router.put('/', auth.isAuthenticated(), async (req, res) => {
    let user = req.user;
    let updates = req.body;
    let updated = await controller.update(user, updates);
    return res.status(200).json(updated);
}).describe({
    tags: [router.entity],
    operationId: "updateUser",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [
        SwaggerUtils.authParam(),
        { "name": "user", "in": "body", "description": "JSON representation of the user to be created.", "schema": { "type": "object" } },
    ]
});

/**
 * @interface listUsers
 * List users from the database.
 */
router.get('/', async (req, res) => {
    try {
        let users = await controller.list();
        return res.status(200).json(users);
    } catch (e) { // In case of errors...
        return res.status(500).json(e);
    }
}).describe({
    tags: [router.entity],
    operationId: "listUsers",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [SwaggerUtils.authParam()]
});

/**
 * @interface getUserData
 * Retrieves user data from the database.
 */
router.get('/profile', auth.isAuthenticated(), async (req, res) => {
    let user = req.user;
    let profile = await controller.get(user);
    return res.status(200).json(profile);
}).describe({
    tags: [router.entity],
    operationId: "getUserData",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [SwaggerUtils.authParam()]
});

/**
 * @interface isUniqueUsername
 * Checks if username is unique on the database.
 */
router.get('/username/exists/:username', async (req, res) => {
    let username = req.params.username;
    let isUnique = await controller.isUniqueUsername(username);
    return res.status(200).json(isUnique);
}).describe({
    tags: [router.entity],
    operationId: "isUniqueUsername",
    responses: SwaggerUtils.defaultResponses(),
    parameters: []
});

/**
 * @interface authenticateUser
 * Tries to authenticate user.
 */
router.post('/authenticate', auth.passwordIsValid(), async (req, res) => {
    let username = req.body.email;
    let authenticated = await controller.authenticate(username);
    return res.status(200).json(authenticated);
}).describe({
    tags: [router.entity],
    operationId: "authenticateUser",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [
        SwaggerUtils.bodyParam("user", "User credentials object.", {
            type: "object",
            properties: { "email": { type: "string" }, "password": { type: "string" } },
            required: ["email", "password"]
        })
    ]
});

/**
 * @interface recoverPassword
 * Sends temporary password to the user e-mail.
 */
router.post("/password/recover", async (req, res) => {
    let email = req.body.email;
    let confirmation = await controller.recoverPassword(email);
    return res.status(200).json(confirmation);
}).describe({
    tags: [router.entity],
    operationId: "recoverPassword",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [SwaggerUtils.bodyParam("user", "User e-mail.", {
        type: "object",
        properties: {
            "email": { type: "string" }
        },
        required: ["email"]
    })]
});

/**
 * @interface updatePassword
 * Updates user password on the database.
 */
router.post("/password/update", auth.isAuthenticated(), auth.passwordIsValid(), async (req, res) => {
    let user = req.user;
    let newPassword = req.body.newPassword;
    let updated = await controller.updatePassword(user, newPassword);
    return res.status(200).json(updated);
}).describe({
    tags: [router.entity],
    operationId: "updatePassword",
    responses: SwaggerUtils.defaultResponses(),
    parameters: [SwaggerUtils.authParam(),
    SwaggerUtils.bodyParam("user", "User credentials object.", {
        type: "object",
        properties: {
            "password": { type: "string" },
            "newPassword": { type: "string" }
        },
        required: ["password", "newPassword"]
    })]
});

module.exports = router;