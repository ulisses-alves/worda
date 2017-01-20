import {REQUEST, RECEIVE_SUCCESS, RECEIVE_ERROR} from './actionTypes'

export const request = (lang) => ({
  type: REQUEST,
  payload: {lang}
})

export const receiveSuccess = (lang, payload) => ({
  type: RECEIVE_SUCCESS,
  payload: {lang, items: payload}
})

export const receiveError = (lang, error) => ({
  type: RECEIVE_ERROR,
  payload: {lang, error}
})
