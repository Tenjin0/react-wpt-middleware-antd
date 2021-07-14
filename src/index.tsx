import * as React from "react";
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import {} from "@wynd/redux-wps-middleware"

import store from "./store"
import App from "./components/App"
import "./styles/index.less";

render(
	<Provider store={store}>
			<App />
	</Provider>,
	document.getElementById("root")
)
