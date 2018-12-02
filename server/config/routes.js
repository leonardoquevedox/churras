/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Routes configuration.
 */

const express = require('express');
const path = require('path');
const klawSync = require('klaw-sync');
const entitiesPath = path.resolve(__dirname, '..', 'entities');
const isWin = process.platform === 'win32';
const entities = klawSync(entitiesPath) // Returns the folder files list
    .map((entity) => { if (entity) return entity.path; }) // Maps object to file path only
    .filter((entity) => { return entity && (entity.indexOf('router.js') > -1) }) // Filters files leaving the routes

module.exports = {
    init: (app) => {
        let routePath = '';
        let router = express.Router();
        entities.forEach((route) => {
            routePath = isWin ? route.split('\\') : route.split('/');
            routePath = routePath[routePath.length - 2];
            router.use(`/${routePath}`, require(`${route}`));
            console.log(`♂ Initializing ${routePath.replace('-', ' ')} routes...`.yellow);
        });
        app.use(router); // Add to app routes
    }
}