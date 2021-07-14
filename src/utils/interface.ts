import { AnyAction } from "redux";

export interface IAppState {

}

export interface IRootState {
	app: IAppState
}

export interface IAppAction<T> extends AnyAction {
	type: T
	payload?: any
}
