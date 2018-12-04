/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
let domain = ''
export const getDomain = () => {
  return domain
}
export const setDomain = ($domain) => {
  domain = $domain
}
export const request = (method, url, body, queryParameters, form, config) => {
  method = method.toLowerCase()
  let keys = Object.keys(queryParameters)
  let queryUrl = url
  if (keys.length > 0) {
    queryUrl = url + '?' + qs.stringify(queryParameters)
  }
  // let queryUrl = url+(keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
  if (body) {
    return axios[method](queryUrl, body, config)
  } else if (method === 'get' || method === 'delete' || method === 'head' || method === 'option') {
    return axios[method](queryUrl, config)
  } else {
    return axios[method](queryUrl, qs.stringify(form), config)
  }
}
/*==========================================================
 *                    
 ==========================================================*/
/**
 * 
 * request: createUser
 * url: createUserURL
 * method: createUser_TYPE
 * raw_url: createUser_RAW_URL
 * @param user - JSON representation of the user to be created.
 */
export const createUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {
    headers: {}
  }
  let path = '/users'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const createUser_RAW_URL = function() {
  return '/users'
}
export const createUser_TYPE = function() {
  return 'post'
}
export const createUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: updateUser
 * url: updateUserURL
 * method: updateUser_TYPE
 * raw_url: updateUser_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 * @param user - JSON representation of the user to be created.
 */
export const updateUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {
    headers: {}
  }
  let path = '/users'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken']
  }
  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'))
  }
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('put', domain + path, body, queryParameters, form, config)
}
export const updateUser_RAW_URL = function() {
  return '/users'
}
export const updateUser_TYPE = function() {
  return 'put'
}
export const updateUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: getUserData
 * url: getUserDataURL
 * method: getUserData_TYPE
 * raw_url: getUserData_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 */
export const getUserData = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {
    headers: {}
  }
  let path = '/users/profile'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken']
  }
  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const getUserData_RAW_URL = function() {
  return '/users/profile'
}
export const getUserData_TYPE = function() {
  return 'get'
}
export const getUserDataURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/profile'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: isUniqueUsername
 * url: isUniqueUsernameURL
 * method: isUniqueUsername_TYPE
 * raw_url: isUniqueUsername_RAW_URL
 * @param username - 
 */
export const isUniqueUsername = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {
    headers: {}
  }
  let path = '/users/username/exists/{username}'
  let body
  let queryParameters = {}
  let form = {}
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters['username'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: username'))
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('get', domain + path, body, queryParameters, form, config)
}
export const isUniqueUsername_RAW_URL = function() {
  return '/users/username/exists/{username}'
}
export const isUniqueUsername_TYPE = function() {
  return 'get'
}
export const isUniqueUsernameURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/username/exists/{username}'
  path = path.replace('{username}', `${parameters['username']}`)
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: authenticateUser
 * url: authenticateUserURL
 * method: authenticateUser_TYPE
 * raw_url: authenticateUser_RAW_URL
 * @param user - User credentials object.
 */
export const authenticateUser = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {
    headers: {}
  }
  let path = '/users/authenticate'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const authenticateUser_RAW_URL = function() {
  return '/users/authenticate'
}
export const authenticateUser_TYPE = function() {
  return 'post'
}
export const authenticateUserURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/authenticate'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: recoverPassword
 * url: recoverPasswordURL
 * method: recoverPassword_TYPE
 * raw_url: recoverPassword_RAW_URL
 * @param user - User e-mail.
 */
export const recoverPassword = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {
    headers: {}
  }
  let path = '/users/password/recover'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const recoverPassword_RAW_URL = function() {
  return '/users/password/recover'
}
export const recoverPassword_TYPE = function() {
  return 'post'
}
export const recoverPasswordURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/password/recover'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}
/**
 * 
 * request: updatePassword
 * url: updatePasswordURL
 * method: updatePassword_TYPE
 * raw_url: updatePassword_RAW_URL
 * @param xAccessToken - JWT created on user creation or authentication.
 * @param user - User credentials object.
 */
export const updatePassword = function(parameters = {}) {
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  const config = parameters.$config || {
    headers: {}
  }
  let path = '/users/password/update'
  let body
  let queryParameters = {}
  let form = {}
  if (parameters['xAccessToken'] !== undefined) {
    config.headers['x-access-token'] = parameters['xAccessToken']
  }
  if (parameters['xAccessToken'] === undefined) {
    return Promise.reject(new Error('Missing required  parameter: xAccessToken'))
  }
  if (parameters['user'] !== undefined) {
    body = parameters['user']
  }
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    });
  }
  return request('post', domain + path, body, queryParameters, form, config)
}
export const updatePassword_RAW_URL = function() {
  return '/users/password/update'
}
export const updatePassword_TYPE = function() {
  return 'post'
}
export const updatePasswordURL = function(parameters = {}) {
  let queryParameters = {}
  const domain = parameters.$domain ? parameters.$domain : getDomain()
  let path = '/users/password/update'
  if (parameters.$queryParameters) {
    Object.keys(parameters.$queryParameters).forEach(function(parameterName) {
      queryParameters[parameterName] = parameters.$queryParameters[parameterName]
    })
  }
  let keys = Object.keys(queryParameters)
  return domain + path + (keys.length > 0 ? '?' + (keys.map(key => key + '=' + encodeURIComponent(queryParameters[key])).join('&')) : '')
}