import {createStore, applyMiddleware} from 'redux'
import craeteLogger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default () => {
  const logger = craeteLogger()
  const middlewares = applyMiddleware(logger, thunk)

  return createStore(rootReducer, middlewares)
}
