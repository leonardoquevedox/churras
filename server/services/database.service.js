/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 */

module.exports = DatabaseService = {
    purify: (object) => {
        delete object.createdAt; // Removes timestamps in order to prevent conflicts
        delete object.updatedAt; // Removes timestamps in order to prevent conflicts
        delete object.__v; // Removes versioning in order to prevent conflicts
        return object; // Returns purified object
    }
};