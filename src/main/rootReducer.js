import {combineReducers} from 'redux'
import words from '../words'

export default combineReducers({
  [words.constants.NAME]: words.reducer
})
