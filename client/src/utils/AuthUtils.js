import config from '../config/index';
import StringUtils from './StringUtils';

export default class AuthUtils {

    /* Class attributes */
    static USER_TOKEN_KEY = StringUtils.toUnderscoreCase(`${config.application_name.toUpperCase()}_USER_TOKEN`);
    static USER_PROFILE_KEY = StringUtils.toUnderscoreCase(`${config.application_name.toUpperCase()}_USER_PROFILE`);

    /**
    * @function storeProfile
    * Sets both logged in user and token within the app.
    */
    static storeProfile(user) {
        if (!user) return;
        AuthUtils.setUser(user);
        AuthUtils.setToken(user.token);
    }

    /**
     * @function getUser
     * Sets the logged in user within the app.
     */
    static getUser() {
        return localStorage.hasOwnProperty(AuthUtils.USER_PROFILE_KEY) ?
            JSON.parse(localStorage[AuthUtils.USER_PROFILE_KEY]) :
            undefined;
    }

    /**
     * @function setUser
     * Checks if the user is logged in on the app.
     */
    static setUser(user) {
        return localStorage[AuthUtils.USER_PROFILE_KEY] = JSON.stringify(user);
    }

    /**
   * @function getToken
   * Sets the logged in user within the app.
   */
    static getToken() {
        return localStorage.hasOwnProperty(AuthUtils.USER_TOKEN_KEY) ?
            JSON.parse(localStorage[AuthUtils.USER_TOKEN_KEY]) :
            undefined;
    }

    /**
   * @function setToken
   * Sets the logged in user within the app.
   */
    static setToken(token) {
        return localStorage[AuthUtils.USER_TOKEN_KEY] = JSON.stringify(token);
    }

    /**
    * @function isLoggedIn
    * Checks if the user is logged in on the app.
    */
    static isLoggedIn() {
        return localStorage[AuthUtils.USER_TOKEN_KEY] !== undefined;
    }
}