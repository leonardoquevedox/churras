/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description User model.
 */

// --------------- Module Imports
const mongoose = require('mongoose');
const deepPopulate = require('mongoose-deep-populate')(mongoose);
const timestamps = require('mongoose-timestamp');
const mongoose_delete = require('mongoose-delete');
const lifecycle = require('mongoose-lifecycle');
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

// --------------- Module Schema
const UserSchema = mongoose.Schema({
    email: { type: String, default: '', unique: true, lowercase: true, sparse: true },
    password: { type: String },
    name: { type: String },
    birthdate: { type: Date },
    oauthData: { type: Object },
    provider: { type: String, default: 'native' }
});

// --------------- Module Plugins and Indexes
UserSchema.plugin(deepPopulate);
UserSchema.plugin(lifecycle);
UserSchema.plugin(timestamps);
UserSchema.plugin(mongoose_delete, { overrideMethods: 'all', validateBeforeDelete: false });

// --------------- Module Methods
UserSchema.methods.hashPassword = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.passwordIsValid = function (password) {
    if (!password || !this.password) return false;
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.getToken = function () {
    return jwt.sign({ _id: this._id }, process.env.MASTER_KEY)
};

// --------------- Module Hooks
UserSchema.pre('save', function (next) {
    if (this.password) this.password = this.hashPassword(this.password);
    next();
});

// --------------- Module Model
module.exports = mongoose.model('User', UserSchema);