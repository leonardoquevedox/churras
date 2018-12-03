/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Routes configuration.
 */

const express = require('express');
const path = require('path');
const klawSync = require('klaw-sync');
const routesPath = path.resolve(__dirname, '..', 'routes');
const isWin = process.platform === 'win32';
const routes = klawSync(routesPath) // Returns the folder files list
    .map((route) => { if (route) return route.path; }) // Maps object to file path only
    .filter((route) => { return route && (route.indexOf('router.js') > -1) }) // Filters files leaving the routes

module.exports = {
    init: (app) => {
        let routePath = '';
        let router = express.Router();
        routes.forEach((route) => {
            routePath = isWin ? route.split('\\') : route.split('/');
            routePath = routePath[routePath.length - 2];
            router.use(`/${routePath}`, require(`${route}`));
            console.log(`☮ Initializing ${routePath.replace('-', ' ')} routes...`.yellow);
        });
        app.use(router); // Add to app routes
    }
}