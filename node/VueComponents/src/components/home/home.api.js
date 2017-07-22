import { get } from '../../utils/request'

export {
  getUser
}

function getUser () {
  return get({url: 'getUser'}).then(undefined, errorCallback)
}

function errorCallback (msg) {
  console.warn(`error:${msg}`)
}
