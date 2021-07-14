import { combineReducers } from 'redux'
import { IRootState } from '../../utils/interface'

import appReducer from './app'

export default combineReducers<IRootState>({
	app : appReducer
	// router: connectRouter(history),
})
