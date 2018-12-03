/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description User routes.
 */

// --------------- Module Imports
const express = require('express');
const router = new express.Router();
const controller = require('./user.controller');
const auth = require('../../services/auth.service');
const execute = require('../../services/async.service');

// --------------- Module Controller
router.post('/', execute(async (req, res) => {
    let userInfo = req.body;
    let created = await controller.create(userInfo);
    return res.status(200).json(created);
}));

router.put('/', auth.isAuthenticated(), execute(async (req, res) => {
    let user = req.user;
    let updates = req.body;
    let updated = await controller.update(user, updates);
    return res.status(200).json(updated);
}));

router.get('/profile', auth.isAuthenticated(), execute(async (req, res) => {
    let user = req.user;
    let profile = await controller.get(user);
    return res.status(200).json(profile);
}));

router.get('/username/exists/:username', execute(async (req, res) => {
    let username = req.params.username;
    let isUnique = await controller.isUniqueUsername(username);
    return res.status(200).json(isUnique);
}));

router.post('/authenticate', auth.passwordIsValid(), execute(async (req, res) => {
    let username = req.body.email;
    let authenticated = await controller.authenticate(username);
    return res.status(200).json(authenticated);
}));

router.post('/password/recover/:email', execute(async (req, res) => {
    let email = req.params.email;
    let confirmation = await controller.recoverPassword(email);
    return res.status(200).json(confirmation);
}));

module.exports = router;