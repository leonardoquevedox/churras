#!/usr/bin/env node

/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 */

require('colors');
const swaggerGen = require('swagger-es6');
const babel = require('@babel/core');
const exec = require('shelljs').exec;
const fs = require('fs-extra');
const path = require('path');

const rootPath = path.resolve(__dirname, '../../../');
const appRoot = path.join(rootPath, 'client');
const serverRoot = path.join(rootPath, 'server');
const apiClientDir = path.join(appRoot, 'src', 'api'); // Sets the output filename

function getApiClient() {
    process.env.PORT = '3400'; // Sets the server PORT in order to prevent EADDRESS issues
    console.log((`☮ API Client Generator: Running server in order to update swagger.json...`.yellow.bold));
    exec("npm start --updateswagger", { cwd: serverRoot });// Starting the server
    const swagger = require(path.join(serverRoot, 'swagger.json'));
    let opt = {
        swagger: swagger, // Swagger.json file
        moduleName: 'Client', // Exported module name
        className: 'Client' // Exported class name
    };
    return swaggerGen(opt); // Generates the code
}

async function generate() {
    let client = getApiClient();
    let indexPath = path.join(apiClientDir, '/index.js'); // Sets the module output where the exports will live
    let routesPath = path.join(apiClientDir, '/API.js'); // Sets the routes output where the actual logics will be stored
    let commonjs = await babel.transform(client, { plugins: ['@babel/plugin-transform-modules-commonjs'] }).code.replace("use strict", ""); // Adapts the code with babel for compatibilty
    fs.ensureDirSync(apiClientDir); // Creates the output dir
    fs.writeFileSync(routesPath, commonjs); // Writes the routes logics file
    fs.writeFileSync(indexPath, getIndexFile(routesPath)); // Writes the defition file for Typescript compatibility
    console.log((`☮ API Client Generator: API client generated successfully!`.green.bold)); // Finishes the build
    process.exit();
};

function getIndexFile(routesPath) {
    return `import * as API from "./API";\nexport default API;`; // Gets the index file content
};

generate();