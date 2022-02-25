import { AnyAction } from "redux";
import { RWMInterface } from "@wynd/redux-wps-middleware";

export interface IAppState {

}

export interface IRootState {
	wyndpostools: RWMInterface.IWPTState,
	app: IAppState
}

export interface IAppAction<T> extends AnyAction {
	type: T
	payload?: any
}
