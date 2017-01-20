export const send = (command) => {
  const {address, payload} = command
  const qs = querystring(payload)

  return fetch(`${address}?${qs}`)
    .then(res => res.ok && success(res) || error(res))
}

export default {
  send
}

function success (response) {
  return response.json()
}

function error (response) {
  const {statusText} = response

  return Promise.reject({
    message: statusText
  })
}

function querystring (payload) {
  return Object.keys(payload)
    .map(key => `${key}=${payload[key]}`)
    .join('&')
}
