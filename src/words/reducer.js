import {REQUEST, RECEIVE_SUCCESS, RECEIVE_ERROR} from './actionTypes'

const initialState = {
  isFetching: false,
  lang: null,
  items: [],
  error: null
}

const reducers = new Map([
  [REQUEST, request],
  [RECEIVE_SUCCESS, receiveSuccess],
  [RECEIVE_ERROR, receiveError]
])

export default (state = initialState, {type, payload}) => {
  if (!reducers.has(type)) return state
  const reduce = reducers.get(type)
  return reduce(state, payload)
}

function request (state, payload) {
  const {lang} = payload

  return Object.assign({}, state, {
    isFetching: true,
    error: null,
    lang
  })
}

function receiveSuccess (state, payload) {
  const {lang, items} = payload

  return Object.assign({}, state, {
    isFetching: false,
    error: null,
    lang,
    items
  })
}

function receiveError (state, payload) {
  const {lang, error} = payload

  return Object.assign({}, state, {
    isFetching: false,
    items: [],
    lang,
    error
  })
}
