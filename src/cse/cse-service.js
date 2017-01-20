import {http} from '../core'

const {httpCommand, httpGateway} = http

export const process = (options) => {
  const {word} = options

  const command = httpCommand({
    address: 'https://www.googleapis.com/customsearch/v1',
    payload: {
      cx: '014999456701677130218:y6tjz6azlb4',
      key: 'AIzaSyB2xC3dzf0G0ruWkMn03ynOHHXrx7POsLA',
      searchType: 'image',
      imgSize: 'small',
      lr: 'lang_da',
      q: word
    }
  })

  return httpGateway.send(command)
}

export default {
  process
}
