"";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePasswordURL = exports.updatePassword_TYPE = exports.updatePassword_RAW_URL = exports.updatePassword = exports.recoverPasswordURL = exports.recoverPassword_TYPE = exports.recoverPassword_RAW_URL = exports.recoverPassword = exports.authenticateUserURL = exports.authenticateUser_TYPE = exports.authenticateUser_RAW_URL = exports.authenticateUser = exports.isUniqueUsernameURL = exports.isUniqueUsername_TYPE = exports.isUniqueUsername_RAW_URL = exports.isUniqueUsername = exports.getUserDataURL = exports.getUserData_TYPE = exports.getUserData_RAW_URL = exports.getUserData = exports.listUsersURL = exports.listUsers_TYPE = exports.listUsers_RAW_URL = exports.listUsers = exports.updateUserURL = exports.updateUser_TYPE = exports.updateUser_RAW_URL = exports.updateUser = exports.createUserURL = exports.createUser_TYPE = exports.createUser_RAW_URL = exports.createUser = exports.activateEventURL = exports.activateEvent_TYPE = exports.activateEvent_RAW_URL = exports.activateEvent = exports.deactivateEventURL = exports.deactivateEvent_TYPE = exports.deactivateEvent_RAW_URL = exports.deactivateEvent = exports.getEventURL = exports.getEvent_TYPE = exports.getEvent_RAW_URL = exports.getEvent = exports.getEventsListURL = exports.getEventsList_TYPE = exports.getEventsList_RAW_URL = exports.getEventsList = exports.saveEventURL = exports.saveEvent_TYPE = exports.saveEvent_RAW_URL = exports.saveEvent = exports.request = exports.setDomain = exports.getDomain = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */
let domain = '';

const getDomain = () => {
  return domain;
};

exports.getDomain = getDomain;

const setDomain = $domain => {
  domain = $domain;
};

exports.setDomain = setDomain;

const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase();
  let keys = Object.keys(queryParameters);
  let queryUrl = url;

  if (keys.length > 0) {
    queryUrl = url + '?' + _qs.default.stringify(queryParameters);
  } // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')


  if (body) {
    return _axios.default[method](queryUrl, body, config);
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    return _axios.default[method](queryUrl, config);
  } else {
    return _axios.default[method](queryUrl, _qs.default.stringify(form), config);
  }
};
/*==========================================================
 *                    
 ==========================================================*/

/**
 * 
 * request: saveEvent
 * url: saveEventURL
 * method: saveEvent_TYPE
 * raw_url: saveEvent_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 * @param event - JSON representation of the event to be created.
 */


exports.request = request;

const saveEvent = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/events';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken'];
  }

  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'));
  }

  if (parameters['event'] !== undefined) {
    body = parameters['event'];
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('post', domain + path, body, queryParameters, form, config);
};

exports.saveEvent = saveEvent;

const saveEvent_RAW_URL = function () {
  return '/events';
};

exports.saveEvent_RAW_URL = saveEvent_RAW_URL;

const saveEvent_TYPE = function () {
  return 'post';
};

exports.saveEvent_TYPE = saveEvent_TYPE;

const saveEventURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/events';

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: getEventsList
 * url: getEventsListURL
 * method: getEventsList_TYPE
 * raw_url: getEventsList_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 */


exports.saveEventURL = saveEventURL;

const getEventsList = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/events';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken'];
  }

  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'));
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('get', domain + path, body, queryParameters, form, config);
};

exports.getEventsList = getEventsList;

const getEventsList_RAW_URL = function () {
  return '/events';
};

exports.getEventsList_RAW_URL = getEventsList_RAW_URL;

const getEventsList_TYPE = function () {
  return 'get';
};

exports.getEventsList_TYPE = getEventsList_TYPE;

const getEventsListURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/events';

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: getEvent
 * url: getEventURL
 * method: getEvent_TYPE
 * raw_url: getEvent_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 * @param id - 
 */


exports.getEventsListURL = getEventsListURL;

const getEvent = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/events/{id}';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken'];
  }

  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'));
  }

  path = path.replace('{id}', `${parameters['id']}`);

  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'));
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('get', domain + path, body, queryParameters, form, config);
};

exports.getEvent = getEvent;

const getEvent_RAW_URL = function () {
  return '/events/{id}';
};

exports.getEvent_RAW_URL = getEvent_RAW_URL;

const getEvent_TYPE = function () {
  return 'get';
};

exports.getEvent_TYPE = getEvent_TYPE;

const getEventURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/events/{id}';
  path = path.replace('{id}', `${parameters['id']}`);

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: deactivateEvent
 * url: deactivateEventURL
 * method: deactivateEvent_TYPE
 * raw_url: deactivateEvent_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 * @param id - 
 */


exports.getEventURL = getEventURL;

const deactivateEvent = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/events/deactivate/{id}';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken'];
  }

  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'));
  }

  path = path.replace('{id}', `${parameters['id']}`);

  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'));
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('post', domain + path, body, queryParameters, form, config);
};

exports.deactivateEvent = deactivateEvent;

const deactivateEvent_RAW_URL = function () {
  return '/events/deactivate/{id}';
};

exports.deactivateEvent_RAW_URL = deactivateEvent_RAW_URL;

const deactivateEvent_TYPE = function () {
  return 'post';
};

exports.deactivateEvent_TYPE = deactivateEvent_TYPE;

const deactivateEventURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/events/deactivate/{id}';
  path = path.replace('{id}', `${parameters['id']}`);

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: activateEvent
 * url: activateEventURL
 * method: activateEvent_TYPE
 * raw_url: activateEvent_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 * @param id - 
 */


exports.deactivateEventURL = deactivateEventURL;

const activateEvent = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/events/activate/{id}';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken'];
  }

  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'));
  }

  path = path.replace('{id}', `${parameters['id']}`);

  if (parameters['id'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: id'));
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('post', domain + path, body, queryParameters, form, config);
};

exports.activateEvent = activateEvent;

const activateEvent_RAW_URL = function () {
  return '/events/activate/{id}';
};

exports.activateEvent_RAW_URL = activateEvent_RAW_URL;

const activateEvent_TYPE = function () {
  return 'post';
};

exports.activateEvent_TYPE = activateEvent_TYPE;

const activateEventURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/events/activate/{id}';
  path = path.replace('{id}', `${parameters['id']}`);

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: createUser
 * url: createUserURL
 * method: createUser_TYPE
 * raw_url: createUser_RAW_URL
 * @param user - JSON representation of the user to be created.
 */


exports.activateEventURL = activateEventURL;

const createUser = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/users';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['user'] !== undefined) {
    body = parameters['user'];
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('post', domain + path, body, queryParameters, form, config);
};

exports.createUser = createUser;

const createUser_RAW_URL = function () {
  return '/users';
};

exports.createUser_RAW_URL = createUser_RAW_URL;

const createUser_TYPE = function () {
  return 'post';
};

exports.createUser_TYPE = createUser_TYPE;

const createUserURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/users';

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: updateUser
 * url: updateUserURL
 * method: updateUser_TYPE
 * raw_url: updateUser_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 * @param user - JSON representation of the user to be created.
 */


exports.createUserURL = createUserURL;

const updateUser = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/users';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken'];
  }

  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'));
  }

  if (parameters['user'] !== undefined) {
    body = parameters['user'];
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('put', domain + path, body, queryParameters, form, config);
};

exports.updateUser = updateUser;

const updateUser_RAW_URL = function () {
  return '/users';
};

exports.updateUser_RAW_URL = updateUser_RAW_URL;

const updateUser_TYPE = function () {
  return 'put';
};

exports.updateUser_TYPE = updateUser_TYPE;

const updateUserURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/users';

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: listUsers
 * url: listUsersURL
 * method: listUsers_TYPE
 * raw_url: listUsers_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 */


exports.updateUserURL = updateUserURL;

const listUsers = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/users';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken'];
  }

  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'));
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('get', domain + path, body, queryParameters, form, config);
};

exports.listUsers = listUsers;

const listUsers_RAW_URL = function () {
  return '/users';
};

exports.listUsers_RAW_URL = listUsers_RAW_URL;

const listUsers_TYPE = function () {
  return 'get';
};

exports.listUsers_TYPE = listUsers_TYPE;

const listUsersURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/users';

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: getUserData
 * url: getUserDataURL
 * method: getUserData_TYPE
 * raw_url: getUserData_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 */


exports.listUsersURL = listUsersURL;

const getUserData = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/users/profile';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken'];
  }

  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'));
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('get', domain + path, body, queryParameters, form, config);
};

exports.getUserData = getUserData;

const getUserData_RAW_URL = function () {
  return '/users/profile';
};

exports.getUserData_RAW_URL = getUserData_RAW_URL;

const getUserData_TYPE = function () {
  return 'get';
};

exports.getUserData_TYPE = getUserData_TYPE;

const getUserDataURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/users/profile';

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: isUniqueUsername
 * url: isUniqueUsernameURL
 * method: isUniqueUsername_TYPE
 * raw_url: isUniqueUsername_RAW_URL
 * @param username - 
 */


exports.getUserDataURL = getUserDataURL;

const isUniqueUsername = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/users/username/exists/{username}';
  let body;
  let queryParameters = {};
  let form = {};
  path = path.replace('{username}', `${parameters['username']}`);

  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'));
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('get', domain + path, body, queryParameters, form, config);
};

exports.isUniqueUsername = isUniqueUsername;

const isUniqueUsername_RAW_URL = function () {
  return '/users/username/exists/{username}';
};

exports.isUniqueUsername_RAW_URL = isUniqueUsername_RAW_URL;

const isUniqueUsername_TYPE = function () {
  return 'get';
};

exports.isUniqueUsername_TYPE = isUniqueUsername_TYPE;

const isUniqueUsernameURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/users/username/exists/{username}';
  path = path.replace('{username}', `${parameters['username']}`);

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: authenticateUser
 * url: authenticateUserURL
 * method: authenticateUser_TYPE
 * raw_url: authenticateUser_RAW_URL
 * @param user - User credentials object.
 */


exports.isUniqueUsernameURL = isUniqueUsernameURL;

const authenticateUser = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/users/authenticate';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['user'] !== undefined) {
    body = parameters['user'];
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('post', domain + path, body, queryParameters, form, config);
};

exports.authenticateUser = authenticateUser;

const authenticateUser_RAW_URL = function () {
  return '/users/authenticate';
};

exports.authenticateUser_RAW_URL = authenticateUser_RAW_URL;

const authenticateUser_TYPE = function () {
  return 'post';
};

exports.authenticateUser_TYPE = authenticateUser_TYPE;

const authenticateUserURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/users/authenticate';

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: recoverPassword
 * url: recoverPasswordURL
 * method: recoverPassword_TYPE
 * raw_url: recoverPassword_RAW_URL
 * @param user - User e-mail.
 */


exports.authenticateUserURL = authenticateUserURL;

const recoverPassword = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/users/password/recover';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['user'] !== undefined) {
    body = parameters['user'];
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('post', domain + path, body, queryParameters, form, config);
};

exports.recoverPassword = recoverPassword;

const recoverPassword_RAW_URL = function () {
  return '/users/password/recover';
};

exports.recoverPassword_RAW_URL = recoverPassword_RAW_URL;

const recoverPassword_TYPE = function () {
  return 'post';
};

exports.recoverPassword_TYPE = recoverPassword_TYPE;

const recoverPasswordURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/users/password/recover';

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};
/**
 * 
 * request: updatePassword
 * url: updatePasswordURL
 * method: updatePassword_TYPE
 * raw_url: updatePassword_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 * @param user - User credentials object.
 */


exports.recoverPasswordURL = recoverPasswordURL;

const updatePassword = function (parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  const config = parameters.$config || {
    headers: {}
  };
  let path = '/users/password/update';
  let body;
  let queryParameters = {};
  let form = {};

  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken'];
  }

  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'));
  }

  if (parameters['user'] !== undefined) {
    body = parameters['user'];
  }

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  return request('post', domain + path, body, queryParameters, form, config);
};

exports.updatePassword = updatePassword;

const updatePassword_RAW_URL = function () {
  return '/users/password/update';
};

exports.updatePassword_RAW_URL = updatePassword_RAW_URL;

const updatePassword_TYPE = function () {
  return 'post';
};

exports.updatePassword_TYPE = updatePassword_TYPE;

const updatePasswordURL = function (parameters = {}) {
  let queryParameters = {};
  const domain = parameters.$domain ? parameters.$domain : getDomain();
  let path = '/users/password/update';

  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function (parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName];
    });
  }

  let keys = Object.keys(queryParameters);
  return domain + path + (keys.length > 0 ? '?' + keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&') : '');
};

exports.updatePasswordURL = updatePasswordURL;