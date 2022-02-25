import { combineReducers } from 'redux'
import { IRootState } from '../../utils/interface'

import { createWpsReducer, RWMEnum, RWMInterface, fastprinter, FastPrinter } from "@wynd/redux-wps-middleware"

import appReducer from './app'

export default combineReducers({
	app : appReducer,
	wyndpostools: createWpsReducer([ RWMEnum.EPluginName.UNIVERSALTERMINAL ], { enable_warning: true}),
	// router: connectRouter(history),
})
