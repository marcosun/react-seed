/**
 * This module exports Action Creators
 * @module Login/Actions
 * @requires {@link module:Login/ActionTypes}
 */
import {
  TYPING_USERNAME,
  TYPING_PASSWORD,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from './actionTypes';

/**
 * Typing username action creator
 * @function
 * @param  {string} username - Login username
 * @return {Object} Redux action
 */
export const typingUsername = (username) => (
  {
    type: TYPING_USERNAME,
    username,
  }
);

/**
 * Typing password action creator
 * @function
 * @param  {string} password - Login password
 * @return {Object} Redux action
 */
export const typingPassword = (password) => (
  {
    type: TYPING_PASSWORD,
    password,
  }
);

/**
 * Login request action creator
 * @function
 * @param  {string} username - Login username
 * @param  {string} password - Login password
 * @return {Object} Redux action
 */
export const loginRequest = (username, password) => (
  {
    type: LOGIN_REQUEST,
    username,
    password,
  }
);

/**
 * Login success action creator
 * @function
 * @return {Object} Redux action
 */
export const loginSuccess = () => (
  {
    type: LOGIN_SUCCESS,
  }
);
