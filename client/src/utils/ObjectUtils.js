export default class ObjectUtils {

    /**
    * @function hasKeys
    * Checks if an object has a list of given keys.
    */
    static hasKeys(obj, keys) {
        return keys.every((key) => ObjectUtils.hasKey(obj, key));
    }

    /**
    * @function hasKey
    * Checks if a given key exists on the object.
    */
    static hasKey(obj, key) {
        return key.split(".").reduce(function (o, x) {
            return (typeof o == "undefined" || o === null) ? o : o[x];
        }, obj);
    }
}