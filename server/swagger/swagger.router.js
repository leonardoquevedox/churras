/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 */

const swagger = require("swagger-spec-express");
const express = require("express");

class SwaggerRouter extends express.Router {
    constructor(entity) {
        super();
        swagger.swaggerize(this);
        this.entity = entity;
    }
}

module.exports = SwaggerRouter;