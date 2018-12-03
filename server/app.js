/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Server main file.
 */

require('colors');
require('./overrides');
require('dotenv').config();
const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const staticZip = require('express-static-gzip');
const ip = require('ip');
const errorhandler = require('errorhandler');
const compression = require('compression');
const secure = require('express-force-https');
const database = require('./config/database');
const swaggify = require('./config/swagger');
const routes = require('./config/routes');
const staticZipConfig = {
    enableBrotli: true,
    orderPreference: ['br', 'gz']
};  

const app = express();
let host = ip.address();
let port = process.env.PORT || '3000';
app.use(secure);
app.use(compression());
app.use(cors());
app.use(errorhandler());
app.use(express.static(path.join(__dirname, 'public')));
app.use(staticZip(path.join(__dirname, 'public', 'build'), staticZipConfig));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(logger('dev'));
app.set('port', port);

const server = app.listen(port, () => {
    routes.init(app);
    swaggify.init(app);
    database.connect();
    console.log((`☮ Server: API listening on http://${host}:${port}`).green.bold);
});

// mars.socket(app, server);
module.exports = app;