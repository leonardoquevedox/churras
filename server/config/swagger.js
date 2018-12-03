/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Swagger configuration.
 */

const path = require("path");
const fs = require("fs-extra");
const swaggerSpecs = require("swagger-spec-express");
const swaggerUi = require("swagger-ui-express");
const metadata = require("../package.json");

module.exports = {
    init: async function swagger(app) {
        swaggerSpecs.initialise(app, { title: "API Docs", version: metadata.version });
        swaggerSpecs.compile();
        fs.writeFileSync(path.join(__dirname, "../", "swagger.json"), JSON.stringify(swaggerSpecs.json()));
        app.use("/swagger.io", (req, res) => { return res.status(200).send(swaggerSpecs.json()) });
        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(null, null, null, `.swagger-ui .wrapper { max-width: 800px; margin: auto; } `, null, `/swagger.io`, "API Docs"));
    }
}