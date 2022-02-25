import { Reducer } from 'redux'

import { IAppAction, IAppState } from '../../utils/interface'
import initState from '../iniState'
import { TAppActionTypeKeys } from '../actions'

const  appReducer: Reducer<IAppState, IAppAction<TAppActionTypeKeys>> = (
	state: IAppState = initState,
	action
) => {

	return state

}

export default appReducer
