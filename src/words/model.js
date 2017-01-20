import {request, receiveSuccess, receiveError} from './actions'
import {http} from '../core'
import {cseService} from '../cse'

const {httpGateway, httpCommand} = http

export const fetchAll = (lang) => (dispatch, getState) => {
  dispatch(request(lang))

  const command = httpCommand({address: `data/${lang}.json`})

  return httpGateway.send(command)
    .then(
      data => dispatch(receiveSuccess(lang, data)),
      error => dispatch(receiveError(lang, error)))
}

export const fetchImages = (word) => {
  return cseService.process({word})
}

export default {
  fetchAll,
  fetchImages
}
