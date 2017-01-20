import createStore from './createStore'
import core from '../core'
import words from '../words'

export default () => {
  const store = createStore()
  window.core = core
  window.store = store
  window.words = words
}
