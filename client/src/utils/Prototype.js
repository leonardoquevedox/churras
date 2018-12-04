/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Prototype extensions.
 */

import moment from 'moment-mini';

export default class Prototype {};

Array.prototype.indexOfObject = function (property, value) {
    if (property.indexOf(".") > -1) console.log(property.split("."));
    for (var i = 0, len = this.length; i < len; i++) {
        if (this[i][property] === value) return i;
    }
    return -1;
};

Date.prototype.fromNow = function () {
    return moment(this).locale('pt-br').fromNow();
}

Array.prototype.indexOfObject = function (property, value) {
    for (let i = 0, len = this.length; i < len; i++) {
        if (this[i] !== null && this[i][property] === value) return i;
    }
    return -1;
}

Array.prototype.containsObjectWith = function (property, value) {
    return this.indexOfObject(property, value) > -1;
}

Number.prototype.toRad = function () {
    return this * Math.PI / 180;
}